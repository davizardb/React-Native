# React-Native

Inicio -> CLI ou NPX

Editar app.js

Editor config {
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

}

ESLINT -> exclui .eslintrc.js se existir

yarn add eslint -D

yarn eslint --init
1- To check syntax, find problems, and enforce code style
2- Javascript modules
3- React
4- Y/N?
5- Popular guidestyle
6- Airbnb
7- JS
8- Yes

Remover o package-lock.json

yarn

yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D


.eslint.js{
	module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off'
  },
};

}

.prettierrc{
module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'es5',
};


Reactototron 

yarn add reactotron-react-native

{
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
}

routes 

https://reactnavigation.org/docs/getting-started
yarn add react-navigation


styled-components

yarn add styled-components



