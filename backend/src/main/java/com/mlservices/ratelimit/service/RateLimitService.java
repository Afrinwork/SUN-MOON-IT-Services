package com.mlservices.ratelimit.service;

import com.mlservices.ratelimit.config.RateLimitProperties;
import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

/**
 * Festes Zeitfenster pro Schlüssel (Client-IP), im Speicher.
 * Reicht für eine einzelne Instanz; bei mehreren Instanzen zusätzlich nginx-Limit nutzen.
 */
@Service
public class RateLimitService {

	private record Window(Instant start, int count) {
	}

	private final Map<String, Window> windows = new ConcurrentHashMap<>();
	private final RateLimitProperties properties;
	private final Clock clock;

	public RateLimitService(RateLimitProperties properties, Clock clock) {
		this.properties = properties;
		this.clock = clock;
	}

	public RateLimitDecision check(String key) {
		Instant now = clock.instant();
		Window window = windows.compute(key, (k, current) -> current == null || isExpired(current, now)
				? new Window(now, 1)
				: new Window(current.start(), current.count() + 1));

		int remaining = Math.max(0, properties.maxRequests() - window.count());
		Duration retryAfter = Duration.between(now, window.start().plus(properties.window()));
		return new RateLimitDecision(window.count() <= properties.maxRequests(), remaining, retryAfter);
	}

	@Scheduled(fixedDelayString = "PT5M")
	void evictExpired() {
		Instant now = clock.instant();
		windows.values().removeIf(window -> isExpired(window, now));
	}

	private boolean isExpired(Window window, Instant now) {
		return !window.start().plus(properties.window()).isAfter(now);
	}
}
