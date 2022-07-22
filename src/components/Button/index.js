import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

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

const Button = ({
    size,
    text,
    onPress,
    style,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[buttonSize[size], styles.buttonContainer,
                style]}
        >
                <Text style={buttonText[size]}>
                    {text}
                </Text>
        
        </TouchableOpacity>
    );
};

export default Button;