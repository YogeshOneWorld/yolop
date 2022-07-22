import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import SignInLogo from '@assets/signInLogo.svg';
import CustomTextInput from '@components/TextInput';
import Button from '@components/Button';
import {COLORS} from '@utils/colors';
import Row from '@components/Row';
import {commonStyle} from '@utils/commonStyle';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onButtonPress = () => {
    navigation.navigate('RegisterProfile');
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
          onChangeText={text => setEmail(text)}
          placeholder="First Name"
          value={email}
          error={emailError}
        />
        <CustomTextInput
          label={'Last Name'}
          icon
          onChangeText={text => setPassword(text)}
          placeholder="Last Name"
          value={email}
          error={emailError}
        />
        <CustomTextInput
          label={'Email address'}
          icon
          onChangeText={text => setPassword(text)}
          placeholder="Email or Phone Number"
          value={email}
          error={emailError}
        />
        <CustomTextInput
          label={'Password'}
          icon
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          value={email}
          error={emailError}
        />
        <CustomTextInput
          label={'Confirm Password'}
          icon
          onChangeText={text => setPassword(text)}
          placeholder="Confirm Password"
          value={email}
          error={emailError}
        />

        <Button size={'large'} text={'Sign Up'} onPress={onButtonPress} />
        <View style={[commonStyle.centerText, styles.termsView]}>
          <Text
            style={[commonStyle.commonSmallText, {color: COLORS.primaryBlack}]}>
            By clicking “Signup” you agree to Yolop’s
            <Text
              onPress={() => navigation.navigate('Login')}
              style={commonStyle.commonSmallText}>
              {' '}
              Terms of use{' '}
            </Text>
            <Text
              style={[
                commonStyle.commonSmallText,
                {color: COLORS.primaryBlack},
              ]}>
              or
            </Text>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={commonStyle.commonSmallText}>
              {' '}
              Privacy Policy
            </Text>
          </Text>
        </View>
        <Row style={commonStyle.centerText}>
          <Text
            style={[commonStyle.commonSmallText, {color: COLORS.primaryBlack}]}>
            Already have an account ?
          </Text>
          <Text
            onPress={() => navigation.navigate('Login')}
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
