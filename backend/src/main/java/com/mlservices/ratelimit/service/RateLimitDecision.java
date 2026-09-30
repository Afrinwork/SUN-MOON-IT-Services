package com.mlservices.ratelimit.service;

import java.time.Duration;

/** Ergebnis einer Rate-Limit-Prüfung. */
public record RateLimitDecision(boolean allowed, int remaining, Duration retryAfter) {
}
