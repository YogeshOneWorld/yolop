import {ScrollView, SafeAreaView, Image, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import UserImage from '@components/UserImage';
import EditIcon from '@assets/editIcon.svg';
import {COLORS} from '@utils/colors';
import CustomTextInput from '@components/TextInput';
import Button from '@components/Button';
import {navigateTo} from '@utils/navigateTo';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomAlert from '@components/AlertBox';

const RegisterProfile = ({navigation}) => {
  const [fName, setFName] = useState('');
  const [fNameError, setFNameError] = useState(false);
  const [lName, setLName] = useState('');
  const [lNameError, setLNameError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState(false);

  const [response, setResponse] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onImageSelect = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onPressCamera = useCallback(type => {
    setIsModalVisible(false);
    const options = {
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      saveToPhotos: true,
      includeBase64: true,
    };
    if (type === 'capture') {
      setIsModalVisible(false);
      launchCamera(options, response => {
        console.log('Response = ', response);
        if (response.didCancel) {
          return;
        }
        setResponse(response);
      });
    } else {
      setIsModalVisible(false);
      launchImageLibrary(options, response => {
        console.log('Response = ', response);
        if (response.didCancel) {
          return;
        }
        setResponse(response);
      });
    }
  }, []);

  const onButtonPress = () => {
    navigateTo(navigation, NAVIGATION_SCREENS.LOGIN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon={<BackIcon height={sizeToDp(18.89)} width={sizeToDp(17.44)} />}
        title="Your Profile"
        onBackIconPress={() => navigateTo(navigation)}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <UserImage
          icon={
            response?.assets &&
            response?.assets.map(({uri}) => (
              <Image source={{uri: uri}} style={styles.userLogo} />
            ))
          }
          editIcon={
            <EditIcon
              height={sizeToDp(17)}
              width={sizeToDp(17)}
              fill={COLORS.white}
            />
          }
          editIconbgColor="#000"
          onEditImage={onImageSelect}
        />

        <CustomTextInput
          label={'First Name'}
          icon
          onChangeText={text => setFName(text)}
          value={fName}
          error={fNameError}
        />
        <CustomTextInput
          label={'Last Name'}
          icon
          onChangeText={text => setLName(text)}
          value={lName}
          error={lNameError}
        />
        <CustomTextInput
          label={'Address'}
          icon
          onChangeText={text => setAddress(text)}
          value={address}
          error={addressError}
        />
        <CustomTextInput
          label={'City'}
          icon
          onChangeText={text => setCity(text)}
          value={city}
          error={cityError}
        />
        <CustomTextInput
          label={'Mobile'}
          icon
          onChangeText={text => setMobile(text)}
          value={mobile}
          error={mobileError}
        />
        <Button size={'large'} text={'Save Changes'} onPress={onButtonPress} />

        <CustomAlert isVisibleModal={isModalVisible}>
          <Text style={styles.modalHeading}>Select Image!</Text>
          <View style={styles.modalTitle}>
            <Text
              style={styles.modelText}
              onPress={() => onPressCamera('capture')}>
              TakePhoto
            </Text>
            <Text style={styles.modelText} onPress={onPressCamera}>
              Choose from library
            </Text>
            <Text style={styles.modelText} onPress={onImageSelect}>
              Cancel
            </Text>
          </View>
        </CustomAlert>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterProfile;
