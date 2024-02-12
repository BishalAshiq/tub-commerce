const nextConfig = {
  async redirects() {
      return [
          {
              source: '/',
              destination: '/login',
              permanent: false,
          },
      ]
  },
  // distDir: 'dist'

  output: "export",

};


module.exports = nextConfig