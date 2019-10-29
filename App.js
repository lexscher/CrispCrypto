import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import CryptoList from "./src/components/CryptoList";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CryptoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050505"
  }
});
