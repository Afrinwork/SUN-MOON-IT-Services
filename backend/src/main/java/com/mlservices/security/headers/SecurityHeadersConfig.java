package com.mlservices.security.headers;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter.ReferrerPolicy;

/** Sicherheits-Header für alle API-Antworten (nginx setzt zusätzlich eigene für das Frontend). */
@Configuration
public class SecurityHeadersConfig {

	// Die API liefert nur JSON: nichts laden, nicht einbetten.
	static final String CONTENT_SECURITY_POLICY = "default-src 'none'; frame-ancestors 'none'; base-uri 'none'";
	static final String PERMISSIONS_POLICY = "camera=(), microphone=(), geolocation=(), payment=()";
	private static final long HSTS_MAX_AGE_SECONDS = 63_072_000; // 2 Jahre

	@Bean
	Customizer<HeadersConfigurer<HttpSecurity>> securityHeaders() {
		return headers -> headers
				.contentSecurityPolicy(csp -> csp.policyDirectives(CONTENT_SECURITY_POLICY))
				.frameOptions(HeadersConfigurer.FrameOptionsConfig::deny)
				.referrerPolicy(referrer -> referrer.policy(ReferrerPolicy.NO_REFERRER))
				.permissionsPolicyHeader(permissions -> permissions.policy(PERMISSIONS_POLICY))
				.httpStrictTransportSecurity(hsts -> hsts.includeSubDomains(true).maxAgeInSeconds(HSTS_MAX_AGE_SECONDS));
	}
}
