
import { COLORS } from "@utils/colors";
import { SPACING } from "@utils/constant";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: SPACING.sw15,
    backgroundColor: COLORS.white,
    borderRadius: SPACING.sw15,
    zIndex: 9,
  },
});