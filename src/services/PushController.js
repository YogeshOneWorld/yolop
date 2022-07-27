import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

export default function PushController() {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then(fcmToken => {
          console.log('fcmToken is => ', fcmToken);
        });
    } else {
      console.log('not authorized stetus');
    }

    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        if (remoteMessage) {
          console.log(
            'getInitialNotification',
            'Notification caused app is quit from background',
          );
        }
        console.log(remoteMessage);
        alert(
          'getInitialNotification: Notification caused app is' +
            'quit from background',
        );
      });

    messaging().onNotificationOpenedApp(async remoteMessage => {
      if (remoteMessage) {
        console.log(
          'onNotificationOpenedApp' +
            'Notification caused app is open from background',
        );
      }
      console.log(remoteMessage);
      alert(
        'onNotificationOpenedApp: Notification caused app is',
        'open from background',
      );
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      alert('a new FCM message arrived', remoteMessage);
      console.log('a new FCM message arrived', JSON.stringify(remoteMessage));
    });
    messaging()
      .subscribeToTopic('weather')
      .then(() => console.log('Subscribed to topic!'));

    return () => {
      unsubscribe;
    };
  }, []);
  return null;
}
// import React, {Component} from 'react';
// import PushNotification from 'react-native-push-notification';

// // const PushNotification = require("react-nativ÷e-push-notification");

// export default class PushController extends Component {
//   componentDidMount() {
//     PushNotification.configure({
//       // (optional) Called when Token is generated (iOS and Android)
//       onRegister: function (token) {
//         console.log('TOKEN:', token);
//       },

//       // (required) Called when a remote or local notification is opened or received
//       onNotification: function (notification) {
//         console.log('NOTIFICATION:', notification);

//         // process the notification here

//         // required on iOS only
//         // notification.finish(PushNotificationIOS.FetchResult.NoData);
//       },
//       // Android only
//       senderID: '1090501687137',
//       // iOS only
//       permissions: {
//         alert: true,
//         badge: true,
//         sound: true,
//       },
//       popInitialNotification: true,
//       requestPermissions: true,
//     });
//   }

//   render() {
//     return null;
//   }
// }
