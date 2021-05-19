module Api
  module V1
    class AuthenticationController < ApplicationController

      class AuthenticateError < StandardError; end
      rescue_from AuthenticateError, with: :handle_unauthenticated

      def create
        if !user
          handle_unauthenticated
        else
          if user.authenticate(auth_params[:password])
            secret_key = Rails.application.secrets.secret_key_base[0]
            token = JWT.encode({
              user_id: user.id,
              username: user.username,
            }, secret_key)
            render json: { token: token }
          else
            handle_unauthenticated
          end
        end
      end

      private

      def user
        @user ||= User.find_by(username: auth_params[:username])
      end

      def handle_unauthenticated
        render json: { error: 'Incorrect password or username.' }, status: :unauthorized
      end

      def auth_params
        params.require(:authentication).permit(:username, :password)
      end

    end
  end
end
