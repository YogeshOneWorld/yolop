import { StyleSheet } from "react-native";
import { COLORS } from "@utils/colors";
import { HEIGHT, SPACING, WIDTH } from "@utils/constant";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: HEIGHT.h45,
        paddingHorizontal: SPACING.sw15,
        backgroundColor: COLORS.tranparent
    },
    leftSideView: {
        width: "12%",
    },
    centerView: {
        width: "75%",
        textAlign: 'center',
    },
    rightSideView: {
        width: "12%",
        alignItems: 'flex-end'
    }
})
