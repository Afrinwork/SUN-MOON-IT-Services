package com.mlservices.exception.handler;

import com.mlservices.common.constants.HeaderNames;
import com.mlservices.common.response.ProblemDetailFactory;
import com.mlservices.exception.exceptions.ApiException;
import com.mlservices.exception.exceptions.RateLimitExceededException;
import com.mlservices.exception.model.ErrorCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {

	private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

	@ExceptionHandler(RateLimitExceededException.class)
	ResponseEntity<ProblemDetail> handleRateLimit(RateLimitExceededException ex) {
		return ResponseEntity.status(ex.errorCode().status())
				.header(HeaderNames.RETRY_AFTER, String.valueOf(Math.max(1, ex.retryAfter().toSeconds())))
				.body(ProblemDetailFactory.of(ex.errorCode()));
	}

	@ExceptionHandler(ApiException.class)
	ResponseEntity<ProblemDetail> handleApi(ApiException ex) {
		return respond(ex.errorCode());
	}

	@ExceptionHandler(NoResourceFoundException.class)
	ResponseEntity<ProblemDetail> handleNotFound() {
		return respond(ErrorCode.NOT_FOUND);
	}

	@ExceptionHandler(HttpRequestMethodNotSupportedException.class)
	ResponseEntity<ProblemDetail> handleMethod() {
		return respond(ErrorCode.METHOD_NOT_ALLOWED);
	}

	@ExceptionHandler(Exception.class)
	ResponseEntity<ProblemDetail> handleUnexpected(Exception ex) {
		log.error("Unerwarteter Fehler", ex);
		return respond(ErrorCode.INTERNAL_ERROR);
	}

	private static ResponseEntity<ProblemDetail> respond(ErrorCode code) {
		return ResponseEntity.status(code.status()).body(ProblemDetailFactory.of(code));
	}
}
