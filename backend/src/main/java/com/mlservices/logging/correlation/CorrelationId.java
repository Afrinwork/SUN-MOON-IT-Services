package com.mlservices.logging.correlation;

import java.util.Optional;
import java.util.UUID;
import java.util.regex.Pattern;
import org.slf4j.MDC;

/** Request-ID für Logs und Fehlerantworten (MDC-Schlüssel "requestId"). */
public final class CorrelationId {

	public static final String MDC_KEY = "requestId";

	// Nur harmlose Zeichen übernehmen, sonst neue ID (Schutz vor Log-Injection)
	private static final Pattern VALID = Pattern.compile("^[A-Za-z0-9-]{8,64}$");

	private CorrelationId() {
	}

	public static String resolve(String incoming) {
		return incoming != null && VALID.matcher(incoming).matches() ? incoming : UUID.randomUUID().toString();
	}

	public static Optional<String> current() {
		return Optional.ofNullable(MDC.get(MDC_KEY));
	}
}
