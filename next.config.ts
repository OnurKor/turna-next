// next.config.ts
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  experimental: {},
  // Diğer Next.js ayarlarınız (varsa) buraya ekleyin.
  images: {
    domains: ["images.unsplash.com", "www.navbea.com"],
    unoptimized: true
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
