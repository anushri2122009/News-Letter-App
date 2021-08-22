import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class JokeScreen extends React.Component {
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
        <Text style={styles.head}>Laughing Corner</Text>
        <Text style={styles.text}>What 0 says to 8 :-</Text>
        <Image
            style={styles.img}
            source={require('../assets/joke1.png')}
          />
          <Text style={styles.text}>Scene of maths class :-</Text>
          <Image
            style={styles.img}
            source={require('../assets/joke2.png')}
          />
          <Text style={styles.text}>Moral values :-</Text>
          <Image
            style={styles.img}
            source={require('../assets/joke3.png')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  back: {
    width: 30,
    height: 30,
    marginBottom: 28,
  },

  img: {
    marginLeft:10,
    width: 290,
    height: 150,
   
  },
  
  text: {
    fontSize: 20,
    color: 'rgb(132,0,255)',
    marginBottom: 15,
    fontWeight: 'bold',
    backgroundColor: 'yellow'
},

  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
    backgroundColor: 'rgb(132,0,255)',
    marginTop: -30,
    fontWeight: 'bold',
    borderRadius: 50,
  },
});

