class AuthenticationTokenService
  HMAC_SECRET = ENV['JWT_SECRET']
  ALGORITHM_TYPE = 'HS256'.freeze

  def self.encode(user)
    exp = 24.hours.from_now.to_i
    payload = { username: user.username, user_id: user.id, exp: exp }
    JWT.encode payload, HMAC_SECRET, ALGORITHM_TYPE
  end

  def self.decode(token)
    decoded_token = JWT.decode token, HMAC_SECRET, true, { algorithm: ALGORITHM_TYPE }
    message = { user_id: decoded_token[0]["user_id"] }
    rescue JWT::ExpiredSignature, JWT::DecodeError
      expired_token
  end

  def self.valid_payload(payload)
    !expired(payload)
  end

  def self.expired(payload)
    Time.at(payload['exp']) < Time.now
  end

  def self.expired_token
    message = { error: "Expired Token or Decoding Error. Please log-in again." }
  end
end