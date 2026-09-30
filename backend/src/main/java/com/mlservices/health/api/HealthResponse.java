package com.mlservices.health.api;

import java.time.Instant;

public record HealthResponse(String status, String version, Instant timestamp) {
}
