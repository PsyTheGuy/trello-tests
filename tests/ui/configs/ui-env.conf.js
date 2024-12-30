import 'dotenv/config'

export const UIEnv = {
  secrets: {
    VALID_USERNAME: process.env.VALID_USERNAME || '<your_valid_username>',
    VALID_PASSWORD: process.env.VALID_PASSWORD || '<your_valid_password>',
    INVALID_USERNAME: 'invalid@username.xyz',
    INVALID_PASSWORD: 'invalid_password',
  },
}
