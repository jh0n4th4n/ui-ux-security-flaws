// Spring Boot - Login com mensagem única
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest request) {
    Optional<User> userOpt = userService.findByEmail(request.getEmail());
    if (userOpt.isEmpty() || !passwordEncoder.matches(request.getPassword(), userOpt.get().getPassword())) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .body(Map.of("message", "Credenciais inválidas"));
    }
    String token = jwtService.gerarToken(userOpt.get());
    return ResponseEntity.ok(Map.of("token", token));
}
