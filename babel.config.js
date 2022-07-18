module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@theme': ['./src/themes'],
            "@screens": ["./src/components/screens"],
            "@common": ["./src/components/common"],
            '@navigation': ['./src/navigation/StackNavigation'],
            '@constants': ['./src/constants'],
            '@actions': ['./src/actions'],
            "@utils": ["./src/utils"],
            "@assets": ["./assets"]
          },
        },
      ],
    ],
};


