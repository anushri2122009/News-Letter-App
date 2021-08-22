import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Weather extends React.Component {
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
        <Text style={styles.head}>Weather</Text>
        <Text style={styles.textstyle}>Open a new tab in google and type: 'Today's Weather' and you will get the weather of the place you are living in.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  textstyle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  back: {
    width: 30,
    height: 30,
    marginBottom: 50
  },
  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
    backgroundColor: 'rgb(132,0,255)',
    marginTop: -30,
    borderRadius: 50,
  }
});
