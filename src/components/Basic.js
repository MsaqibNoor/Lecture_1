import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

import Flist from  './Flist';
import Button from './Button';
class Basic extends Component {
  render() {
      return (
        <ScrollView>

            <Flist />
<Button/>

        </ScrollView>
    );
  }
}


export default  Basic ;
