import React, {Component} from "react";
import { Text, View, TextInput, StyleSheet, DeviceEventEmitter } from 'react-native';

export default class UserPage extends Component<{}, {}> {
  static navigationOptions = {
    title: 'User',
  };
  render() {
    return (
      <View>
        <Text>User</Text>
      </View>
    );
  }
}
