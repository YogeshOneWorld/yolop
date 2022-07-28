import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import SignInLogo from '@assets/signInLogo.svg';
import Button from '@components/Button';
import {commonStyle} from '@utils/commonStyle';
import ConfirmButton from '@components/ConfirmMailButton';
import Mail from '@assets/mail.svg';
import ChatIcon from '@assets/chatbubble.svg';
import {HEIGHT} from '@utils/constant';
import {navigateTo} from '@utils/navigateTo';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';

const ForgotPassword = ({navigation}) => {
  const [isSelectPhone, setIsSelectPhone] = useState(false);
  const [isSelectEmail, setIsSelectEmail] = useState(false);

  const onButtonPress = () => {
    navigateTo(navigation, NAVIGATION_SCREENS.OTP_SCREEN);
  };
  const onSelectAction = () => {
    if (isSelectEmail === false) {
      setIsSelectEmail(true);
      setIsSelectPhone(false);
    }
    if (isSelectPhone === false) {
      setIsSelectPhone(true);
      setIsSelectEmail(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon={<BackIcon height={sizeToDp(18.89)} width={sizeToDp(17.44)} />}
        title="Forgot Password"
        onBackIconPress={() => navigateTo(navigation)}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={commonStyle.centerText}>
          <SignInLogo height={sizeToDp(304)} width={sizeToDp(263)} />
        </View>
        <View style={styles.heading}>
          <Text style={commonStyle.commonSmallText}>
            Select which contact details should we use to reset your password
          </Text>
        </View>
        <ConfirmButton
          icon={<ChatIcon height={HEIGHT.h24} width={HEIGHT.h24} />}
          heading={'via SMS'}
          title={'+1 111*********99'}
          isSelect={isSelectPhone}
          onPressAction={onSelectAction}
        />
        <ConfirmButton
          icon={<Mail height={HEIGHT.h24} width={HEIGHT.h24} />}
          heading={'via Email :'}
          title={'and*****ley@yourdomain.com'}
          isSelect={isSelectEmail}
          onPressAction={onSelectAction}
        />
      </ScrollView>
      <Button size={'large'} text={'Continue'} onPress={onButtonPress} />
    </SafeAreaView>
  );
};

export default ForgotPassword;
