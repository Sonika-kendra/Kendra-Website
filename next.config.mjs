/** @type {import('next').NextConfig} */
export async function redirects() {
  return [
    {
      source: "/wp-content/:path*",
      destination: "/",
      permanent: true,
    },
  ];
}
export function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  });
  return config;
}
