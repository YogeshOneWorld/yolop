import { StyleSheet } from "react-native";
import { Colors } from "@utils/Color";
import { HEIGHT, SPACING, WIDTH } from "@utils/Constant";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        width: WIDTH.w0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: HEIGHT.h45,
        paddingHorizontal: SPACING.v15
    }
})
