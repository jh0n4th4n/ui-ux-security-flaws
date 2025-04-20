# Flask - Resposta unificada para login
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()

    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({"message": "Credenciais inválidas"}), 401

    token = gerar_token(user)
    return jsonify({"token": token})
