package com.mlservices.security;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.options;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.request;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.HttpMethod;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest(properties = "app.security.allowed-origins=https://ml-it.example")
@AutoConfigureMockMvc
class SecurityTests {

	@Autowired
	MockMvc mvc;

	@Test
	void securityHeadersAreSet() throws Exception {
		mvc.perform(get("/api/health"))
				.andExpect(header().string("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'; base-uri 'none'"))
				.andExpect(header().string("X-Frame-Options", "DENY"))
				.andExpect(header().string("X-Content-Type-Options", "nosniff"))
				.andExpect(header().string("Referrer-Policy", "no-referrer"))
				.andExpect(header().exists("Permissions-Policy"));
	}

	@Test
	void unknownEndpointsAreDenied() throws Exception {
		mvc.perform(get("/api/admin")).andExpect(status().isForbidden());
	}

	@Test
	void postIsRejectedWithProblemDetail() throws Exception {
		mvc.perform(post("/api/health"))
				.andExpect(status().isMethodNotAllowed())
				.andExpect(jsonPath("$.title").value("Methode nicht erlaubt"))
				.andExpect(header().string("X-Frame-Options", "DENY"));
	}

	@Test
	void traceIsRejected() throws Exception {
		// TRACE blockt bereits die StrictHttpFirewall von Spring Security (400), noch vor unserem Filter.
		mvc.perform(request(HttpMethod.TRACE, "/api/health")).andExpect(status().isBadRequest());
	}

	@Test
	void putIsRejectedByRequestSecurityFilter() throws Exception {
		mvc.perform(request(HttpMethod.PUT, "/api/health")).andExpect(status().isMethodNotAllowed());
	}

	@Test
	void oversizedBodyIsRejected() throws Exception {
		mvc.perform(get("/api/health").content(new byte[20_000]))
				.andExpect(status().isPayloadTooLarge());
	}

	@Test
	void corsAllowsConfiguredOrigin() throws Exception {
		mvc.perform(options("/api/health")
						.header("Origin", "https://ml-it.example")
						.header("Access-Control-Request-Method", "GET"))
				.andExpect(status().isOk())
				.andExpect(header().string("Access-Control-Allow-Origin", "https://ml-it.example"));
	}

	@Test
	void corsRejectsForeignOrigin() throws Exception {
		mvc.perform(options("/api/health")
						.header("Origin", "https://evil.example")
						.header("Access-Control-Request-Method", "GET"))
				.andExpect(status().isForbidden());
	}
}
