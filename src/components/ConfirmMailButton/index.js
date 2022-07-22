import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Row from '@components/Row';
import {commonStyle} from '@utils/commonStyle';

export default function ConfirmButton({
  icon,
  heading,
  title,
  isSelect,
  onPressAction,
}) {
  return (
    <TouchableOpacity
      style={isSelect ? styles.activeButton : styles.button}
      onPress={onPressAction}>
      <Row>
        {icon && <View style={styles.icon}>{icon}</View>}
        <View>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={commonStyle.commonSmallText}>{title}</Text>
        </View>
      </Row>
    </TouchableOpacity>
  );
}
