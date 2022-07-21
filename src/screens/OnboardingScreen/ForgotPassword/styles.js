import { COLORS } from "@utils/colors";
import { SPACING, WIDTH } from "@utils/constant";
import { APP_FONTS } from "@utils/fonts";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
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
    heading: {
        width: WIDTH.w200,
        alignSelf: 'center',
    }
})