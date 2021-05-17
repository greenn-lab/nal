module.exports = {
  ignore:
    process.env.NODE_ENV === 'production' ? ['src/**/*.spec.js'] : [],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3
      }
    ]
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'ie 11'
      }
    ]
  ],
  sourceMaps: true
}
