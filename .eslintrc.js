module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-quotes': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/v-slot-style': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off'
  }
}
