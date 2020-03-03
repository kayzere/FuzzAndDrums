import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import ScreenName from '../Components/ScreenName.js'

export default class About extends React.Component {

  render() {
    return (
      <React.Fragment>
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