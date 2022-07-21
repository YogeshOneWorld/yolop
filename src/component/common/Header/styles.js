import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Color";
import { ScreenHeight, ScreenWidth } from "../../../utils/Screens";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        width: ScreenWidth.w100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: ScreenHeight.h10
    }
})