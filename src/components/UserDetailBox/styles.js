import { COLORS } from "@utils/colors";
import { FONTS, SPACING } from "@utils/constant";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    boxView: {
        //  backgroundColor: 'red',
        paddingVertical: SPACING.sh15,
        borderBottomWidth: 0.7,
        borderBottomColor: COLORS.extraLightGray,
        paddingHorizontal: SPACING.sw25
    },
    heading: {
        color: COLORS.lightText,
        fontSize: FONTS.f18,
        marginVertical: SPACING.sh2
    },
    title: {
        color: COLORS.darkText,
        fontSize: FONTS.f18,
        marginVertical: SPACING.sh2

    }
})