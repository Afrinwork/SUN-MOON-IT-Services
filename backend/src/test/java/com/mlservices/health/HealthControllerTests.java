package com.mlservices.health;

import static org.hamcrest.Matchers.matchesPattern;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class HealthControllerTests {

	@Autowired
	MockMvc mvc;

	@Test
	void healthIsPublicAndUp() throws Exception {
		mvc.perform(get("/api/health"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.status").value("UP"))
				.andExpect(jsonPath("$.version").exists())
				.andExpect(header().string("Cache-Control", "no-store"));
	}

	@Test
	void everyResponseCarriesRequestId() throws Exception {
		mvc.perform(get("/api/health"))
				.andExpect(header().string("X-Request-Id", matchesPattern("[A-Za-z0-9-]{8,64}")));
	}

	@Test
	void validIncomingRequestIdIsKept() throws Exception {
		mvc.perform(get("/api/health").header("X-Request-Id", "abc-12345678"))
				.andExpect(header().string("X-Request-Id", "abc-12345678"));
	}

	@Test
	void maliciousRequestIdIsReplaced() throws Exception {
		mvc.perform(get("/api/health").header("X-Request-Id", "evil\r\ninjected"))
				.andExpect(header().string("X-Request-Id", matchesPattern("[0-9a-f-]{36}")));
	}
}
