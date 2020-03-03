import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// withNavigation allows components to dispatch navigation actions
import { withNavigation } from 'react-navigation';

// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from 'react-navigation-drawer';

import {Hamburger} from 'react-native-hamburger'



class DrawerTrigger extends React.Component {



  render() {
    return (
      
      <TouchableOpacity style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
      <Ionicons
          
        name={'md-more'}
        size={40}
        color={'red'}
      />
        
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    margin: -7,
    marginLeft: 27.5,
    borderRadius: 30,
    width: 60,
    height: 60,
  }
});

export default withNavigation(DrawerTrigger);

