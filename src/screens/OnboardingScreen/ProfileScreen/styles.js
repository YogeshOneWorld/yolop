import { StyleSheet } from "react-native";
import { COLORS } from "@utils/colors";
import { APP_FONTS } from "@utils/fonts";
import { FONTS, HEIGHT, SPACING, WIDTH } from "@utils/constant";

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

    headerHeading: {
        fontSize: 30,
        fontFamily: APP_FONTS.CircularStdMedium
    },
    userLogo: {
        height: HEIGHT.h144,
         width: HEIGHT.h144,
         borderRadius: HEIGHT.h144 / 2,
    }
})