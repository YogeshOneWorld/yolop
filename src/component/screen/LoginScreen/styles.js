import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Color";
import { ScreenWidth } from "../../../utils/Screens";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        width: ScreenWidth.w100,
        alignItems: 'center'
    }
})