import React, {useState, forwardRef, useImperativeHandle, memo} from 'react';
import {Text, Animated} from 'react-native';
import {styles} from './style';
import {
  SNACKBAR_HIDE_TRANSLATE_Y_VALUE,
  ANIMATION_DURATION,
  SNACKBAR_SHOW_TRANSLATE_Y_VALUE,
} from './constant';

const animatedValue = new Animated.Value(SNACKBAR_HIDE_TRANSLATE_Y_VALUE);

const SnackBar = forwardRef((props, ref) => {
  const [snackBarMsg, changeMessage] = useState('');
  let showSnackBar = false;
  let hideSnackBar = true;

  useImperativeHandle(ref, () => ({
    show(message, duration = 2500) {
      if (!showSnackBar) {
        changeMessage(message);
        showSnackBar = true;
        Animated.timing(animatedValue, {
          toValue: SNACKBAR_SHOW_TRANSLATE_Y_VALUE,
          duration: ANIMATION_DURATION,
        }).start(hide(duration));
      }
    },
  }));

  const hide = duration => {
    const timerID = setTimeout(() => {
      if (hideSnackBar === true) {
        hideSnackBar = false;
        Animated.timing(animatedValue, {
          toValue: SNACKBAR_HIDE_TRANSLATE_Y_VALUE,
          duration: ANIMATION_DURATION,
        }).start(() => {
          hideSnackBar = true;
          showSnackBar = false;
          clearTimeout(timerID);
        });
      }
    }, duration);
  };

  return (
    <Animated.View
      style={[
        {transform: [{translateY: animatedValue}]},
        styles.snackBarContainer,
      ]}>
      <Text style={styles.message}>{snackBarMsg}</Text>
    </Animated.View>
  );
});

export default memo(SnackBar);
