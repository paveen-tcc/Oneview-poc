// Copyright (c) Microsoft.
// Licensed under the MIT license.

import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {UserContext} from '../UserContext';

const Stack = createStackNavigator();

const HomeComponent = () => {
  const userContext = React.useContext(UserContext);

  useEffect(() => {
    // Request permissions for PushNotificationIOS
    PushNotificationIOS.requestPermissions().then(
      (permissions) => console.log('Permissions granted:', permissions),
      (error) => console.log('Permissions rejected:', error)
    );

    const onLocalNotification = (notification:any) => {
      console.log('Local notification received:', notification);

      Alert.alert(
        'Local Notification Received',
        `Alert title: ${notification.getTitle()}\nYou can have your Custom message !!\n`,
        [
          {
            text: 'Dismiss',
          },
        ]
      );
    };

    // Add listener for localNotification events
    PushNotificationIOS.addEventListener('localNotification', onLocalNotification);

    // Clean up listener on unmount
    return () => {
      PushNotificationIOS.removeEventListener('localNotification');
    };
  }, []);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const addNotificationRequest = () => {
    const otp = generateOTP();
    const msgID = `otp_${otp}`;

    PushNotificationIOS.addNotificationRequest({
      id: msgID,
      title: 'OTP Received',
      body: `Your OTP is: ${otp}`,
      category: 'userAction',
      threadId: 'otp-thread',
      fireDate: new Date(new Date().valueOf() + 2000), 
    });
  };

  return (
    <View style={styles.container}>
      
      {userContext.userLoading ? null : (
        <Text>Hello {userContext.userFirstName}!</Text>
      )}
      <Button title='Get OTP' onPress={addNotificationRequest}></Button>
    </View>
  );
};

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeComponent}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
