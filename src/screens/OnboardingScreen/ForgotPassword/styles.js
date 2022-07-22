import {COLORS} from '@utils/colors';
import {SPACING, WIDTH} from '@utils/constant';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    flexGrow: 0.9,
    paddingHorizontal: SPACING.sw15,
    paddingVertical: SPACING.sh50,
  },
  heading: {
    width: WIDTH.w200,
    alignSelf: 'center',
  },
});
