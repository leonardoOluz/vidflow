import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      'semi': [
        'error',
        'always'
      ],
      'indent': [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
    }
  }
];