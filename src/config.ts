import { config } from 'dotenv'
config()

export const keys = {
  NODE_ENV: process.env.NODE_ENV!,
}
