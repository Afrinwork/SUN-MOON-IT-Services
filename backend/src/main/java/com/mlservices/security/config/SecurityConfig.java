package com.mlservices.security.config;

import com.mlservices.common.constants.ApiPaths;
import com.mlservices.config.properties.SecurityProperties;
import com.mlservices.ratelimit.config.RateLimitProperties;
import com.mlservices.ratelimit.filter.RateLimitFilter;
import com.mlservices.ratelimit.service.RateLimitService;
import com.mlservices.security.filters.RequestSecurityFilter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.header.HeaderWriterFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

/**
 * Kein Login, keine Sessions, keine Formulare: nur GET /api/health ist öffentlich, alles andere gesperrt.
 */
@Configuration
public class SecurityConfig {

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http,
			Customizer<HeadersConfigurer<HttpSecurity>> securityHeaders,
			SecurityProperties securityProperties,
			RateLimitService rateLimitService,
			RateLimitProperties rateLimitProperties,
			@Qualifier("handlerExceptionResolver") HandlerExceptionResolver exceptionResolver) throws Exception {

		http
				.csrf(csrf -> csrf.disable()) // keine Cookies/Sessions -> kein CSRF-Risiko
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.httpBasic(basic -> basic.disable())
				.formLogin(form -> form.disable())
				.logout(logout -> logout.disable())
				.cors(Customizer.withDefaults())
				.headers(securityHeaders)
				// nach HeaderWriterFilter: auch abgewiesene Antworten tragen die Sicherheits-Header
				.addFilterAfter(new RequestSecurityFilter(securityProperties, exceptionResolver),
						HeaderWriterFilter.class)
				.addFilterAfter(new RateLimitFilter(rateLimitService, rateLimitProperties, exceptionResolver),
						RequestSecurityFilter.class)
				.authorizeHttpRequests(auth -> auth
						.requestMatchers(HttpMethod.GET, ApiPaths.HEALTH).permitAll()
						.requestMatchers(HttpMethod.HEAD, ApiPaths.HEALTH).permitAll()
						.requestMatchers("/error").permitAll()
						.anyRequest().denyAll());
		return http.build();
	}

	/** Keine Benutzerkonten – verhindert das automatisch generierte Standard-Passwort. */
	@Bean
	UserDetailsService userDetailsService() {
		return new InMemoryUserDetailsManager();
	}
}
