import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Modal,
  ScrollView
} from "react-native";

export default class More extends Component {
  static navigationOptions = {
    title: "More"
  };

  render() {
    return (
      <View>
        <Text>Learn More</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
