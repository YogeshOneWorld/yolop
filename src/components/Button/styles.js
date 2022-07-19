import { StyleSheet } from "react-native";
import { COLORS } from "@utils/colors";
import { WIDTH, HEIGHT, SPACING } from "@utils/constant";

export default StyleSheet.create({

  small: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH.w80,
    height: HEIGHT.h24,
    borderRadius: SPACING.sw15
  },
  medium: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH.w155,
    height: HEIGHT.h36,
    borderRadius: SPACING.sw20
  },
  large: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: HEIGHT.h45,
    borderRadius: SPACING.sw30
  },

  mediumText: {
    fontSize: 16,
    lineHeight: 24,
  },
  largeText: {
    fontSize: 18,
    lineHeight: 24,
  },

  primaryText: {
    color: COLORS.white,
  },
  outlineText: {
    color: COLORS.primary_main,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 15,
    resizeMode: "contain",
  },
  buttonContainer: {
    backgroundColor: COLORS.yellow,
  },
});