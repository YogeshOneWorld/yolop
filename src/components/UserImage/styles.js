import {HEIGHT, SPACING} from '@utils/constant';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  lightBackground: {
    padding: 10,
    borderStyle: 'dashed',
    borderRadius: HEIGHT.h140,
    borderWidth: 2,
    borderColor: '#fff',
    alignSelf: 'center',
  },
  darkBackground: {
    padding: 10,
    borderStyle: 'dashed',
    borderRadius: HEIGHT.h140,
    borderWidth: 2,
    borderColor: '#000',
    alignSelf: 'center',
  },
  image: {
    height: HEIGHT.h144,
    width: HEIGHT.h144,
  },
  editImage: {
    position: 'absolute',
    left: HEIGHT.h140,
    bottom: HEIGHT.h24,
    padding: SPACING.sh6,
    borderRadius: SPACING.sh6 * 2.4,
  },
  userLogo: {
    height: HEIGHT.h144,
    width: HEIGHT.h144,
    borderRadius: HEIGHT.h144 / 2,
  },
});
