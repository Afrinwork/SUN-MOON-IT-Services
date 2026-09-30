package com.mlservices.ratelimit.filter;

import com.mlservices.common.constants.HeaderNames;
import com.mlservices.exception.exceptions.RateLimitExceededException;
import com.mlservices.ratelimit.config.RateLimitProperties;
import com.mlservices.ratelimit.service.RateLimitDecision;
import com.mlservices.ratelimit.service.RateLimitService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

/**
 * Begrenzt Anfragen pro Client-IP. Wird in der SecurityFilterChain registriert (keine @Component,
 * sonst liefe er doppelt). Fehler gehen über den HandlerExceptionResolver an den GlobalExceptionHandler.
 */
public class RateLimitFilter extends OncePerRequestFilter {

	private final RateLimitService rateLimitService;
	private final RateLimitProperties properties;
	private final HandlerExceptionResolver exceptionResolver;

	public RateLimitFilter(RateLimitService rateLimitService, RateLimitProperties properties,
			HandlerExceptionResolver exceptionResolver) {
		this.rateLimitService = rateLimitService;
		this.properties = properties;
		this.exceptionResolver = exceptionResolver;
	}

	@Override
	protected boolean shouldNotFilter(HttpServletRequest request) {
		return !properties.enabled();
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		// remoteAddr berücksichtigt X-Forwarded-For von nginx (server.forward-headers-strategy=framework)
		RateLimitDecision decision = rateLimitService.check(request.getRemoteAddr());
		response.setHeader(HeaderNames.RATE_LIMIT_REMAINING, String.valueOf(decision.remaining()));
		if (!decision.allowed()) {
			exceptionResolver.resolveException(request, response, null,
					new RateLimitExceededException(decision.retryAfter()));
			return;
		}
		chain.doFilter(request, response);
	}
}
