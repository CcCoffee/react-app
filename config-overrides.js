const { useBabelRc, override, useEslintRc, addLessLoader } = require('customize-cra')

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#A80000' },
    },
  })
);
