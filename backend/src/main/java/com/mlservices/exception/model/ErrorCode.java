package com.mlservices.exception.model;

import org.springframework.http.HttpStatus;

/** Alle fachlich bekannten Fehler mit deutschem Text. Keine internen Details nach außen. */
public enum ErrorCode {

	NOT_FOUND(HttpStatus.NOT_FOUND, "Nicht gefunden", "Die angeforderte Ressource existiert nicht."),
	METHOD_NOT_ALLOWED(HttpStatus.METHOD_NOT_ALLOWED, "Methode nicht erlaubt", "Diese HTTP-Methode wird nicht unterstützt."),
	PAYLOAD_TOO_LARGE(HttpStatus.CONTENT_TOO_LARGE, "Anfrage zu groß", "Die Anfrage überschreitet die erlaubte Größe."),
	RATE_LIMITED(HttpStatus.TOO_MANY_REQUESTS, "Zu viele Anfragen", "Bitte warten Sie einen Moment und versuchen Sie es erneut."),
	INTERNAL_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "Interner Fehler", "Es ist ein unerwarteter Fehler aufgetreten.");

	private final HttpStatus status;
	private final String title;
	private final String detail;

	ErrorCode(HttpStatus status, String title, String detail) {
		this.status = status;
		this.title = title;
		this.detail = detail;
	}

	public HttpStatus status() {
		return status;
	}

	public String title() {
		return title;
	}

	public String detail() {
		return detail;
	}
}
