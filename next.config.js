// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/lucaspaschoalick.github.io.git/' : '',
  images: {
    unoptimized: true,
  },
}