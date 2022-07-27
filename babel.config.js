module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': ['./src/screens'],
          '@components': ['./src/components'],
          '@navigation': ['./src/navigation/StackNavigation'],
          '@redux': ['./src/redux'],
          '@utils': ['./src/utils'],
          '@assets': ['./assets'],
          '@services': ['./src/services'],
          '@mock': ['./mock'],
        },
      },
    ],
  ],
};
