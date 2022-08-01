import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING} from '@utils/constant';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputBox: {
    backgroundColor: COLORS.lightGray,
    marginVertical: SPACING.sh6,
    height: HEIGHT.h55,
    borderRadius: SPACING.sh15,
    paddingHorizontal: SPACING.sh6,
  },
  customLabelStyles: {
    colorFocused: COLORS.darkText,
    fontSizeFocused: FONTS.f12,
  },
  inputStyles: {
    color: COLORS.darkText,
    paddingHorizontal: SPACING.sw10,
  },
});
