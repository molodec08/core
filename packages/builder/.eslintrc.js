const { eslint } = require('@slaschev/eslint');

module.exports = {
  ...eslint,
  parserOptions: {
    ...eslint.parserOptions,
    tsconfigRootDir: __dirname
  },
  overrides: [
    ...eslint.overrides,
    {
      files: ['*.ts'],
      rules: {
        'no-restricted-syntax': 'off'
      }
    }
  ]
};
