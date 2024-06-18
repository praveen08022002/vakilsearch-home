/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == "isProd";
const isQE = process.env.NODE_ENV == "isQE";
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  images: {
    domains: ["assets.vakilsearch.com", "vakilsearch.com"],
    formats: ["image/webp"],
  },
  env: {
    BASE_URL: isProd ? process.env.BASE_URL_PROD : process.env.BASE_URL_QE,
  },
  //   assetPrefix: isProd
  //     ? "https://assets.vakilsearch.com"
  //     : isQE
  //     ? "https://qe-assets.vakilsearch.com"
  //     : isDev
  //     ? ""
  //     : "https://assets.vakilsearch.com",
  reactStrictMode: true,
  experimental: {
    ssr: true,
    ssg: true,
  },
};

export default nextConfig;
