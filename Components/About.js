import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import ScreenName from '../Components/ScreenName.js'
import Header from '../Components/Header.js'

export default class About extends React.Component {

  // Ne surtout pas modifier jusqu'à.... (à part pour changer la racine de l'image pour que l'app fonctionne)
  static navigationOptions = {

    drawerIcon:(
      <Image source={require('/home/thierryguette/MasterCCI/FuzzAndDrums/Images/icon/About.png')}
      style={ {height:24, width:24}}/>
    )

  };
  // ...là

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <ScreenName name={'About'} />
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