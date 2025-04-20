# Ruby on Rails - Login com retorno seguro
class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      render json: { token: generate_token(user) }
    else
      render json: { message: "Credenciais inválidas" }, status: :unauthorized
    end
  end
end
