package com.mlservices.config.application;

import java.time.Clock;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {

	/** Zentrale Uhr – in Tests austauschbar. */
	@Bean
	Clock clock() {
		return Clock.systemUTC();
	}
}
