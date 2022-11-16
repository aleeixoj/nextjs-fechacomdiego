/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`localhost`, '192.168.100.42',
      'api-rentx-aleixo-s3.s3.sa-east-1.amazonaws.com', 'www.mercadopago.com',
      'img.mlstatic.com', 'www.google.com.br', 'www.jucanabalada.com.br', 'i0.wp.com', 'media.staticontent.com',
      'fechacomdiego.herokuapp.com', 'fecha-com-diego.s3.sa-east-1.amazonaws.com']
  },
}

module.exports = nextConfig
