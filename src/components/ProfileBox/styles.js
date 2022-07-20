import { sizeToDp } from "@utils/";
import { COLORS } from "@utils/colors";
import { FONTS, HEIGHT, SPACING } from "@utils/constant";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        height: HEIGHT.h270,
        justifyContent: 'center',
        alignItems: 'center'
    },
    insideBoxView: {
        alignItems: 'center'
    },
    insideBoxNameText: {
        fontSize: FONTS.f29,
        color: COLORS.white,
        marginTop: SPACING.sh15
    },
    insideBoxText: {
        fontSize: FONTS.f18,
        color: COLORS.white,
        marginVertical: SPACING.sh2
    }
})