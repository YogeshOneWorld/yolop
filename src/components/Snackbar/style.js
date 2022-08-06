import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {sizeToDp} from '@utils/';
import {APP_FONTS} from '@utils/fonts';

export const styles = StyleSheet.create({
  snackBarContainer: {
    position: 'absolute',
    backgroundColor: COLORS.yellow,
    borderRadius: sizeToDp(10),
    justifyContent: 'center',
    alignItems: 'center',
    left: sizeToDp(20),
    right: sizeToDp(20),
    minHeight: sizeToDp(50),
    top: 0,
  },

  message: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: APP_FONTS.CircularStdBold,
    paddingHorizontal: sizeToDp(20),
    paddingVertical: sizeToDp(5),
  },
});
