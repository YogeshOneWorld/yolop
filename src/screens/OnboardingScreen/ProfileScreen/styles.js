import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {APP_FONTS} from '@utils/fonts';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: SPACING.sw15,
    paddingVertical: SPACING.sh50,
  },

  userLogo: {
    height: HEIGHT.h144,
    width: HEIGHT.h144,
    borderRadius: HEIGHT.h144 / 2,
  },
  modalHeading: {
    fontSize: FONTS.f18,
    color: COLORS.black,
    fontFamily: APP_FONTS.CircularStdBold,
    paddingLeft: SPACING.sw15,
    marginBottom: SPACING.sh15,
  },
  modelText: {
    fontSize: FONTS.f15,
    color: COLORS.primaryBlack,
    marginVertical: SPACING.sh6,
    paddingLeft: SPACING.sw20,
    fontFamily: APP_FONTS.CircularStdBook,
  },
});
