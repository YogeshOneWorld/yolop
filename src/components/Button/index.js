import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { COLORS } from "@utils/colors";
import Row from '../Row';

const buttonSize = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,

};

const buttonText = {
    small: styles.tinyText,
    medium: styles.mediumText,
    large: styles.largeText,

};

const buttonTextColor = {
    primary: styles.primaryText,
    outline: styles.outlineText,
    colored: styles.outlineText,
};

const Button = ({
    type,
    size,
    text,
    disabled,
    onPress,
    style,
    icon,
    iconStyle,
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[size === "large" ? styles.large :
                size === "medium" ? styles.medium :
                    styles.small,
            styles.buttonContainer,
                style]}
        >
            <Row>
                {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
                <Text style={[buttonTextColor[type], buttonText[size]]}>
                    {text}
                </Text>
            </Row>

        </TouchableOpacity>
    );
};

export default Button;