import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { APP_FONTS } from "./fonts";
const { FONTS } = require("./constant");


export const commonStyle = StyleSheet.create({
    commonMediumText: {
        fontSize: FONTS.f18,
        color: COLORS.textColor,
        fontFamily: APP_FONTS.CircularStdBook,
        lineHeight: 21,
        textAlign: 'center'
    },
    commonSmallText: {
        fontSize: FONTS.f15,
        color: COLORS.black,
        fontFamily: APP_FONTS.CircularStdBook,
        lineHeight: 20,
        textAlign: 'center'
    },
    centerText: {
        alignSelf: 'center',
        textAlign: 'center'
    }
})