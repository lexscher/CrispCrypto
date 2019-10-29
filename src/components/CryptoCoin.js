import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

const CryptoCoin = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.coin}>{props.coin.name}</Text>
      <Text>❤</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#050505"
  },
  coin: {
    flex: 4,
    textAlign: "center",
    color: "#20C20E",
    backgroundColor: "#1481BA",
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 5,
    marginTop: 5
  },
  heart: { flex: 1, color: "" }
});

export default CryptoCoin;
