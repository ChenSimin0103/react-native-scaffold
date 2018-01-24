import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated
} from 'react-native';

const { width, height } = Dimensions.get('window');
export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleName: 'Home',
      progress: new Animated.Value(0)
    };
  }

  _clickMenu() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 500
    }).start();
  }

  render() {
    return (
      <View style={styles.tilte}>
        <Image
          style={styles.category}
          source={require('./../../../assets/img/Category.png')}
        />
        <LottieView
          onPress={this._clickMenu}
          source={require('./../../../assets/lottie/menu.json')}
          progress={this.state.progress}
        />
        <Text style={styles.text}>{this.state.titleName}</Text>
        <Image
          style={styles.search}
          source={require('./../../../assets/img/search.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tilte: {
    width: width,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 20,
    textAlignVertical: 'center',
    height: 25,
    marginTop: 8,
    color: '#ffffff'
  },
  category: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginTop: 10
  },
  search: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginRight: 10
  }
});
