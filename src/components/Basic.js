import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

import Flist from  './Flist';
import Button from './Button';
import Text from './Text';
import Box from './Box';
import Props from './Props';
import Touches from './Touches';
import Style from './Style';
import Input from './Input';
import State from './State';
import Input from './Input';
import Networking from './Networking';

class Basic extends Component {
  render() {
      return (
        <ScrollView>

          <Button/>

            <Flist />

            <Text/>

          <Box/>
          
          <Props  />

          <Touches/>


          <Style/>

          
          <Input/>

          <Networking/>

<Button/>
<State/>
        </ScrollView>
    );
  }
}


export default  Basic ;
