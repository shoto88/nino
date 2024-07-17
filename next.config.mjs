/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
            {
              protocol: 'https',
              hostname: 'shodemo.wordpress.com',
              port: '',
              pathname: '**',
            },
          ],
        },
};

export default nextConfig;
