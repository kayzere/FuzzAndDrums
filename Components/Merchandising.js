import React from 'react';
import { View, StyleSheet,FlatList,Text } from 'react-native';
import merchDetail from './MerchandasingDetail'
import MerchandasingItem from './MerchandasingItem'


export default class Merchandising extends React.Component {

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
        <FlatList
              data={merchDetail}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <MerchandasingItem merch={item} />}
        />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#1B1B1B',

  },


});

