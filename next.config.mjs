// next.config.js
export async function redirects() {
    return [
        {
            source: "/wp-content/:path*",
            destination: "/",
            permanent: true,
        },
    ];
}
