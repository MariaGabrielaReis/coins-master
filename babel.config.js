module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@global": "./src/global",
          "@mocks": "./src/mocks",
          "@screens": "./src/screens",
        },
      },
    ],
  ],
};
