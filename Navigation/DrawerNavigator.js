import React from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';
import { createDrawerNavigator, contentOptions, drawerIcon, DrawerNavigatorItems} from 'react-navigation-drawer';
import { Container, Content, Icon, Header, Body } from 'native-base'
import { StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation-drawer'
import Ionicons from 'react-native-ionicons'


import News from '../Screens/News';
import Concerts from '../Screens/Concerts';
//import Search from '../Components/Search';
import Home from '../Components/Home';
import Music from '../Components/Music';
import Videos from '../Components/Videos';
import Merchandising from '../Components/Merchandising';
import Newsletter from '../Components/Newsletter';
import About from '../Components/About';


const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      
        <Image
          style={styles.drawerImage}
          source={require('/home/thierryguette/MasterCCI/FuzzAndDrums/Images/image2.png')} />
      
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);



const DrawerNavigator = createDrawerNavigator(

  {
    One: {
      screen:Home,
      navigationOptions: {
        title: 'Home',
       

      }},
    Two: {    
      screen:News,
      navigationOptions: {
      title: 'News'
    }},
    Three: {    
      screen:Concerts,
      navigationOptions: {
      title: 'Concerts'
    }},
    Four: {    
      screen:Music,
      navigationOptions: {
      title: 'Music'
    }},
    Five: {    
      screen:Videos,
      navigationOptions: {
      title: 'Videos'
    }},
    Six: {    
      screen:Merchandising,
      navigationOptions: {
      title: 'Merchandising'
    }},
    Seven: {    
      screen:Newsletter,
      navigationOptions: {
      title: 'Newsletter'
    }},
    Eight: {    
      screen:About,
      navigationOptions: {
      title: 'About'
    }},
  },

  {
    contentOptions: {
      inactiveTintColor: 'black',
      activeTintColor: 'red',
      //activeBackgroundColor: 'grey',

      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      }
    },

    drawerBackgroundColor: "white",

    initialRouteName: 'One',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

  }, 

  // {
  //   initialRouteName: 'Home',
  //   drawerPosition: 'left',
  //   contentComponent: CustomDrawerContentComponent,
  //   drawerOpenRoute: 'DrawerOpen',
  //   drawerCloseRoute: 'DrawerClose',
  //   drawerToggleRoute: 'DrawerToggle'
  // }

);


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
     marginTop:25,
     height: 200,
     //width:280,
     backgroundColor: 'white'
  },
  drawerImage: {
    
    // marginTop:35,
    //marginLeft:50,
    height: 200,
    width: 280,
    
    
    //borderRadius: 75
  }

})


export default DrawerNavigator;