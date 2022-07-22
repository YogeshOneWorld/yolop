import {StyleSheet} from 'react-native';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {COLORS} from '@utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  main: {
    flex: 0.9,
    justifyContent: 'center',
    paddingHorizontal: SPACING.sw15,
  },
  inputStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginVertical: SPACING.sh90,
  },
  input: {
    height: HEIGHT.h45,
    width: WIDTH.w50,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: SPACING.sw10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SPACING.sh2,
    backgroundColor: COLORS.lightGray,
  },

  optText: {
    color: COLORS.black,
    fontSize: FONTS.f18,
  },

  defaultPin: {
    width: 0,
    height: 0,
  },
  button: {
    marginHorizontal: SPACING.sw15,
  },
});
