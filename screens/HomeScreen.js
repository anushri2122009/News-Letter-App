 import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import db from '../config'
export default class HomeScreen extends React.Component {

  constructor(){
    super();
    this.state={
      like:0,
      dislike:0
    }
  }

  likecount=()=>{
    this.setState({like:this.state.like+1})
  }

  dislikecount=()=>{
    this.setState({dislike:this.state.dislike+1})
  }

  changeScreen = (screen)  => {
    this.props.navigation.navigate(screen);
  }

  dislikePressed(){
    var dislike=db.ref('Rating/'+'/');
    dislike.update({
      'dislikePressed':1
    }) 
  }

  likePressed(){
    var like=db.ref('Rating/'+'/');
    like.update({
      'likePressed':1
    })
  }

  render() {
    return(
      <View style = {styles.viewStyle}>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('JokeScreen')}}>
          <Text style = {styles.textStyle}>Jokes</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('Horoscope')}}>
          <Text style = {styles.textStyle}>Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('Weather')}}>
          <Text style = {styles.textStyle}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('News')}}>
          <Text style = {styles.textStyle}>Top News</Text>
        </TouchableOpacity>
        <Text style = {styles.rate}>Rate Us</Text>
           <Text style={{marginLeft: -125,marginBottom: 10,}}> {this.state.like} </Text>
            <Text style={{marginLeft: 115,marginBottom: 10, marginTop: -30}}> {this.state.dislike} </Text>

          <TouchableOpacity onPress={this.likecount}>
          <Image
            style={{ width: 50, height: 50, marginLeft: -90}}
            source={require('../assets/thumbsup.png')}
            />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={this.dislikecount}>   
          <Image
            style={{ width: 50, height: 50, marginTop: -35, marginLeft: 100}}
            source={require('../assets/thumbsdown.png')}
            />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center"
  },
  buttonStyle: {
    borderWidth:2,
    backgroundColor: '#59afff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    borderRadius: 60,
    marginBottom: 40
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'times'
    },

    rate: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'times'
    },

});