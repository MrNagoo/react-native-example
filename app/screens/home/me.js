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

export default class Me extends Component {
  static navigationOptions = {
    title: "ME"
  };

  render() {
    return (
      <View>
        <Text>Me, I'm so Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
