import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  input: {
    width: 300,
    height: 35,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin: 'auto',
    paddingLeft: 18,
  },
});

export default class Search extends Component<{onChange: Function}, { text: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View>
        <TextInput
          style={style.input}
          placeholder="Type here to search!"
          onChangeText={(text) => { this.setState({ text });this.props.onChange(text); }}
          value={this.state.text}
        />
      </View>
    );
  }
}

