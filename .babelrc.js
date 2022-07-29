module.exports = {
    "plugins": [
    //   ["module-resolver", {
    //     "root": ["./src"],
    //     "alias": {
    //       "test": "./test",
    //       "underscore": "lodash"
    //     }
    //   }]

    ['module-resolver',
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

    ]
  };
