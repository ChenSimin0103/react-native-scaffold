import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('----constructor----');
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log('----render----');
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text
          onPress={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >点击此处</Text>
        <Text>被单击了{this.state.count}次</Text>
      </View>
    );
  }
}

