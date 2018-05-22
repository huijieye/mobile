import React, { Component } from 'react';
import {View,Text } from 'react-native';
import {connect} from 'react-redux';

class Main extends Component {
    render(){
        return (<View>
            <Text>Logged</Text>
        </View>)
    }
}

export default connect()(Main);