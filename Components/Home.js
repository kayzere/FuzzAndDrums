import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import FadeIn from '../Components/FadeIn';
import * as Animatable from 'react-native-animatable';


export default class Home extends React.Component {

  render() {
 
    return (

      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../Images/speakerBackground2misombre.png')} style={{  flex:1, resizeMode:'stretch'}} > 
        <FadeIn>
          <ScrollView showsVerticalScrollIndicator={false}>
           
            
                                                      {/*NEWS ITEM*/}

              <TouchableOpacity   onPress={() => this.props.navigation.navigate("News")} >
                <Animatable.View animation="flipInX" delay={0} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/image2.png')} style={styles.imageBackgrounudStyle} >
                    <View style={{flexDirection:'row'}}>
                      <Animatable.Text animation="shake" duration={15000} iterationCount='infinite' style={styles.containerTextu}>News</Animatable.Text>
                    </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*CONCERTS ITEM*/} 

              <TouchableOpacity onPress={() => this.props.navigation.navigate("Concert")}>
                <Animatable.View animation="flipInX" delay={500} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/cover.jpg')} style={styles.imageBackgrounudStyle} >
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>Concerts</Text>
                      </View> 
                  </ImageBackground>
                </Animatable.View> 
              </TouchableOpacity>

                                                      {/*MUSIC ITEM*/} 

              <TouchableOpacity onPress={() => this.props.navigation.navigate("Music")}>                                                               
                <Animatable.View animation="flipInX" delay={1000} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/pochettealbumfuzzanddrums.jpg')} style={styles.imageBackgrounudStyle} >
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>Music</Text>
                      </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*VIDEOS ITEM*/} 

              <TouchableOpacity onPress={() => this.props.navigation.navigate("VideoClips")}>
              <Animatable.View animation="flipInX" delay={1500} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/boatpic.jpg')} style={styles.imageBackgrounudStyle} >
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>Videos</Text>
                      </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*MERCH ITEM*/} 

              <TouchableOpacity onPress={() => this.props.navigation.navigate("Merch")}>                                                   
                <Animatable.View animation="flipInX" delay={2000} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/mediators.jpg')} style={styles.imageBackgrounudStyle} >
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>Merch</Text>
                      </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*ABOUT US ITEM*/}

              <TouchableOpacity onPress={() => this.props.navigation.navigate("About")}>                                        
                <Animatable.View animation="flipInX" delay={2500} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/image1.png')} style={styles.imageBackgrounudStyle}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>About Us</Text>
                      </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

        
          </ScrollView>
          </FadeIn>
        </ImageBackground>
      </SafeAreaView>  
         

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:'#1B1B1B',

  },

  containerSafe: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    marginTop:10,
    width:'100%',
    height:150,
    flexDirection:'row',
    borderTopWidth: 0,
    elevation: 20, 

  },

  containerTextu: {
    fontVariant:'small-caps',
    fontSize:60,
    fontFamily:'Roboto',
    color:'#8b0000',
    fontWeight: 'bold', 
    fontVariant:[ 'small-caps' ],
    opacity:1,
    marginLeft:5,
    textShadowColor: '#8b0000',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 13,

  },

  imageBackgrounudStyle: {
    width: '100%', 
    height: '100%', 
    opacity:0.9,

  },

});


// <Image style={{flex:1, margin:10, height:140, justifyContent:'flex-end', alignItems:'center'}} source={require('../Images/NewsT.png')}/>

      