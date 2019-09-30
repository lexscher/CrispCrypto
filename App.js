import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends Component {
  state = { cryptoCurrencyList: [], cryptoCurrencyListLoaded: false };

  getCryptoCurrencies = async () => {
    try {
      let response = await fetch('https://api.coingecko.com/api/v3/coins/list');
      let responseJson = await response.json();
      this.setState({
        cryptoCurrencyList: [...responseJson],
        cryptoCurrencyListLoaded: true
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.getCryptoCurrencies();
  }

  render() {
    const cryptoCoins = this.state.cryptoCurrencyList.map((coin, index) => (
      <Text key={index} style={styles.text}>
        {coin.name}
      </Text>
    ));
    return (
      <View style={styles.container}>
        {this.state.cryptoCurrencyListLoaded ? (
          <ScrollView>{cryptoCoins}</ScrollView>
        ) : (
          <Text style={styles.text}>Data Not Loaded.</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050505'
  },
  text: {
    textAlign: 'center',
    color: '#20C20E',
    marginBottom: 5
  }
});
