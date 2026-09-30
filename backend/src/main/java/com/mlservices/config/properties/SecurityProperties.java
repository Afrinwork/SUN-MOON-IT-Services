package com.mlservices.config.properties;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.PositiveOrZero;
import java.util.List;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

/**
 * app.security.*
 *
 * @param allowedOrigins  erlaubte CORS-Origins (z. B. https://ihre-domain.de)
 * @param allowedMethods  erlaubte HTTP-Methoden; alles andere wird mit 405 abgewiesen
 * @param maxRequestBytes maximale Größe des Request-Bodys
 */
@Validated
@ConfigurationProperties(prefix = "app.security")
public record SecurityProperties(
		List<String> allowedOrigins,
		@NotEmpty List<String> allowedMethods,
		@PositiveOrZero long maxRequestBytes) {
}
