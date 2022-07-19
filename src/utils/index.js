import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';
import {fetch} from '@react-native-community/netinfo';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import SnackBarService from '@services/SnackBarService';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
let screenHeightWithoutSafeArea =
  Dimensions.get('window').height -
  (StaticSafeAreaInsets.safeAreaInsetsTop +
    StaticSafeAreaInsets.safeAreaInsetsBottom);

export const widthPercentageToDP = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const heightWithoutSafeAreaPercentageToDP = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(
    (screenHeightWithoutSafeArea * elemHeight) / 100,
  );
};

export const sizeToDp = sizeDp => PixelRatio.roundToNearestPixel(sizeDp);

export const isValidEmail = emailAddress => {
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regEmail.test(emailAddress);
};



export const showInternetError = () => {
  SnackBarService.show('internet is not working');
};

export const withNetConnection = callback => async (...args) => {
  const {isConnected} = await fetch();
  if (!isConnected) {
    showInternetError();
    return;
  }
  return callback(...args);
};