module Api
  module V1
    class AuthenticationController < ApplicationController
      skip_before_action :verify_authenticity_token

      class AuthenticateError < StandardError; end

      rescue_from ActionController::ParameterMissing, with: :parameter_missing
      rescue_from AuthenticateError, with: :handle_unauthenticated

      def create
        user = User.find_by(username: params[:username])
        if !user
          render json: { error: "Invalid username"}, status: :unauthorized
        else
          if user.authenticate(params[:password])
            secret_key = Rails.application.secrets.secret_key_base[0]
            token = JWT.encode({
              user_id: user.id,
              username: user.username,
            }, secret_key)
            render json: { token: token }
          else
            render json: { message: "Wrong Password!"}, status: :unauthorized
          end
        end

        # if user
        #   raise AuthenticateError unless user.authenticate(params.require(:password))
        #   render json: user, status: :created
        # else
        #   render json: { error: 'No such user' }, status: :unauthorized
        # end
      end

      private

      def user
        @user ||= User.find_by(username: params.require(:username))
      end

      def parameter_missing(error)
        render json: { error: error.message }, status: :unprocessable_entity
      end

      def handle_unauthenticated
        render json: { error: 'Incorrect password ' }, status: :unauthorized
      end

    end
  end
end
