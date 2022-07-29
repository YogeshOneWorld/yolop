import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {WIDTH, HEIGHT, SPACING, FONTS} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  small: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH.w80,
    height: HEIGHT.h24,
    borderRadius: SPACING.sw15,
  },
  medium: {
    justifyContent: 'center',
    width: WIDTH.w155,
    height: HEIGHT.h24,
    borderRadius: SPACING.sw25,
  },
  large: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: HEIGHT.h45,
    borderRadius: SPACING.sw30,
  },

  mediumText: {
    fontSize: FONTS.f15,
    lineHeight: 20,
    fontFamily: APP_FONTS.CircularStdBold,
    color: COLORS.white,
    textAlign: 'center',
    // textAlignVertical: 'center',
  },
  largeText: {
    fontSize: FONTS.f18,
    lineHeight: 24,
    fontFamily: APP_FONTS.CircularStdBold,
    color: COLORS.white,
  },

  buttonContainer: {
    backgroundColor: COLORS.yellow,
    marginVertical: SPACING.sh15,
    alignItems: 'center',
  },
});
