import {SafeAreaView, Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import {navigateTo} from '@utils/navigateTo';
import NotificationIcon from '@assets/notifications.svg';
import {commonStyle} from '@utils/commonStyle';
import {NOTIFICATIONDATA} from '@mock/NotificationData';
import Row from '@components/Row';
import Button from '@components/Button';
import CheckMark from '@assets/checkmark.svg';
import CustomAlert from '@components/AlertBox';
import {COLORS} from '@utils/colors';
import Success from '@assets/sucess_tick.svg';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';

export default function NotificationScreen({navigation}) {
  const [isShow, setIsShow] = useState(false);
  const [notificationData, setNotificationData] = useState(NOTIFICATIONDATA);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onButtonPress = (item, index) => {
    item.accept = true;
    notificationData[index] = item;
    setNotificationData([...notificationData]);
    setIsModalVisible(!isModalVisible);
  };

  const onSuccess = () => {
    setIsModalVisible(!isModalVisible);
  };

  const renderItem = ({item, index}) => {
    return (
      <Row style={styles.notificationView}>
        <Image source={item.icon} style={styles.eventIcon} />
        <View>
          <Text
            style={
              item.accept
                ? styles.notificationTitle
                : styles.acceptedNotificationTitle
            }>
            {item.name}
          </Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
          {!item.accept && (
            <Button
              size={'medium'}
              text={'Accept'}
              onPress={() => onButtonPress(item, index)}
              icon={<CheckMark height={sizeToDp(18)} width={sizeToDp(18)} />}
              style={styles.button}
            />
          )}
        </View>
      </Row>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon={<BackIcon height={sizeToDp(18.89)} width={sizeToDp(17.44)} />}
        title="Notifications"
        onBackIconPress={() => navigateTo(navigation)}
      />
      {isShow && (
        <View style={styles.emptyNotificationView}>
          <NotificationIcon height={sizeToDp(232)} width={sizeToDp(232)} />
          <Text
            style={[commonStyle.commonLargeHeading, commonStyle.centerText]}>
            You have’t gotten any notifications yet
          </Text>
          <Text style={styles.emptyNotificationHeading}>
            We’’ll alert you onece something cool happens
          </Text>
        </View>
      )}
      {!isShow && (
        <FlatList
          data={notificationData}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
        />
      )}

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
            You accepted Base coin auction. You will be notify when auction
            start.
          </Text>
        </View>
        <Row style={styles.confirmModalButton}>
          <BackIcon height={sizeToDp(12.38)} width={sizeToDp(13.41)} />
          <View>
            <Text style={styles.buttonText} onPress={onSuccess}>
              Back to Notifications
            </Text>
            <View style={styles.borderBottom} />
          </View>
        </Row>
      </CustomAlert>
    </SafeAreaView>
  );
}
