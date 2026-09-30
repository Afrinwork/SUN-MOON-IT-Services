package com.mlservices.health.api;

import com.mlservices.common.constants.ApiPaths;
import com.mlservices.health.application.HealthService;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

	private final HealthService healthService;

	public HealthController(HealthService healthService) {
		this.healthService = healthService;
	}

	@GetMapping(ApiPaths.HEALTH)
	public ResponseEntity<HealthResponse> health() {
		return ResponseEntity.ok().cacheControl(CacheControl.noStore()).body(healthService.check());
	}
}
