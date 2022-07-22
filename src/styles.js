import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {APP_FONTS} from '@utils/fonts';
import {FONTS} from '@utils/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  logo: {
    alignSelf: 'center',
  },
  profileHeader: {
    fontSize: FONTS.f29,
    fontFamily: APP_FONTS.CircularStdMedium,
    color: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.black,
  },
});
