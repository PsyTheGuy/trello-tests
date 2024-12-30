import 'dotenv/config'

export const APIEnv = {
  url: 'https://api.trello.com',
  secrets: {
    key: process.env.API_KEY || '<your-api-key>',
    token: process.env.API_TOKEN || '<your-api-token>',
  },
}
