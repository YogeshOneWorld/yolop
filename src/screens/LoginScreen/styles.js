import { StyleSheet } from "react-native";
import { COLORS } from "@utils/colors";
import { APP_FONTS } from "@utils/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    logo: {
        alignSelf: 'center'
    },
    headerHeading: {
        fontSize: 30,
        fontFamily: APP_FONTS.CircularStdMedium
    }
})