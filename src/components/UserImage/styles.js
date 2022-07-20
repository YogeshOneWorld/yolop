import { HEIGHT, SPACING } from "@utils/constant";
import { StyleSheet } from "react-native";
 export default StyleSheet.create({
    background: {
        padding: 10,
        borderStyle: 'dashed',
        borderRadius: HEIGHT.h140,
        borderWidth: 2,
        borderColor: '#fff',
    },
    image: {
        height: HEIGHT.h144,
        width: HEIGHT.h144
    },
    editImage: {
      position: 'absolute',
      left: HEIGHT.h140,
      bottom: HEIGHT.h24,
      padding: SPACING.sh6,
      borderRadius: SPACING.sh6 * 2.4
    }
 })