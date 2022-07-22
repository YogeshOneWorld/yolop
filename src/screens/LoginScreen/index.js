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

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onButtonPress = () => {
    // navigation.navigate("RegisterProfile")
    alert('processing');
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
          label={'Email'}
          icon
          onChangeText={text => setEmail(text)}
          placeholder="Username"
          value={email}
          error={emailError}
        />

        <CustomTextInput
          label={'Password'}
          icon
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          value={password}
          error={emailError}
        />
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
            onPress={() => navigation.navigate('ForgotPassword')}>
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
            onPress={() => navigation.navigate('SignUp')}
            style={commonStyle.commonDecorationLintText}>
            Sign up
          </Text>
        </Row>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
