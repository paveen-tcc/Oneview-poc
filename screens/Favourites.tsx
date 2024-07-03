import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Favourites = () => {
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
        name: 'GBU Results',
        icon: '',
      },
    ],
    iceCream: [
      {
        name: 'Market Share & Business Winning',
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
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CORPERATE</Text>
      <View style={styles.card_container}>
        {tileDetails.corperate.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.05}
            key={index}
            style={styles.corperate_card}>
            <Text style={styles.card_text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.title}>HOME CARE</Text>
      <View style={styles.card_container}>
        {tileDetails.beautyandcare.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.05}
            key={index}
            style={styles.home_card}>
            <Text style={styles.card_text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    </ScrollView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  card_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    color: '#88c3df',
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
  icecream_card: {
    width: 140,
    height: 80,
    backgroundColor: '#bb2c87',
    borderRadius: 6,
    margin: 4,
  },
  nutrition_card: {
    width: 140,
    height: 80,
    backgroundColor: '#3e7d3c',
    borderRadius: 6,
    margin: 4,
  },
  card_text: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});
