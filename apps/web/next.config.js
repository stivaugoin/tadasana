const withTM = require("next-transpile-modules")(["@tadasana/core"]);

module.exports = withTM({
  reactStrictMode: true,
});
