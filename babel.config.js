module.exports = {
  presets: [
    "@babel/preset-env",                     // Handles modern JavaScript (ES6+)
    ["@babel/preset-react", {                // Handles JSX
      runtime: "automatic",                  // Optional: Removes need for `import React` in every file
    }],
  ],
};
