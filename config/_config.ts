export type ConfigSchema = {
  // Network configuration
  SERVER_IP: string;
  SERVER_ORIGIN: string;
  SERVER_CORS_ALLOWED_ORIGINS: [string, ...string[]] | null;
};
