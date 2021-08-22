import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Horoscope extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Image
            style={styles.back}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.head}>Horoscope of today</Text>
        <Text style={styles.textStyle}>
           The 12 signs of the zodiac have distinct characteristics that shape a person. Wouldn’t it be helpful to know what the day has in store for you just as you begin your morning? So, go on and read to find out whether the odds will be in your favour today.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize:20
  },
  back: {
    width: 30,
    height: 30,
    marginBottom: 30,
  },
  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
    backgroundColor: 'rgb(132,0,255)',
    marginTop: -30,
  borderRadius: 50,
  },
});
