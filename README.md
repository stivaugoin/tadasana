<br/>
<p align="center">
  <a href="https://github.com/stivaugoin/tadasana">
    <img src="images/tadasana.png" alt="Logo" height="80">
  </a>

  <p align="center">
    Design system based on TailwindCSS
    <br/>
    <br/>
    <a href="https://www.chromatic.com/library?appId=614a7f31a4fdfd003a07d4a0"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  </p>
</p>

<!-- BADGE -->

Tadasana lets start projects quickly with a basic set of component using a simple style that can be adapted easily with TailwindCSS.

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
