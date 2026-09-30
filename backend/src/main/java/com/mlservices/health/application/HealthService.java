package com.mlservices.health.application;

import com.mlservices.health.api.HealthResponse;
import java.time.Clock;
import java.time.Instant;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class HealthService {

	private final Clock clock;
	private final String version;

	public HealthService(Clock clock, @Value("${app.version:dev}") String version) {
		this.clock = clock;
		this.version = version;
	}

	public HealthResponse check() {
		return new HealthResponse("UP", version, Instant.now(clock));
	}
}
