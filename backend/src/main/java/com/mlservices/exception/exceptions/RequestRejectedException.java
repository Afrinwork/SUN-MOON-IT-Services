package com.mlservices.exception.exceptions;

import com.mlservices.exception.model.ErrorCode;

/** Anfrage wurde vom RequestSecurityFilter abgewiesen (Methode, Größe). */
public class RequestRejectedException extends ApiException {

	private static final long serialVersionUID = 1L;

	public RequestRejectedException(ErrorCode errorCode) {
		super(errorCode);
	}
}
