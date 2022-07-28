import {CommonActions, StackActions} from '@react-navigation/native';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    }),
  );
};

const goBack = routeName => {
  navigator.dispatch(
    CommonActions.back(
      routeName && {
        key: routeName,
      },
    ),
  );
};

const reset = routeName => {
  navigator.dispatch(
    CommonActions.reset({
      index: 1,
      actions: [CommonActions.navigate({routeName})],
    }),
  );
};

export default {
  navigate,
  setTopLevelNavigator,
  reset,
  goBack,
};
