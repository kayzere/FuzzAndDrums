import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { getHomeFromApi } from '../API/FuzzApi' 
import News from '../Components/News'
import Music from './Music';
import Concerts from './Concerts';
import About from './About';
export default class Home extends React.Component {

  render() {

    return (

    <View style={styles.container}>

        <ScrollView>
          <View elevation={5} style={styles.containerSafe}>
    
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("News")}>

              <View style={{flexDirection:'row'}}>
                <Image style={styles.containerIcon} source={require('../Images/icon/newspaper.png')}/>
                <Text style={styles.containerTextu}>News</Text>
              </View>
                
              <News/>
        
            </TouchableOpacity> 
        </View>


          <View style={styles.containerSafe}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Music")}>
            
              <View style={{flexDirection:'row'}}>
                <Image style={styles.containerIcon} source={require('../Images/icon/audio.png')}/>
                <Text style={styles.containerTextu}>Music</Text>
              </View>

              <Music style={styles.containerVision}/>

            </TouchableOpacity>
          </View>
    

          <View style={styles.containerSafe}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Concerts")}>
              
              <View style={{flexDirection:'row'}}>
                <Image style={styles.containerIcon} source={require('../Images/icon/concert.png')}/>
                <Text style={styles.containerTextu}>Concerts</Text>
              </View>
              
              <Concerts style={styles.containerVision}/>

            </TouchableOpacity>
          </View>


          <View style={styles.containerSafe}>
            <TouchableOpacity style={{flex:1}}onPress={() => this.props.navigation.navigate("About")}>
              
              <View style={{flexDirection:'row'}}>
                <Image style={styles.containerIcon} source={require('../Images/icon/About.png')}/>
                <Text style={styles.containerTextu}></Text>
              </View>
              
              <About style={{margin:20}}/>

            </TouchableOpacity>
          </View>

        </ScrollView>
        
    </View>     

    );}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1B1B1B',
    margin:-1,
    
    
  },


  containerSafe: {
    flex:1,
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    margin:30,
    width:320,
    height:200,
    flexDirection:'row',
    borderStyle:'solid',
    borderColor:'black',
    borderWidth: 5,

  },

  containerTextu: {
    fontSize:40,
    color:'white',
    fontWeight: 'bold', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,   
    shadowRadius: 2,
    opacity:1,
    marginLeft:10,

  },


  containerVision: {
    backgroundColor:undefined,
    marginTop:-30,
    borderRadius: 50,  
    alignItems: 'baseline',  
    
  },

  textStyles:{
    fontWeight: 'bold', 
    fontSize:10, 
    color:'red',
    
  },

  imageBack:{
    flex:1,  
    width: undefined, 
    height:undefined, 
    justifyContent:'center',
    margin:-20,
    backgroundColor:'black',

  },

  containerIcon:{
    width: 50, 
    height:50, 
    justifyContent:'center',
    marginLeft:10,

  },

  imageBackScroll:{
    flex: 1,
    resizeMode:'stretch', 
    width: undefined, 
    height:undefined, 
    justifyContent:'flex-start',
    alignContent:'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin:30,
    width:320,
    height:200,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    opacity:0.5,

  }
});
