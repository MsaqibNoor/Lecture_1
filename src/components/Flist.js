import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

class Flist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Ali'},
            {key: 'Atif'},
            {key: 'Sameer'},
            {key: 'Umair'},
            {key: 'Umer'},
            {key: 'Salman'},
            {key: 'Sami'},
            {key: 'Javeed'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


export default Flist;