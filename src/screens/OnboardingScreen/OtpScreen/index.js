import Header from '@components/Header';
import {sizeToDp} from '@utils/';
import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import BackIcon from '@assets/backIcon.svg';
import Button from '@components/Button';
import {commonStyle} from '@utils/commonStyle';
import {navigateTo} from '@utils/navigateTo';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';

const OtpScreen = ({navigation}) => {
  const [pins, setPins] = useState('');
  const pinLength = 4;
  let textInput = useRef(null);

  const onButtonPress = () => {
    navigateTo(navigation, NAVIGATION_SCREENS.CREATE_PASSWORD);
  };

  const onChangeText = text => {
    setPins(text);
  };

  useEffect(() => {
    setTimeout(() => {
      textInput.current.focus();
    }, 100);
  }, []);

  const onSelectBox = () => {
    setTimeout(() => {
      textInput.current.focus();
    }, 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon={<BackIcon height={sizeToDp(18.89)} width={sizeToDp(17.44)} />}
        title="Forgot Password"
        onBackIconPress={() => navigateTo(navigation)}
      />
      <KeyboardAvoidingView style={styles.main}>
        <View>
          <Text style={commonStyle.commonSmallText}>
            code has been send to +1 111*********99
          </Text>

          <TextInput
            maxLength={pinLength}
            style={styles.defaultPin}
            returnKeyType="done "
            keyboardType="number-pad"
            value={pins}
            onChangeText={onChangeText}
            ref={textInput}
          />

          <View style={styles.inputStyles}>
            {Array(pinLength)
              .fill()
              .map((_data, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.input}
                  onPress={onSelectBox}>
                  <Text
                    style={styles.optText}
                    onPress={() => textInput.focus()}>
                    {pins && pins.length > 0 ? pins[index] : ''}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
          <Text style={commonStyle.commonSmallText}>Resend code in 54 s</Text>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.button}>
        <Button size={'large'} text={'Verify'} onPress={onButtonPress} />
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
