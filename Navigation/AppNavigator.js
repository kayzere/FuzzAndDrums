import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Container, Content, Header } from 'native-base'
import { DrawerItems } from 'react-navigation-drawer'

import Concerts from '../Components/Concerts';
import Home from '../Components/Home';
import Music from '../Components/Music';
import MusiqueDetail from '../Components/MusiqueDetail'
import Videos from '../Components/Videos';
import Merchandising from '../Components/Merchandising';
import Newsletter from '../Components/Newsletter';
import About from '../Components/About';
import DrawerTrigger from '../Components/DrawerTrigger';

// DRAWER CONFIGURATION

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Image
          style={styles.drawerImage}
          source={require('../Images/fuzzanddrumsimageulule.png')}/>
      </Header>
    <Content style={styles.content}>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  drawerHeader: {
      height: 180,
      backgroundColor: 'black'
  },
  
  drawerImage: {
    resizeMode: 'center',
    marginTop: -78,
    width: 300,
  },

  content: {
    marginTop: -20,
    backgroundColor: 'black'
  }
})

//////////////////////////////// LES STACKNAVIGATORS

const HomeStack = createStackNavigator({
  Music: {
    screen: Home,
    navigationOptions: {
        title: 'Home',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
  })


const ConcertsStack = createStackNavigator({
  Music: {
    screen: Concerts,
    navigationOptions: {
        title: 'Concerts',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
  })

const MusicStack = createStackNavigator({
  Music: {
    screen: Music,
    navigationOptions: {
        title: 'Musique',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
  MusiqueDetail: {
    screen: MusiqueDetail,
        navigationOptions: {
        title: '',
        headerRight: () => <DrawerTrigger/>,
        headerTintColor: 'red',
        headerTitleStyle: {
          color: 'white'
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }},
})

const VideosStack = createStackNavigator({
  Music: {
    screen: Videos,
    navigationOptions: {
        title: 'Videos',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
  })

const MerchandisingStack = createStackNavigator({
  Music: {
    screen: Merchandising,
    navigationOptions: {
        title: 'Merchandising',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
  })

const NewsletterStack = createStackNavigator({
  Music: {
    screen: Newsletter,
    navigationOptions: {
        title: 'Newsletter',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white'
       },
       headerStyle: {
        backgroundColor: 'black',
       },
       headerTintColor: {
          color: 'red'
       }
    }},
  })

const AboutStack = createStackNavigator({
  Music: {
    screen: About,
    navigationOptions: {
        title: 'About',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white'
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }},
  })

//////////////////////////////// DRAWERNAGIVATOR

const DrawerNavigator = createDrawerNavigator(

  {
    One: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Home',
        drawerIcon:(
          <Image source={require('../Images/icon/hand.png')}
          style={ {height:24, width:24}}/>
        )
      }},
    Two: {    
      screen: ConcertsStack,
      navigationOptions: {
      title: 'Concerts',
      drawerIcon:(
        <Image source={require('../Images/icon/concert.png')}
        style={ {height:30, width:30}}/>
      )
    }},
    Three: {    
      screen: MusicStack,
      navigationOptions: {
      title: 'Music',
      drawerIcon:(
        <Image source={require('../Images/icon/audio.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Four: {    
      screen: VideosStack,
      navigationOptions: {
      title: 'Videos',
      drawerIcon:(
        <Image source={require('../Images/icon/video.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Five: {    
      screen: MerchandisingStack,
      navigationOptions: {
      title: 'Merchandising',
      drawerIcon:(
        <Image source={require('../Images/icon/shirt.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Six: {    
      screen: NewsletterStack,
      navigationOptions: {
      title: 'Newsletter',
      drawerIcon:(
        <Image source={require('../Images/icon/newsletter.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Seven: {    
      screen: AboutStack,
      navigationOptions: {
      title: 'About',
      drawerIcon:(
        <Image source={require('../Images/icon/About.png')}
        style={ {height:24, width:24}}/>
      )
    }}
  },

  {
    contentOptions: {
      inactiveTintColor: 'white',
      activeTintColor: 'red',
      iconContainerStyle: {
        opacity: 1
      }
    },

    drawerPosition: "right",
    drawerBackgroundColor: "black",
    initialRouteName: 'One',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

  }
);

const App = createSwitchNavigator({
  Main: DrawerNavigator
});

export default createAppContainer(App);
