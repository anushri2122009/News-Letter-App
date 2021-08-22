import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ImageScreen extends React.Component {
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
        <Text style={styles.head}>The World's Most Interesting News</Text>
        <Text style={styles.textStyle}>
        To make someone "Happy" is the best news of the day and it will be forever..
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    width: 30,
    height: 30,
    marginBottom: 50,
  },
   textStyle: {
     fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
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
