import { Dimensions } from "react-native";

const height = Dimensions.get("window").height
const width = Dimensions.get('window').width
export const ScreenHeight = {
    h100 : height,
    h75: height/1.5,
    h50: height /2,
    h25: height /4,
    h10: height /16,
}

export const ScreenWidth = {
    w100 : width,
    w75: width/1.5,
    w50: width /2,
    w25: width /3,
    w10: width /2,

}