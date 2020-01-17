import React, { Component } from 'react';
import {Button, StyleSheet, TextInput, View, Alert, Dimensions, DeviceEventEmitter} from "react-native";
import store from "../../store";
import { addUserInfo } from "../../store/actions";

const style = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin: 'auto',
    paddingLeft: 18,
  },
});

export default class Login extends Component<{}, {phoneNumber: string, password: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: '',
    };
    this.login = this.login.bind(this);
  }
  login() {
    fetch(`http://47.96.136.172:3000/login/cellphone?phone=${this.state.phoneNumber}&password=${this.state.password}`)
      .then(response => response.json())
      .then(result => {
        if (result.code === 200) {
          store.dispatch(addUserInfo(result));
          DeviceEventEmitter.emit('login', 'success');
        } else {
          console.warn(result.code);
          Alert.alert('login Error');
        }
      })
      .catch(e => {
        Alert.alert('login error');
        console.warn(e);
      });
  }
  render() {
    return (
      <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
        <View style={{ width: Dimensions.get('window').width, height: 40, alignItems:'center', marginTop: 500 }}>
          <TextInput
            style={style.input}
            placeholder="Enter your phone number"
            onChangeText={(text) => { this.setState({ phoneNumber: text }) }}
            value={this.state.phoneNumber}
          />
        </View>
        <View style={{ width: Dimensions.get('window').width, height: 40, alignItems:'center', marginTop: 20 }}>
          <TextInput
            style={style.input}
            placeholder="Enter your password"
            onChangeText={(text) => { this.setState({ password: text }) }}
            value={this.state.password}
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 50, borderColor: '#484848', width: 300, height: 40, borderWidth: 1, marginLeft: 60, borderRadius: 8 }}>
          <Button title="Login" onPress={this.login} color="#FFCC42" />
        </View>
      </View>
    )
  }
}
