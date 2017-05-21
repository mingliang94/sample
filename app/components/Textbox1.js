import React, { Component } from 'react';
import {
  AppRegistry,
  Style,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';


export default class Textbox1 extends Component {

  constructor(props) {
    super(props);
    this.state = { text1: "", status: false };
  }

  changetext(text) {
    this.setState({ text1: text });
    this.setState({ status: true });
  }

  textchanged() {
    if (this.state.status) {
      var banwords = ["fuck", "fk", "bob", "cock"]
      let textfuck = this.state.text1;
      for (var i = 0; i < banwords.length; i++) {
        if (textfuck.search(banwords[i]) != -1) {
          alert("You said " + banwords[i] + "\n" + "The messgae is reset!");
          this.setState({ text1: "" });
          this.setState({ status: false });
        }
      }
    }
  }

  render() {
    return (

      <TextInput
        style={{ height: 40, borderColor: 'green', borderWidth: 1, color: 'black' }}
        placeholder="Type your comment here"
        placeholderTextColor='grey'
        onChangeText={(text) => this.changetext(text)}
        onSubmitEditing={(text) => this.textchanged(text)}
        value={this.state.text1}
      />

    );
  }
}

