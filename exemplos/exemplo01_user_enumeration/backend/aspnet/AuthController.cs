// ASP.NET Core - Login seguro com validação consolidada
[HttpPost("login")]
public IActionResult Login([FromBody] LoginModel model) {
    var user = _userService.FindByEmail(model.Email);
    if (user == null || !_passwordHasher.Verify(user.PasswordHash, model.Password)) {
        return Unauthorized(new { message = "Credenciais inválidas" });
    }
    var token = _jwtService.GenerateToken(user);
    return Ok(new { token });
}
