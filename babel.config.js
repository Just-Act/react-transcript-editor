module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: { node: 'current' }
      }
    ],
    '@babel/preset-react',
    [
      'minify',
      {
        builtIns: false,
        evaluate: false,
        mangle: false
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties'
  ]
};