import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/component/Login/login';
import Main from './src/component/Main/main';
import Store from './src/_commun/src/stores/Store';
import {Provider} from 'react-redux'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            route: 'main'
        }

        this.changeRoute = this.changeRoute.bind(this)
    }

    changeRoute(route){
        this.setRoute({
            route
        })
    }

  render() {
      let view = null
      const {route} = this.state
      switch(route){
          case 'main':
             view = <Main user={this.props.user} call={this.props.call} />
              break;
          default:
              view = <Login success={this.changeUser} changeRoute={this.changeRoute}/>
      }

    return (
        <Provider store={Store}>
          <View style={styles.container}>
              <Text>Hello!</Text>
              <Login success={this.changeUser} changeRoute={this.changeRoute}/>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
