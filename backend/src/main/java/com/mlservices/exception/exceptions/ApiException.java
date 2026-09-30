package com.mlservices.exception.exceptions;

import com.mlservices.exception.model.ErrorCode;

/** Basis für alle bewusst geworfenen Fehler; der Handler übersetzt sie in ProblemDetail. */
public class ApiException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	private final ErrorCode errorCode;

	public ApiException(ErrorCode errorCode) {
		super(errorCode.title());
		this.errorCode = errorCode;
	}

	public ErrorCode errorCode() {
		return errorCode;
	}
}
