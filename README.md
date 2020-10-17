# 💎 React Boilerplate with TypeScript 💎

## 💁 What’s Included?

| Package            | Version    |
| ------------------ | ---------- |
| react              | **^16.13** |
| react-dom          | **^16.13** |
| react-router       | **^5.2**   |
| react-scripts      | **3.4**    |
| styled-components  | **^5.2**   |
| typescript         | **^4.0**   |
| @typescript-eslint | **^4.4**   |

## ✨ Feature

### 🌚 Dark Mode

<div align="center">
<img width="900" src="https://res.cloudinary.com/dbvq5d4n5/image/upload/v1602946200/dark_mode_abdk9l.gif">
</div>

## ⚙️ Configuration

### 🛠 .eslintrc.json

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### 🧑‍🎨 .prettierrc

```json
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "useTabs": false,
  "semi": true
}
```

### ⚙️ tsconfig.json

`TypeScript`의 컴파일러 옵션을 설정하는 `tsconfig.json`은 [Create React App](https://github.com/facebook/create-react-app) 프로젝트의 기본 설정을 따릅니다.

## Installation

```
$ yarn
```

## Getting Started

```
yarn start
```

## Build

```
yarn build
```
