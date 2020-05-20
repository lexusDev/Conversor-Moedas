import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Picker
} from 'react-native';

import Conversor from './src/Conversor'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCoin_A: 'USD',
      selectedValue_B: 'BRL'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selecao}>
          <Text style={styles.titulo}>Conversor de moedas</Text>
          <Picker
            selectedValue={this.state.selectedCoin_A}
            style={styles.areaInput}
            onValueChange={(itemValue) => this.setState({ selectedCoin_A: itemValue })}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="BRL" value="BRL" />
          </Picker>
          <Picker
            selectedValue={this.state.selectedCoin_B}
            style={styles.areaInput}
            onValueChange={(itemValue) => this.setState({ selectedCoin_B: itemValue })}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="BRL" value="BRL" />
          </Picker>
        </View>
        <Conversor moedaA={this.state.selectedCoin_A} moedaB={this.state.selectedCoin_B} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  selecao:{
    flex: 1,
    top: 100
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  },

  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 8
  }
});

