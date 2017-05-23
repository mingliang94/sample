import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Button,
    Alert,
    View,
    TextInput
} from 'react-native';
import Button1 from '../components/Button1';
import Textbox1 from '../components/Textbox1';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    StackNavigator,
} from 'react-navigation';




export default class DonateScreen extends Component {

    constructor(props) {
        super(props),
            this.state = { text: "" }
    };

    static navigationOptions = {
        title: "Please give money"

    };
    render() {
        return (
            <View>

                <Text style={styles.welcome}>
                    Poffer
                </Text>

                <TextInput
                    style={{ height: 40, borderColor: 'green', borderWidth: 1, color: 'black' }}
                    placeholder="PLEASE DONATE"
                    placeholderTextColor='grey'
                    onChangeText={(text) => this.setState({text})}
                />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
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

});

AppRegistry.registerComponent('DonateScreen', () => DonateScreen);
