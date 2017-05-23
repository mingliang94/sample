import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Button,
  Alert,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import Button1 from '../components/Button1';
import Textbox1 from '../components/Textbox1';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {shine:true}
    setInterval(()=> {this.setState({shine:!this.state.shine})}, 50);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <Text style={styles.welcome}>
            Poffer
        </Text>

          <View style={styles.imageview1}>
            <Image
              style={styles.image1}
              source={require('../images/handshake.jpg')}
            />
          </View>

          <Text style={styles.instructions}>
            We want to waste your time
        </Text>
          <Text style={styles.instructions}>
            Choose your fortune,{'\n'}
            Click on one of the choices
        </Text>

          <Button1 text1="Open first choice" text2="you are rich!" />
          <Button1 text1="Open second choice" text2="Fuck you!" />

          <Textbox1 text1='Enter your comments here' />
          
          <Button
            onPress={() => navigate('Donate')}
            title="Donate"
            color={this.state.shine?'pink':'red'}
          />
        </KeyboardAwareScrollView>
      </View>


    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },

  imageview1: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  image1: {
    width: 200,
    height: 100,
  },

  welcome: {
    fontSize: 40,
    textShadowColor: '#0000FF',
    textShadowOffset: { width: 1, height: 1 },
    textAlign: 'center',
    lineHeight: 200,
    color: '#ccccff',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});