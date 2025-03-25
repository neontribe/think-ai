/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**oaidalleapiprodscus.blob.core.windows.ne',
          pathname: '/**',  
          port: '',                   
          search: '',                 
        },
      ],
    },
  };
  
  export default nextConfig;
  