<br/>
<p align="center">
  <a href="https://github.com/stivaugoin/tadasana">
    <img src="images/tadasana.png" alt="Logo" height="80">
  </a>

  <p align="center">
    Design system based on Tailwind CSS
    <br/>
    <br/>
    <a href="https://main--614a7f31a4fdfd003a07d4a0.chromatic.com/"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  </p>
  
  <div align="center">
  
![npm](https://img.shields.io/npm/v/tadasana)
![npm](https://img.shields.io/npm/dw/tadasana)

[![CI](https://github.com/stivaugoin/tadasana/actions/workflows/main.yml/badge.svg)](https://github.com/stivaugoin/tadasana/actions/workflows/main.yml)
[![Chromatic](https://github.com/stivaugoin/tadasana/actions/workflows/chromatic.yml/badge.svg)](https://github.com/stivaugoin/tadasana/actions/workflows/chromatic.yml)
[![size](https://github.com/stivaugoin/tadasana/actions/workflows/size.yml/badge.svg)](https://github.com/stivaugoin/tadasana/actions/workflows/size.yml)
  
  </div>
</p>

:warning: Tadasana is not ready to use in production.

## Getting Started

### Prerequisites

Tadasana does not come with TailwindCSS, you have to install it yourself on your project.

- [TailwindCSS](https://tailwindcss.com/docs/installation) >= 2.2
- [React](https://reactjs.org/) >= 16

### Installation

You can install Tadasana with [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com).

```shell
npm install --save tadasana
```

or

```shell
yarn add tadasana
```

## Usage

```js
// tailwind.config.js

module.exports = {
  presets: [require("./node_modules/tadasana/src/tailwind/preset.ts")],
  purge: [
    "./node_modules/tadasana/src/components/*.tsx",
    "./src/**/*.tsx", // <- Your path
  ],
};
```
