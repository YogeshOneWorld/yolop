import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {FONTS, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';

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

  checkBox: {
    marginRight: SPACING.sh6,
  },
  termsView: {
    width: WIDTH.w250,
    marginBottom: SPACING.sh15,
  },
  modalHeading: {
    fontFamily: APP_FONTS.CircularStdBold,
    fontSize: FONTS.f29,
    color: COLORS.yellow,
    textAlign: 'center',
  },
  modalTitle: {
    width: '75%',
    alignSelf: 'center',
    marginTop: SPACING.sh6,
    marginBottom: SPACING.sh10,
  },
  confirmModalButton: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textDecorationLine: 'underline',
    fontSize: FONTS.f18,
    color: COLORS.black,
  },
});
