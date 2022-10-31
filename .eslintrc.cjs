module.exports = {
  overrides: [
    {
      files: '*.md{,x}',
      parser: 'eslint-mdx',
      processor: 'mdx/remark',
      plugins: ['mdx'],
      settings: {
        'mdx/code-blocks': true
      }
    },
    {

      files: ['*.md{,x}', '*.{j,t}s{,x}'],
      parserOptions: {
        ecmaVersion: 13,
        ecmaFeatures: {
          jsx: true,
        }
      },
      plugins: ['react'],
      rules: {
        'react/jsx-curly-brace-presence': 'error',
        'react/self-closing-comp': 'error',
      }
    }
  ]
}
