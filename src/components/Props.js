import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';


 class Props extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Mohammad' />
        <Greeting name='Salman' />
        <Greeting name='Khan' />
      </View>
    );
  }
}

export default Props;