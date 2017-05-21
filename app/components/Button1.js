import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Alert
} from 'react-native';

export default class Button1 extends Component {

    constructor(props) {
        super(props);
        this.state = { selected: false, mess: props.text2 };
    }

    Button1() {
        alert(this.state.mess);
    }

    render() {
        return (
            <Button
                onPress={this.Button1.bind(this)}
                title={this.props.text1}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        )
    }
};
