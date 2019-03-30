import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

class Style extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just green</Text>
        <Text style={[styles.bigBlue, styles.red]}>green, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then green</Text>
      </View>
    );
  }
}

export default Style;