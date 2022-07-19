import { View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { TextInput } from 'react-native-paper';
export default function CustomTextInput({label, icon , onChangeText, placeholder, value, error}) {
    return (
        <TextInput
            mode="outlined"
            label={label}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.inputBox}
            activeOutlineColor="black"
            underlineColor="transparent"
            left={icon}
            error={error}
        />
    )
}

