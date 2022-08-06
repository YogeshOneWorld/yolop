import {Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function ErrorText({value}) {
  return <Text style={styles.errorText}>{value}</Text>;
}
