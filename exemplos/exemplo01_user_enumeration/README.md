# 🧨 Exemplo 01 – User Enumeration

## 🔍 Descrição

Este exemplo demonstra uma falha comum em formulários de login: mensagens de erro que revelam se um determinado e-mail está ou não cadastrado no sistema.

Essa prática permite ataques de **enumeração de usuários**, em que o invasor testa milhares de e-mails e interpreta as respostas da aplicação para descobrir quais são válidos.

---

## ❌ Comportamento Inseguro

- Mensagem diferente para e-mail não encontrado (`"E-mail não cadastrado"`)
- Mensagem diferente para senha incorreta (`"Senha incorreta para o e-mail X"`)

Isso permite ao invasor **confirmar a existência de contas válidas** no sistema.

---

## ✅ Comportamento Seguro

- Utilização de mensagens genéricas como:  
  `"Credenciais inválidas"`

- Nenhum ícone, cor ou indicador visual deve sugerir se o dado enviado existe ou não no sistema.

---

## 🧪 Demonstração

| Tipo      | Arquivo                             |
|-----------|--------------------------------------|
| Inseguro  | [`insecure.html`](./insecure.html)  |
| Seguro    | [`secure.html`](./secure.html)      |

---

## 💻 Soluções por Tecnologia

Abaixo estão exemplos de implementação correta dessa proteção em diferentes linguagens/frameworks.

### 🌐 Front-end

| Stack    | Arquivo                                                                 |
|----------|-------------------------------------------------------------------------|
| React    | [`SecureLogin.jsx`](./frontend/react/SecureLogin.jsx)                  |

### 🧠 Back-end

| Linguagem | Stack           | Arquivo                                                        |
|-----------|------------------|----------------------------------------------------------------|
| Node.js   | Express.js       | [`loginRoute.js`](./backend/express/loginRoute.js)             |
| Python    | Flask            | [`login_view.py`](./backend/flask/login_view.py)               |
| Java      | Spring Boot      | [`AuthController.java`](./backend/spring/AuthController.java)  |
| .NET      | ASP.NET Core     | [`AuthController.cs`](./backend/aspnet/AuthController.cs)      |
| Ruby      | Rails            | [`sessions_controller.rb`](./backend/rails/sessions_controller.rb) |

---

## 🔐 Boas Práticas

- **Nunca** informe se um e-mail está registrado.
- Sempre mantenha **mensagens genéricas** para autenticação.
- Valide sempre no backend, independentemente da interface.
- Monitore tentativas repetidas (rate limit, captcha, bloqueio progressivo).

---

## 📚 Referências

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP Top 10 – A01:2021 – Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
