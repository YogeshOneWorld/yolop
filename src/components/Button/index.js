import Row from '@components/Row';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

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

const Button = ({size, text, onPress, style, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonSize[size], styles.buttonContainer, style]}>
      <Row>
        {icon}
        <Text style={buttonText[size]}>{text}</Text>
      </Row>
    </TouchableOpacity>
  );
};

export default Button;
