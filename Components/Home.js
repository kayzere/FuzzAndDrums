import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenName from '../Components/ScreenName.js'

export default class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <ScreenName name={'Home'} />
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