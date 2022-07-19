import { StyleSheet } from "react-native";
import { COLORS } from "@utils/colors";
import { HEIGHT, SPACING, WIDTH } from "@utils/constant";

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        width: WIDTH.w0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: HEIGHT.h45,
        paddingHorizontal: SPACING.sw15
    },
    leftSideView: {
        width: "20%"
    },
    centerView: {
        width: "50%",
        textAlign: 'center'
    },
    rightSideView: {
        width: "20%",
        alignItems: 'flex-end'
    }
})
