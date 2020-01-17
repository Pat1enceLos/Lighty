/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  DeviceEventEmitter,
  Button,
  Alert,
  Image,
} from 'react-native';

import Router from './src/components/Router';
import Login from './src/components/Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }
  componentDidMount(){
    this.listener = DeviceEventEmitter.addListener('login',(value)=>{
      if (value === 'success') {
        this.setState({ isLogin: true });
      }
    });
  }

  componentWillUnmount(){
    this.listener.remove();
  }
  render() {
    return (this.state.isLogin ? <Router /> : <Login />);
  }
}

const styles = StyleSheet.create({
});

export default App;
