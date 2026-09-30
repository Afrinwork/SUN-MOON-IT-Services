package com.mlservices.security.filters;

import com.mlservices.config.properties.SecurityProperties;
import com.mlservices.exception.exceptions.RequestRejectedException;
import com.mlservices.exception.model.ErrorCode;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Locale;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

/**
 * Weist Anfragen früh ab: nicht erlaubte HTTP-Methoden (z. B. TRACE, PUT) und zu große Bodies.
 * Wird in der SecurityFilterChain registriert (keine @Component).
 */
public class RequestSecurityFilter extends OncePerRequestFilter {

	private final Set<String> allowedMethods;
	private final long maxRequestBytes;
	private final HandlerExceptionResolver exceptionResolver;

	public RequestSecurityFilter(SecurityProperties properties, HandlerExceptionResolver exceptionResolver) {
		this.allowedMethods = properties.allowedMethods().stream()
				.map(method -> method.toUpperCase(Locale.ROOT))
				.collect(Collectors.toUnmodifiableSet());
		this.maxRequestBytes = properties.maxRequestBytes();
		this.exceptionResolver = exceptionResolver;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		ErrorCode violation = findViolation(request);
		if (violation != null) {
			exceptionResolver.resolveException(request, response, null, new RequestRejectedException(violation));
			return;
		}
		chain.doFilter(request, response);
	}

	private ErrorCode findViolation(HttpServletRequest request) {
		if (!allowedMethods.contains(request.getMethod())) {
			return ErrorCode.METHOD_NOT_ALLOWED;
		}
		if (request.getContentLengthLong() > maxRequestBytes) {
			return ErrorCode.PAYLOAD_TOO_LARGE;
		}
		return null;
	}
}
