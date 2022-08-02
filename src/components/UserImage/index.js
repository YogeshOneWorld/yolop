import {TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {userImg} from '@assets/';

export default function UserImage({
  icon,
  editIcon,
  editIconbgColor,
  border,
  onEditImage,
}) {
  return (
    <View style={border ? styles.lightBackground : styles.darkBackground}>
      {icon ? icon : <Image source={userImg} style={styles.userLogo} />}
      {editIcon && (
        <TouchableOpacity
          style={[styles.editImage, {backgroundColor: editIconbgColor}]}
          onPress={onEditImage}>
          {editIcon}
        </TouchableOpacity>
      )}
    </View>
  );
}
