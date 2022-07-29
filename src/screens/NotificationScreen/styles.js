import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  emptyNotificationView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.sw20,
  },
  emptyNotificationHeading: {
    marginTop: SPACING.sh15,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.CircularStdBook,
    color: COLORS.primaryBlack,
    lineHeight: 20,
    textAlign: 'center',
  },
  notificationView: {
    backgroundColor: COLORS.tranparent,
    marginVertical: SPACING.sh6,
    paddingTop: SPACING.sh20,
    paddingHorizontal: SPACING.sw15,
    borderTopWidth: 0.8,
    borderTopColor: COLORS.gray,
    alignItems: 'flex-start',
  },
  eventIcon: {
    height: HEIGHT.h36,
    width: HEIGHT.h36,
    marginRight: SPACING.sw15,
  },
  notificationTitle: {
    fontSize: FONTS.f16,
    color: COLORS.darkText,
    width: WIDTH.w220,
  },
  acceptedNotificationTitle: {
    fontSize: FONTS.f16,
    color: COLORS.primaryBlack,
    width: WIDTH.w220,
  },
  notificationTime: {
    fontSize: FONTS.f12,
    color: COLORS.lightText,
    width: WIDTH.w220,
    marginVertical: SPACING.sh6,
  },
  button: {
    marginVertical: SPACING.sh2,
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
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: FONTS.f15,
    color: COLORS.darkText,
    marginLeft: SPACING.sh6,
  },
  borderBottom: {
    height: 1,
    marginLeft: SPACING.sh6,
    backgroundColor: COLORS.darkText,
    marginTop: SPACING.sh2,
  },
});
