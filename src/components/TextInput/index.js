import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import CheckBox from '@assets/checkbox.svg';

export default function CustomTextInput({
  label,
  onChangeText,
  value,
  leftIcon,
  rightIcon,
  showPassword,
  hidePassword,
  isPassword,
  error,
}) {
  return (
    <View>
      <FloatingLabelInput
        label={label}
        value={value}
        containerStyles={styles.inputBox}
        customLabelStyles={styles.customLabelStyles}
        inputStyles={styles.inputStyles}
        onChangeText={onChangeText}
        isPassword={isPassword}
        leftComponent={leftIcon}
        rightComponent={rightIcon}
        customHidePasswordComponent={showPassword}
        // customShowPasswordImage={showPassword}
        customShowPasswordComponent={hidePassword}
      />
    </View>
  );
}
