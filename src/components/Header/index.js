import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {commonStyle} from '@utils/commonStyle';

export default function Header({
  icon,
  title,
  menubar,
  headingStyle,
  style,
  onBackIconPress,
}) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.leftSideView} onPress={onBackIconPress}>
        {icon}
      </TouchableOpacity>
      <Text
        style={[
          headingStyle,
          styles.centerView,
          commonStyle.commonLargeHeading,
        ]}>
        {title}
      </Text>
      <View style={styles.rightSideView}>{menubar}</View>
    </View>
  );
}
