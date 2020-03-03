import React from 'react';
import { View, StyleSheet, Image } from 'react-native';


import ScreenName from '../Components/ScreenName.js'
import Header from '../Components/Header.js'

export default class News extends React.Component {

  static navigationOptions = {

    drawerIcon:(
      <Image source={require('/home/thierryguette/MasterCCI/FuzzAndDrums/Images/icon/newspaper.png')}
      style={ {height:24, width:24}}/>
    )

  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <ScreenName name={'News'} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});