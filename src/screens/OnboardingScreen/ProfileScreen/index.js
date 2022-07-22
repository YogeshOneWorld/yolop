import {ScrollView, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import UserImage from '@components/UserImage';
import {userImg} from '@assets/';
import EditIcon from '@assets/editIcon.svg';
import {COLORS} from '@utils/colors';
import CustomTextInput from '@components/TextInput';
import Button from '@components/Button';

const RegisterProfile = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onButtonPress = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon={<BackIcon height={sizeToDp(18.89)} width={sizeToDp(17.44)} />}
        title="Your Profile"
        onBackIconPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <UserImage
          icon={<Image source={userImg} style={styles.userLogo} />}
          editIcon={
            <EditIcon
              height={sizeToDp(17)}
              width={sizeToDp(17)}
              fill={COLORS.white}
            />
          }
          editIconbgColor="#000"
        />

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
          onChangeText={text => setEmail(text)}
          placeholder="Last Name"
          value={email}
          error={emailError}
        />
        <CustomTextInput
          label={'Address'}
          icon
          onChangeText={text => setEmail(text)}
          placeholder="Address"
          value={email}
          error={emailError}
        />
        <CustomTextInput
          label={'City'}
          icon
          onChangeText={text => setEmail(text)}
          placeholder="City"
          value={email}
          error={emailError}
        />
        <CustomTextInput
          label={'Mobile'}
          icon
          onChangeText={text => setEmail(text)}
          placeholder="Mobile"
          value={email}
          error={emailError}
        />
        <Button size={'large'} text={'Save Changes'} onPress={onButtonPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterProfile;
