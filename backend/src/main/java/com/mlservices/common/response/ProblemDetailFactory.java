package com.mlservices.common.response;

import com.mlservices.exception.model.ErrorCode;
import com.mlservices.logging.correlation.CorrelationId;
import java.net.URI;
import java.util.Locale;
import org.springframework.http.ProblemDetail;

/** Baut einheitliche Fehlerantworten nach RFC 9457. */
public final class ProblemDetailFactory {

	private ProblemDetailFactory() {
	}

	public static ProblemDetail of(ErrorCode code) {
		ProblemDetail problem = ProblemDetail.forStatusAndDetail(code.status(), code.detail());
		problem.setTitle(code.title());
		problem.setType(URI.create("urn:problem:" + code.name().toLowerCase(Locale.ROOT).replace('_', '-')));
		CorrelationId.current().ifPresent(id -> problem.setProperty("requestId", id));
		return problem;
	}
}
