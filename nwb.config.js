module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FlexKeypad',
      externals: {
        react: 'React'
      }
    }
  }
}
