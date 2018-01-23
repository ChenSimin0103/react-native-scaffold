import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={styles.home} />;
  }
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#2A2B33',
    width: width,
    height: height
  }
});

export function mapStateToProps({ users }, props) {}
