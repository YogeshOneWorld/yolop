import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import {sizeToDp} from '@utils/';
import SignInLogo from '@assets/signInLogo.svg';
import CustomTextInput from '@components/TextInput';
import Button from '@components/Button';
import {COLORS} from '@utils/colors';
import Row from '@components/Row';
import {commonStyle} from '@utils/commonStyle';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import {navigateTo} from '@utils/navigateTo';
import Mail from '@assets/mail.svg';
import PasswordLogo from '@assets/passwordLogo.svg';
import Eye from '@assets/eye-off-sharp.svg';
import UserLogo from '@assets/userLogo.svg';

const SignUpScreen = ({navigation}) => {
  const [fName, setFName] = useState('');
  const [fNameError, setFNameError] = useState(false);
  const [lName, setLName] = useState('');
  const [lNameError, setLNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const onButtonPress = () => {
    navigateTo(navigation, NAVIGATION_SCREENS.REGISTRATION);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sign Up" />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={commonStyle.centerText}>
          <SignInLogo height={sizeToDp(304)} width={sizeToDp(263)} />
        </View>
        <CustomTextInput
          label={'First Name'}
          icon
          onChangeText={text => setFName(text)}
          leftIcon={<UserLogo height={sizeToDp(22)} width={sizeToDp(22)} />}
          value={fName}
          error={fNameError}
        />
        <CustomTextInput
          label={'Last Name'}
          icon
          onChangeText={text => setLName(text)}
          leftIcon={<UserLogo height={sizeToDp(22)} width={sizeToDp(22)} />}
          value={lName}
          error={lNameError}
        />
        <CustomTextInput
          label={'Email or Phone Number'}
          icon
          onChangeText={text => setEmail(text)}
          leftIcon={<Mail height={sizeToDp(22)} width={sizeToDp(22)} />}
          value={email}
          error={emailError}
        />
        <CustomTextInput
          label={'Password'}
          icon
          onChangeText={text => setPassword(text)}
          value={password}
          error={passwordError}
          leftIcon={<PasswordLogo height={sizeToDp(22)} width={sizeToDp(22)} />}
          isPassword
          showPassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
          hidePassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
        />
        <CustomTextInput
          label={'Confirm Password'}
          icon
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          error={confirmPasswordError}
          leftIcon={<PasswordLogo height={sizeToDp(22)} width={sizeToDp(22)} />}
          isPassword
          showPassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
          hidePassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
        />

        <Button size={'large'} text={'Sign Up'} onPress={onButtonPress} />
        <View style={[commonStyle.centerText, styles.termsView]}>
          <Text
            style={[commonStyle.commonSmallText, {color: COLORS.primaryBlack}]}>
            By clicking “Signup” you agree to Yolop’s
            <Text style={commonStyle.commonSmallText}> Terms of use </Text>
            <Text
              style={[
                commonStyle.commonSmallText,
                {color: COLORS.primaryBlack},
              ]}>
              or
            </Text>
            <Text style={commonStyle.commonSmallText}> Privacy Policy</Text>
          </Text>
        </View>
        <Row style={commonStyle.centerText}>
          <Text
            style={[commonStyle.commonSmallText, {color: COLORS.primaryBlack}]}>
            Already have an account ?
          </Text>
          <Text
            onPress={() => navigateTo(navigation, NAVIGATION_SCREENS.LOGIN)}
            style={commonStyle.commonDecorationLintText}>
            {' '}
            Sign in
          </Text>
        </Row>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
