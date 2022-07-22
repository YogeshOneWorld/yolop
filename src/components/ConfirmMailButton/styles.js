import {COLORS} from '@utils/colors';
import {FONTS, SPACING} from '@utils/constant';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  activeButton: {
    borderWidth: 1,
    padding: SPACING.sh15,
    borderColor: COLORS.primaryBlacßk,
    borderRadius: SPACING.sw15,
    marginTop: SPACING.sh15,
    backgroundColor: COLORS.white,
  },
  button: {
    borderWidth: 1,
    padding: SPACING.sh15,
    borderColor: COLORS.gray,
    borderRadius: SPACING.sw15,
    marginTop: SPACING.sh15,
    backgroundColor: COLORS.white,
  },
  icon: {
    backgroundColor: COLORS.extraLightGray,
    padding: SPACING.sw10,
    borderRadius: SPACING.sw10 * 2,
    marginRight: SPACING.sw10,
  },
  heading: {
    fontSize: FONTS.f15,
    marginBottom: SPACING.sh2,
    color: COLORS.lightText,
  },
});
