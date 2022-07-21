import { COLORS } from "@utils/colors";
import { FONTS, SPACING } from "@utils/constant";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    button: {
        borderWidth: 0.5,
        padding: SPACING.sh15,
        borderColor: COLORS.gray,
        borderRadius: SPACING.sw15
    },
    icon: {
        backgroundColor: COLORS.extraLightGray,
       padding: SPACING.sw10,
       borderRadius: SPACING.sw10 * 2,
       marginRight: SPACING.sw10
    },
    heading: {
        fontSize: FONTS.f15,
        marginBottom: SPACING.sh6,
        color: COLORS.lightText
    }
})