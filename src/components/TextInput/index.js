import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import {COLORS} from '@utils/colors';

export default function CustomTextInput({
  label,
  icon,
  onChangeText,
  placeholder,
  value,
  error,
  right,
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
        theme={{
          colors: {
            placeholder: COLORS.primaryBlack,
            text: COLORS.black,
            underlineColor: 'transparent',
          },
        }}
      />
    </>
  );
}
