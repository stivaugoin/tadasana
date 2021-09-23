module.exports = {
  mode: "jit",
  purge: ["./src/components/**/*.tsx", "./stories/**/*.tsx"],
  presets: [require("./src/tailwind/preset.ts")],
};
