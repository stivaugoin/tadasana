# How to customize

You can customize the colors by overriding the `theme.extend.colors` object in your `tailwind.config.js` file.

```js
// tailwind.config.js
import colors from "tailwindcss/colors";

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.orange,
        default: colors.slate,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
      },
    },
  },
};
```
