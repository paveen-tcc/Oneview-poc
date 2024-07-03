import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  const tileDetails = {
    corperate: [
      {
        name: 'Newsletters',
        icon: '',
      },
      {
        name: 'Results Review',
        icon: '',
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
        name: 'Corperate Deck',
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
      },
      {
        name: 'Brand Results',
        icon: '',
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
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Corperate</Text>
      <View style={styles.card_container}>
        {tileDetails.corperate.map((item,index) => (
          <View key={index} style={styles.corperate_card}>
            <Text style={styles.card_text}>{item.name}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.title}>Home Care</Text>
      <View style={styles.card_container}>
        {tileDetails.beautyandcare.map((item,index) => (
          <View key={index} style={styles.home_card}>
            <Text
              style={styles.card_text}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 10,
  },
  card_container: {
    flexDirection:"row",
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
  },
  corperate_card: {
    width: 130,
    height: 80,
    backgroundColor: '#7baddf',
    borderRadius: 6,
    margin: 4,
  },
  home_card: {
    width: 140,
    height: 80,
    backgroundColor: '#743b8c',
    borderRadius: 6,
    margin: 4,
  },
  card_text:{
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    color:"white"
  }
});
