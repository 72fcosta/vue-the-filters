module.exports = {
   env: {
      es2021: true,
      node: true
   },
   extends: [
      'standard'
   ],
   parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
   },
   rules: {
      indent: ['error', 3],
      semi: ['error', 'never'],
      quotes: ['error', 'single']
   }
}
