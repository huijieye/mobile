import React, { Component } from 'react';
import {TextInput,Button,View,Text } from 'react-native';
import {loginProcess} from '../../_commun/src/process/User'
import {connect} from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {text: null};
    }

    render() {

        return (
            <View>
                <Text>Identifiant</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button onPress={()=>loginProcess(this.props.dispatch,this.state.text)} title="Connecter"/>
            </View>

        );
    }
}

export default connect()(Login)