import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  img: {
    width: 380,
    height: 140,
    borderRadius: 8,
  },
  activeDot: {
    backgroundColor: '#FFCC42',
    marginBottom: -35,
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 2,
    marginRight: 2,
  },
  dotStyle: {
    marginBottom: -35,
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
});

export default class ScrollBanners extends Component<{}, { scrollBanners: any[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      scrollBanners: []
    };
    fetch('http://47.96.136.172:3000/banner?type=2')
      .then(respones => respones.json())
      .then(result => {
        this.setState({ scrollBanners: result.banners.map((i: any) => i.pic) });
      });
  }
  render() {
    return (
      <Swiper style={styles.wrapper} autoplay={true} loop={true} onIndexChanged={() => null} activeDotStyle={styles.activeDot} dotStyle={styles.dotStyle}>
        {
          this.state.scrollBanners.map((item, index) => {
            return (<View style={styles.slide1} key={index}>
              <Image source={{uri: `${item}`}} style={styles.img}/>
            </View>);
          })
        }
      </Swiper>
    );
  }
}
