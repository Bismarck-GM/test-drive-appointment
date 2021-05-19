module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action :verify_authenticity_token
      def create
        user = User.create(
          username: params[:username],
          password: params[:password],
        )
          if user.save
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages.first, user: user, params: params }, status: :unprocessable_entity
        end
      end
      private

      def user_params
        params.require(:user).permit(:username, :password)
      end

    end
  end
end