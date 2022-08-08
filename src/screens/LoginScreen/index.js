import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import {sizeToDp} from '@utils/';
import SignInLogo from '@assets/signInLogo.svg';
import CustomTextInput from '@components/TextInput';
import CheckBox from '@assets/checkbox.svg';
import Button from '@components/Button';
import {COLORS} from '@utils/colors';
import Row from '@components/Row';
import {commonStyle} from '@utils/commonStyle';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import {navigateTo} from '@utils/navigateTo';
import {userLoginRequest} from './action';
import {useDispatch} from 'react-redux';
import Mail from '@assets/mail.svg';
import PasswordLogo from '@assets/passwordLogo.svg';
import Eye from '@assets/eye-off-sharp.svg';
import LoaderService from '@services/LoaderService';
import {isValidEmail} from '@utils/';
import ErrorText from '@components/ErrorText';
import SnackBarService from '@services/SnackBarService';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onButtonPress = () => {
    let data = {
      email: email,
      password: password,
    };
    dispatch(userLoginRequest({data, navigation}));
    // switch (true) {
    //   case isValidEmail(email):
    //     LoaderService.show();
    //     SnackBarService.show('success');
    //     dispatch(userLoginRequest({data, navigation}));
    //     break;
    //   default:
    //     LoaderService.hide();
    //     setEmailError(true);
    //     break;
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Login" />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={commonStyle.centerText}>
          <SignInLogo height={sizeToDp(304)} width={sizeToDp(263)} />
        </View>
        <CustomTextInput
          label={'Username'}
          leftIcon={<Mail height={sizeToDp(22)} width={sizeToDp(22)} />}
          onChangeText={text => setEmail(text)}
          value={email}
          error={emailError}
        />
        {emailError && <ErrorText value={'invalid email address'} />}

        <CustomTextInput
          label={'Password'}
          leftIcon={<PasswordLogo height={sizeToDp(22)} width={sizeToDp(22)} />}
          onChangeText={text => setPassword(text)}
          value={password}
          error={passwordError}
          isPassword
          showPassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
          hidePassword={<Eye height={sizeToDp(22)} width={sizeToDp(22)} />}
        />
        {emailError && <ErrorText value={'invalid password'} />}
        <Row spaces style={styles.buttonStyle}>
          <Row>
            <CheckBox
              height={sizeToDp(24)}
              width={sizeToDp(24)}
              style={styles.checkBox}
            />
            <Text style={commonStyle.commonMediumText}>Remember me</Text>
          </Row>
          <Text
            style={commonStyle.commonMediumText}
            onPress={() =>
              navigateTo(navigation, NAVIGATION_SCREENS.FORGOT_PASSWORD)
            }>
            Forgot Password ?
          </Text>
        </Row>
        <Button size={'large'} text={'Sign Up'} onPress={onButtonPress} />

        <Row style={commonStyle.centerText}>
          <Text
            style={[commonStyle.commonSmallText, {color: COLORS.primaryBlack}]}>
            Don’t have an account ?{' '}
          </Text>
          <Text
            onPress={() => navigateTo(navigation, NAVIGATION_SCREENS.SIGNUP)}
            style={commonStyle.commonDecorationLintText}>
            Sign up
          </Text>
        </Row>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

// import {StyleSheet, Text, View} from 'react-native';
// import {StripeProvider} from '@stripe/stripe-react-native';
// import React from 'react';
// import PaymentScreen from './stripe/PaymentScreen';

// export default function LoginScreen() {
//   const publishableKey = 'rsqwfsdywdwgdeghcghsgdhvgs';
//   return (
//     <StripeProvider
//       publishableKey={publishableKey}
//       merchantIdentifier="merchant.identifier">
//       <Text>your app code </Text>
//       <PaymentScreen />
//     </StripeProvider>
//   );
// }
