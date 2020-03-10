import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image, Easing, ImageBackground, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { getHomeFromApi } from '../API/FuzzApi' 
import News from '../Components/News'
import Music from './Music';
import Concerts from './Concerts';
import About from './About';
import FadeIn from '../Components/FadeIn';



export default class Home extends React.Component {

  render() {

    return (

    <View style={styles.container}>
    

    <ImageBackground
      source={require('../Images/speakerBackground2misombre.png')} 
      style={{  flex:1, resizeMode:'stretch'}} >
      
     
        <ScrollView>

      
       
        
        <FadeIn>
          <View style={styles.containerSafe}>
       

          <ImageBackground
        source={require('../Images/image2.png')} 
        style={{width: '100%', height: '100%', opacity:0.8, borderRadius:40}} >
       
            <TouchableOpacity   onPress={() => this.props.navigation.navigate("News")}   >

              <View style={{flexDirection:'row'}}>
                <Image style={styles.containerIcon} source={require('../Images/icon/newspaper.png')}/>
                <Text style={styles.containerTextu}>News</Text>
              </View>
                
          

            </TouchableOpacity> 
            </ImageBackground>
          
          </View>
         
          

          
          <View style={styles.containerSafe}>
          <ImageBackground
        source={require('../Images/pochettealbumfuzzanddrums.jpg')} 
        style={{width: '100%', height: '100%', opacity:0.8}} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Music")}>
            
              <View style={{flexDirection:'row'}}>
                <Image style={styles.containerIcon} source={require('../Images/icon/audio.png')}/>
                <Text style={styles.containerTextu}>Music</Text>
              </View>


            </TouchableOpacity>
            </ImageBackground>
          </View>
          

          <View style={styles.containerSafe}>
          <ImageBackground
          source={require('../Images/cover.jpg')} 
          style={{width: '100%', height: '100%', opacity:0.8}} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Concerts")}>
              
              <View style={{flexDirection:'row'}}>
                <Image style={styles.containerIcon} source={require('../Images/icon/concert.png')}/>
                <Text style={styles.containerTextu}>Concerts</Text>
              </View>
              
        

            </TouchableOpacity>
            </ImageBackground>
          </View>


          <View style={styles.containerSafe}>
          <ImageBackground
          source={require('../Images/image1.png')} 
          style={{width: '100%', height: '100%', opacity:0.8}} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate("About")}>
              
              <View style={{flexDirection:'row'}}>
                <Image style={styles.containerIcon} source={require('../Images/icon/About.png')}/>
                <Text style={styles.containerTextu}>About Us</Text>
              </View>
              
  

            </TouchableOpacity>
            </ImageBackground>
          </View>
          </FadeIn>
        </ScrollView>
        

        </ImageBackground>

    </View>     

    );}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-around',
    backgroundColor:'#1B1B1B',
    
    
    
  },


  containerSafe: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft:5,
    marginRight:20,
    marginBottom:0,
    marginTop:20,
    width:undefined,
    height:150,
    flexDirection:'row',
    borderTopWidth: 0,
    elevation: 20, 
    //backgroundColor:'white',
    opacity:0.9,
    // borderRadius:40,
    // borderStyle:'solid',
    // borderColor:'black',
    // borderWidth: 5,

  },

  containerTextu: {
    fontSize:40,
    justifyContent:'flex-end',
    color:'#8b0000',
    fontWeight: 'bold', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,   
    shadowRadius: 2,
    opacity:1,
    //marginLeft:10,
    textShadowColor: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    elevation:30,
    marginLeft:-10,

  },


  containerVision: {
    backgroundColor:undefined,
    marginTop:-30,
    borderRadius: 50,  
    alignItems: 'baseline',  
    
  },

  containerIcon:{
    width: 150, 
    height:150, 
    marginLeft:40,
    tintColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    opacity:0.6,

    
    //justifyContent:'flex-start',
    
    //marginLeft:10,

  },
  

});


      