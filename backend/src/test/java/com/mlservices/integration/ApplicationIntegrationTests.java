package com.mlservices.integration;

import static org.assertj.core.api.Assertions.assertThat;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.ActiveProfiles;

/** Startet den echten Server (prod-Profil) und prüft ihn über HTTP. */
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@ActiveProfiles("prod")
class ApplicationIntegrationTests {

	@Value("${local.server.port}")
	int port;

	private final HttpClient client = HttpClient.newHttpClient();

	@Test
	void healthEndpointRespondsOverHttp() throws Exception {
		HttpResponse<String> response = send("/api/health");
		assertThat(response.statusCode()).isEqualTo(200);
		assertThat(response.body()).contains("\"status\":\"UP\"");
		assertThat(response.headers().firstValue("Content-Security-Policy")).isPresent();
	}

	@Test
	void unknownPathIsDeniedWithoutLeakingDetails() throws Exception {
		HttpResponse<String> response = send("/actuator/env");
		assertThat(response.statusCode()).isEqualTo(403);
		assertThat(response.body()).doesNotContain("Exception", "trace");
	}

	private HttpResponse<String> send(String path) throws Exception {
		HttpRequest request = HttpRequest.newBuilder(URI.create("http://localhost:" + port + path)).GET().build();
		return client.send(request, HttpResponse.BodyHandlers.ofString());
	}
}
