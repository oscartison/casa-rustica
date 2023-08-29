import { ConfigSchema } from './_config';

// Export configuration
export default (await import(`./${process.env.NODE_ENV}`))
  .default as ConfigSchema;
