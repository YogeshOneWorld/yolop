import { View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { TextInput } from 'react-native-paper';

import Icons from 'react-native-vector-icons/FontAwesome5';

const myIcon1 = <Icons name={"envelope"} size={30} color="#000"/>

export default function CustomTextInput({
    label,
    icon,
    onChangeText,
    placeholder,
    value,
    error,
    right
}) {

    return (
        <>
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
                right={right}
                error={error}
            />
        </>
    )
}

