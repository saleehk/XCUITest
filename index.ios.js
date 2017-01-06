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
  TextInput,
  View
} from 'react-native';

export default class XCUITest extends Component {
  constructor(props) {
   super(props);
   this.state = { text: '' };
 }
  render() {
    return (
      <View style={styles.container}>
      <TextInput
      testID="test-id-textfield"
      style={{borderWidth: 1, height: 30, margin: 10}}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
    />
    <View testID="test-id-textfield-result" >
      <Text style={{fontSize: 20}}>You typed: {this.state.text}</Text>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

AppRegistry.registerComponent('XCUITest', () => XCUITest);
