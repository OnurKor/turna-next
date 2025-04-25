import type { NextConfig } from 'next';
import nextI18NextConfig from './next-i18next.config';

const config: NextConfig = {
  ...nextI18NextConfig,
  // Buraya başka Next.js ayarlarını da ekleyebilirsin
  reactStrictMode: true,
  swcMinify: true,
};

export default config;
