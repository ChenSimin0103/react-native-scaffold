import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class Recommend extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        require("./../../../assets/img/Chrysanthemum.jpg"),
        require("./../../../assets/img/Desert.jpg"),
        require("./../../../assets/img/Jellyfish.jpg"),
        require("./../../../assets/img/Koala.jpg"),
        require("./../../../assets/img/Hydrangeas.jpg")
      ]
    };
  }

  _renderItem = ({ item }) => {
    return <Image style={styles.recommendImg} source={item} />;
  };

  render() {
    return (
      <view style={styles.recommendContainer}>
        <View style={styles.recommendTop}>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
          />
        </View>
        <View style={styles.recommendMiddle}>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem()}
          />
        </View>
      </view>
    );
  }
}

const styles = StyleSheet.create({
  recommendContainer: {
    width: width,
    height: 200,
    // margin: 20,
    overflow: "scroll",
    flexDirection: "column"
  },
  recommendTop: {

  },
  recommendMiddle: {

  },
  recommendImg: {
    width: 500,
    height: 320,
    borderRadius: 8,
    borderWidth: 0,
    flexDirection: "row"
  }
});

export function mapStateToProps({ users }, props) {}
