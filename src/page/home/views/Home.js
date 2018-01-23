import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.home}>
        <Image
          style={styles.category}
          source={require('./../../../assets/img/Category.svg')}
        />
        <Image
          style={styles.category}
          source={require('./../../../assets/img/search.svg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#2A2B33',
    width: width,
    height: height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  category: {
    width: 50,
    height: 50
  }
});

export function mapStateToProps({ users }, props) {}
