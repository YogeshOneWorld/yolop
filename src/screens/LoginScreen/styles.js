import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {APP_FONTS} from '@utils/fonts';
import {FONTS, SPACING, WIDTH} from '@utils/constant';

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
  buttonStyle: {
    marginBottom: SPACING.sh90,
  },
  checkBox: {
    marginRight: SPACING.sh6,
  },
  termsView: {
    width: WIDTH.w250,
    marginBottom: SPACING.sh15,
  },
});
