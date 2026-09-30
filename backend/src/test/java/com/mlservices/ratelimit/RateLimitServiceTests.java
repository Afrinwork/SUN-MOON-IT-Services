package com.mlservices.ratelimit;

import static org.assertj.core.api.Assertions.assertThat;

import com.mlservices.ratelimit.config.RateLimitProperties;
import com.mlservices.ratelimit.service.RateLimitDecision;
import com.mlservices.ratelimit.service.RateLimitService;
import java.time.Duration;
import java.time.Instant;
import org.junit.jupiter.api.Test;

class RateLimitServiceTests {

	private final MutableClock clock = new MutableClock(Instant.parse("2026-01-01T00:00:00Z"));
	private final RateLimitService service =
			new RateLimitService(new RateLimitProperties(true, 3, Duration.ofMinutes(1)), clock);

	@Test
	void allowsUpToLimitThenBlocks() {
		assertThat(service.check("1.2.3.4").remaining()).isEqualTo(2);
		assertThat(service.check("1.2.3.4").remaining()).isEqualTo(1);
		assertThat(service.check("1.2.3.4").allowed()).isTrue();

		RateLimitDecision blocked = service.check("1.2.3.4");
		assertThat(blocked.allowed()).isFalse();
		assertThat(blocked.remaining()).isZero();
		assertThat(blocked.retryAfter()).isEqualTo(Duration.ofMinutes(1));
	}

	@Test
	void keysAreIndependent() {
		for (int i = 0; i < 3; i++) {
			service.check("1.1.1.1");
		}
		assertThat(service.check("1.1.1.1").allowed()).isFalse();
		assertThat(service.check("2.2.2.2").allowed()).isTrue();
	}

	@Test
	void windowResetsAfterExpiry() {
		for (int i = 0; i < 4; i++) {
			service.check("1.2.3.4");
		}
		clock.advance(Duration.ofSeconds(59));
		assertThat(service.check("1.2.3.4").allowed()).isFalse();

		clock.advance(Duration.ofSeconds(1));
		assertThat(service.check("1.2.3.4").allowed()).isTrue();
	}
}
