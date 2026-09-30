package com.mlservices.ratelimit;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest(properties = { "app.rate-limit.max-requests=2", "app.rate-limit.window=1m" })
@AutoConfigureMockMvc
class RateLimitFilterTests {

	@Autowired
	MockMvc mvc;

	@Test
	void thirdRequestFromSameIpIsLimited() throws Exception {
		mvc.perform(get("/api/health").with(ip("10.0.0.1")))
				.andExpect(status().isOk())
				.andExpect(header().string("X-RateLimit-Remaining", "1"));
		mvc.perform(get("/api/health").with(ip("10.0.0.1"))).andExpect(status().isOk());

		mvc.perform(get("/api/health").with(ip("10.0.0.1")))
				.andExpect(status().isTooManyRequests())
				.andExpect(header().exists("Retry-After"))
				.andExpect(jsonPath("$.title").value("Zu viele Anfragen"));

		mvc.perform(get("/api/health").with(ip("10.0.0.2"))).andExpect(status().isOk());
	}

	private static org.springframework.test.web.servlet.request.RequestPostProcessor ip(String address) {
		return request -> {
			request.setRemoteAddr(address);
			return request;
		};
	}
}
