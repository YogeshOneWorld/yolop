import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import SignInLogo from '@assets/signInLogo.svg';
import CustomTextInput from '@components/TextInput';
import CheckBox from '@assets/checkbox.svg';
import Button from '@components/Button';
import {COLORS} from '@utils/colors';
import Row from '@components/Row';
import {commonStyle} from '@utils/commonStyle';
import CustomAlert from '@components/AlertBox';
import Success from '@assets/sucess_tick.svg';
import {navigateTo} from '@utils/navigateTo';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import PasswordLogo from '@assets/passwordLogo.svg';
import Eye from '@assets/eye-off-sharp.svg';

const CreatePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [ConfirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onButtonPress = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onSuccess = () => {
    setIsModalVisible(!isModalVisible);
    navigateTo(navigation, NAVIGATION_SCREENS.LOGIN);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon={<BackIcon height={sizeToDp(18.89)} width={sizeToDp(17.44)} />}
        title="Create Password"
        onBackIconPress={() => navigateTo(navigation)}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={commonStyle.mainView}>
          <View style={commonStyle.centerText}>
            <SignInLogo height={sizeToDp(304)} width={sizeToDp(263)} />
          </View>
          <CustomTextInput
            label={'Password'}
            onChangeText={text => setPassword(text)}
            value={password}
            error={passwordError}
            leftIcon={
              <PasswordLogo height={sizeToDp(22)} width={sizeToDp(22)} />
            }
            isPassword
            showPassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
            hidePassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
          />

          <CustomTextInput
            label={'Confirm Password'}
            onChangeText={text => setConfirmPassword(text)}
            value={ConfirmPassword}
            error={ConfirmPasswordError}
            leftIcon={
              <PasswordLogo height={sizeToDp(22)} width={sizeToDp(22)} />
            }
            isPassword
            showPassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
            hidePassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
          />
          <Row style={commonStyle.centerText}>
            <CheckBox
              height={sizeToDp(24)}
              width={sizeToDp(24)}
              style={styles.checkBox}
            />
            <Text style={commonStyle.commonMediumText}>Remember me</Text>
          </Row>
        </View>
        <Button size={'large'} text={'Continue'} onPress={onButtonPress} />
      </ScrollView>
      <CustomAlert isVisibleModal={isModalVisible}>
        <Success
          height={sizeToDp(148)}
          width={sizeToDp(200)}
          style={commonStyle.centerText}
        />
        <Text style={styles.modalHeading}>Congratulations!</Text>
        <View style={styles.modalTitle}>
          <Text
            style={[
              commonStyle.commonMediumText,
              {color: COLORS.primaryBlack},
            ]}>
            Your account is ready to use. You will be redirected to the Home
            Page in a few seconds
          </Text>
        </View>
        <View style={styles.confirmModalButton}>
          <View>
            <Text style={styles.buttonText} onPress={onSuccess}>
              Go to Homepage
            </Text>
            <View style={styles.borderBottom} />
          </View>
        </View>
      </CustomAlert>
    </SafeAreaView>
  );
};

export default CreatePassword;
