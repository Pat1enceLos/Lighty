import React, {Component} from "react";
import {Alert, Dimensions, View} from "react-native";
import Search from "./topContent/search";
import ScrollBanners from "./ScrollBanners";

export default class HomeScreen extends Component<{}, { inputKey: string, result: {id: string, title: string, img: string}}> {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props: any) {
    super(props);
    this.state = {
      inputKey: '',
      result: {
        id: '',
        title: '',
        img: '',
      },
    };
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
  }
  onChange(val: string) {
    this.setState({ inputKey: val });
  }
  login() {
    fetch(`http://47.96.136.172:3000/search?keywords=${this.state.inputKey}`)
      .then(response => response.json())
      .then(result => {
        Alert.alert(result.result.songs[0].name);
        this.setState({
          result: {
            id: result.result.songs[0].id,
            title: result.result.songs[0].name,
            img: result.result.songs[0].artists[0].img1v1Url,
          }
        });
      })
      .catch(e => Alert.alert(e.toString()));
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 52, display: 'flex', width: Dimensions.get('window').width, height: 35, alignItems:'center', position: 'relative' }}>
          <Search onChange={this.onChange} />
          {/*<Button onPress={this.login} title="Search" />*/}
        </View>
        <View style={{ width: Dimensions.get('window').width, height: 140, alignItems: 'center', marginTop: 22 }}>
          <ScrollBanners />
        </View>
      </View>
    );
  }
}
