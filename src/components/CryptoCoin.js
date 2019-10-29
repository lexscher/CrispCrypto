import React, { Component } from "react";
import { StyleSheet, Text} from "react-native";

const CryptoCoin = props => {
  return <Text style={styles.text}>{props.coin.name}</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#20C20E",
    marginBottom: 5
  }
});

export default CryptoCoin;