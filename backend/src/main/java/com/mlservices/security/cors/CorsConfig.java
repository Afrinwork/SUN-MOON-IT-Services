package com.mlservices.security.cors;

import com.mlservices.common.constants.ApiPaths;
import com.mlservices.config.properties.SecurityProperties;
import java.time.Duration;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/**
 * CORS nur für ausdrücklich erlaubte Origins. Im Normalbetrieb laufen Frontend und API über dieselbe
 * Domain (nginx), CORS ist dann gar nicht nötig.
 */
@Configuration
public class CorsConfig {

	@Bean
	CorsConfigurationSource corsConfigurationSource(SecurityProperties properties) {
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowedOrigins(properties.allowedOrigins() == null ? List.of() : properties.allowedOrigins());
		config.setAllowedMethods(List.of("GET", "HEAD", "OPTIONS"));
		config.setAllowedHeaders(List.of("Content-Type", "X-Request-Id"));
		config.setExposedHeaders(List.of("X-Request-Id"));
		config.setAllowCredentials(false);
		config.setMaxAge(Duration.ofHours(1));

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration(ApiPaths.API_PATTERN, config);
		return source;
	}
}
