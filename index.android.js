/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import Header from './header'

export default class Weather extends Component {

    _handleName(event) {
        var name = event.nativeEvent.text;
        var appid = '560588cff47ae8a8df0af3e66a968695';
    }

  render() {
    return (
        <View>
            < Header myState = {'Weather'}/>
            <View style={styles.container}>

                    <Text style={{fontSize: 18, color: '#4db6ac'}}>
                    My Location
                    </Text>
                <TextInput style={{width: 100 }} onSubmitEditing={(event) => this._handleName(event)}/>
            </View>
        </View>
    );
  }
}

styles = require('./Styles');
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/

AppRegistry.registerComponent('Weather', () => Weather);
