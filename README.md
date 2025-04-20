# 🔐 UI/UX Security Flaws

Este repositório demonstra **vulnerabilidades comuns em interfaces de usuário (UI/UX)** que podem comprometer a segurança de aplicações web.

Cada exemplo mostra:
- Uma versão **insegura** (`insecure.html`)
- Uma versão **segura** (`secure.html`)
- Um arquivo `README.md` explicando o problema, impacto e correção

---

## 📂 Índice de Exemplos

| Nº | Nome do Exemplo                         | Descrição                                                                 |
|----|------------------------------------------|---------------------------------------------------------------------------|
| 01 | User Enumeration                        | Mensagens de erro revelam se o e-mail está registrado                     |
| 02 | Role Leakage via DOM                    | Botões de admin renderizados para todos e apenas desativados             |
| 03 | Feedback Visual Exposto                 | Validação visual em tempo real indica dados existentes                   |
| 04 | Autocomplete em Campos Sensíveis        | Campos de senha, CPF ou cartão com preenchimento automático ativado      |
| 05 | Links Admin Visíveis                    | URLs administrativas expostas na UI sem controle de permissão efetivo    |
| 06 | Validação de CPF sem Autenticação       | Retorno diferente para CPFs válidos e inválidos antes do login           |

---

## 🛠️ Como usar

1. Clone este repositório:
```bash
git clone https://github.com/jh0n4th4n/ui-ux-security-flaws.git
```

2. Acesse o exemplo desejado:
```bash
cd ui-ux-security-flaws/exemplos/exemplo01_user_enumeration
```

3. Abra os arquivos HTML em um navegador para comparar a versão insegura e segura.

---

## 🧠 Contexto

Esses exemplos acompanham o artigo:

> **“A Superfície Também é Profunda: Segurança Visual em UI como Vetor de Ataque”**

Você pode ler o artigo completo e entender os fundamentos técnicos de cada exemplo.

---

## 🧰 Ferramentas Recomendadas para Testes

- OWASP ZAP
- Burp Suite
- DevTools + PayloadsAllTheThings

---

## 🧑‍🎓 Público-Alvo

👩‍🎨 **Designers**  
👨‍💻 **Front-end Developers**  
🛡️ **Back-end Engineers**  
🔍 **Especialistas em Segurança**

---
