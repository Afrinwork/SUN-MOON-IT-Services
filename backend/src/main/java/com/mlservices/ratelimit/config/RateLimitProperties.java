package com.mlservices.ratelimit.config;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.time.Duration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

/**
 * app.rate-limit.*: maximal {@code maxRequests} Anfragen pro Client-IP innerhalb von {@code window}.
 */
@Validated
@ConfigurationProperties(prefix = "app.rate-limit")
public record RateLimitProperties(boolean enabled, @Positive int maxRequests, @NotNull Duration window) {
}
