import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {useFileModule} from './Modules/FileModule';
import {NativeModules} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import FileViewer from 'react-native-file-viewer';
// console.log(NativeModules)
const {PdfController} = NativeModules;
const Home = () => {
  const {accessFilePath, createFile} = useFileModule();
  const libPath = RNFetchBlob.fs.dirs.LibraryDir;
  const tileDetails = {
    corperate: [
      {
        name: 'Newsletters',
        icon: '',
        isNotification: true,
      },
      {
        name: 'Results Review',
        icon: '',
        type: 'pdf',
      },
      {
        name: 'Forecast Review',
        icon: '',
      },
      {
        name: 'Currency Analysis',
        icon: '',
      },
      {
        name: 'Corporate Deck',
        icon: '',
      },
      {
        name: 'Cash & Earnings',
        icon: '',
      },
    ],
    beautyandcare: [
      {
        name: 'Business Group Results',
        icon: '',
        type: 'ppt',
      },
      {
        name: 'Brand Results',
        icon: '',
        isNotification: true,
      },
      {
        name: 'Category Results',
        icon: '',
      },
      {
        name: 'GBU Results',
        icon: '',
      },
    ],
    iceCream: [
      {
        name: 'Market Share & Business Winning',
        icon: '',
      },
      {
        name: 'Reference Documents',
        icon: '',
      },
    ],
    nutrition: [
      {
        name: 'Market Share & Business Winning',
        icon: '',
      },
      {
        name: 'Reference Documents',
        icon: '',
      },
    ],
  };

  useEffect(() => {
    // Request permissions
    PushNotificationIOS.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
      critical: false,
    }).then(
      data =>
        console.log('Accepted PushNotificationIOS.requestPermissions', data),
      data => console.log('Rejected PushNotificationIOS notifications', data),
    );

    const onLocalNotification = (notification: any) => {
      console.log(
        `onLocalNotification() was called with ${JSON.stringify(
          notification,
        )}...`,
      );
      const isClicked = notification.getData().userInteraction === 1;

      Alert.alert(
        'Notification Received',
        `Alert title: Hii, You have something from Coperate-Newsletter \n`,
        [
          {
            text: 'Dismiss',
          },
        ],
      );
    };

    // Add listener for localNotification events
    PushNotificationIOS.addEventListener(
      'localNotification',
      onLocalNotification,
    );

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
      title: 'Newsletters',
      body: `Hii, You have something from Coperate-Newsletter`,
      category: 'userAction',
      threadId: 'otp-thread',
      fireDate: new Date(new Date().valueOf() + 1000), // Fire notification after 2 seconds
    });
  };
  const handleOpenDocument = async (type: string) => {
    try {
      const filePath = await createFile(type);
      await FileViewer.open(filePath as string);
      //  console.log("Data",data)
      // await getFilesInDirectory()
      //  if(accessFilePath) {
      //   // console.log("accessFilePath",accessFilePath)
      //   const filePath = `${libPath}/oneview/${accessFilePath[2]}`
      // //  PdfController.openPDF(filePath)

      //  }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>CORPORATE</Text>
        <View style={styles.card_container}>
          {tileDetails.corperate.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.05}
              key={index}
              style={styles.corperate_card}
              onPress={
                item.isNotification
                  ? addNotificationRequest
                  : item.type
                  ? () => handleOpenDocument(item.type)
                  : () => console.log('Tile is not to notify')
              }>
              <Text style={styles.card_text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>HOME CARE</Text>
        <View style={styles.card_container}>
          {tileDetails.beautyandcare.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.05}
              key={index}
              style={styles.home_card}
              onPress={
                item.isNotification
                  ? addNotificationRequest
                  : item.type
                  ? () => handleOpenDocument(item.type)
                  : () => console.log('Tile is not to notify')
              }>
              <Text style={styles.card_text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>ICE CREAM</Text>
        <View style={styles.card_container}>
          {tileDetails.iceCream.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.05}
              key={index}
              style={styles.icecream_card}>
              <Text style={styles.card_text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.title}>NUTRITION</Text>
        <View style={styles.card_container}>
          {tileDetails.iceCream.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.05}
              key={index}
              style={styles.nutrition_card}>
              <Text style={styles.card_text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
    paddingLeft: 6,
  },
  section: {
    marginBottom: 14,
  },
  card_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    columnGap:4,
    rowGap:10
  },
  title: {
    fontSize: 19,
    fontWeight: '500',
    color: '#005EEF',
    marginTop: 15,
  },
  corperate_card: {
    width: 180,
    height: 80,
    margin: 'auto',
    backgroundColor: '#01b2fe',
    borderRadius: 6,
    margin: 4,
  },
  home_card: {
    width: 180,
    height: 80,
    backgroundColor: '#9c44bf',
    borderRadius: 6,
    margin: 4,
  },
  icecream_card: {
    width: 180,
    height: 80,
    backgroundColor: '#fe0a7b',
    borderRadius: 6,
    margin: 4,
  },
  nutrition_card: {
    width: 180,
    height: 80,
    backgroundColor: '#008651',
    borderRadius: 6,
    margin: 4,
  },
  card_text: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
  },
});
