import { ConfigSchema } from './_config';

const config = {
  SERVER_IP: '0.0.0.0',
  SERVER_ORIGIN: 'localhost:3000',
  SERVER_CORS_ALLOWED_ORIGINS: ['*'],
} as ConfigSchema;

export default config;
