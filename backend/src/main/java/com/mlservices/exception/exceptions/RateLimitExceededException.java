package com.mlservices.exception.exceptions;

import com.mlservices.exception.model.ErrorCode;
import java.time.Duration;

public class RateLimitExceededException extends ApiException {

	private static final long serialVersionUID = 1L;

	private final Duration retryAfter;

	public RateLimitExceededException(Duration retryAfter) {
		super(ErrorCode.RATE_LIMITED);
		this.retryAfter = retryAfter;
	}

	public Duration retryAfter() {
		return retryAfter;
	}
}
