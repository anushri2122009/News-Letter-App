import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>News Letter -3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 0
  },
  textStyle: {
    fontSize: 40,
    fontFamily: 'Bradley Hand ITC',
  },
});
