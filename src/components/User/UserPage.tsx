import React, {Component} from "react";
// @ts-ignore
import Ionicons from 'react-native-vector-icons/AntDesign';
import {Text, View, TextInput, StyleSheet, DeviceEventEmitter, Image, Dimensions} from 'react-native';
import store from "../../store";


const Styles = StyleSheet.create({
  userAvatar: {
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#484848',
  },
  userNick: {
    marginTop: 40,
    marginRight: 10,
  },
  userMore: {
    marginTop: 40,
    marginLeft: 200,
  },
});
export default class UserPage extends Component<{}, {}> {
  static navigationOptions = {
    title: 'User',
  };
  render() {
    return (
      <View style={{ marginTop: 60, alignItems: 'center' }}>
        <View style={{ width: Dimensions.get('window').width - 20, height: 100, borderRadius: 5, borderColor: '#808080', borderWidth: 1, alignItems: 'flex-start', flexDirection: 'row' }}>
          <Image source={{uri: `${store.getState().reduxStore.userInfo.profile.avatarUrl}`}} style={Styles.userAvatar}/>
          <Text style={Styles.userNick}>{store.getState().reduxStore.userInfo.profile.nickname}</Text>
          <Ionicons name="right" size={20} style={Styles.userMore}/>
        </View>
      </View>
    );
  }
}
