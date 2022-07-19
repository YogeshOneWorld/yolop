import {NavigationActions, StackActions} from 'react-navigation';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

const goBack = routeName => {
  navigator.dispatch(
    NavigationActions.back(
      routeName && {
        key: routeName,
      },
    ),
  );
};

const reset = routeName => {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName})],
    }),
  );
};

export default {
  navigate,
  setTopLevelNavigator,
  reset,
  goBack,
};