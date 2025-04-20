// Express.js - Endpoint seguro com resposta unificada
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.passwordHash)) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  const token = gerarTokenJWT(user);
  res.json({ token });
});

module.exports = router;
