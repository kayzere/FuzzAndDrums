import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// withNavigation allows components to dispatch navigation actions
import { withNavigation } from 'react-navigation';
// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from 'react-navigation-drawer';
import Hamburger from 'react-native-animated-hamburger';

class DrawerTrigger extends React.Component {

  render() {
    return (
      
      <TouchableOpacity 
        style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
      
      <Ionicons
         name={'md-menu'}
         
         size={30}
         color={'#8b0000'}
         
      />
   
        
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginRight: 27,
  }
});

export default withNavigation(DrawerTrigger);
