import React from 'react';
import { View, StyleSheet, Image,Text, TouchableOpacity, Linking, SafeAreaView, ScrollView } from 'react-native';

export default class About extends React.Component {

  render() {
    return (
      
        <SafeAreaView style={styles.safeView}> 
          <ScrollView style={styles.scrollView}> 
            <View style={styles.viewStyle}>
              <Image
                style={styles.aboutImage}
                source={require('../Images/clip.jpg')} />
              <Text style={styles.aboutTittleText}>About us</Text>
              <Text style={styles.aboutText}>The Fuzz & Drums, c’est un duo rock-garage marseillais, des influences early 70's, 
                  un son radical et brut, porté par la voix et la guitare de Fuzz et la frappe et la voix de Drums. </Text>
              <Text style={styles.aboutTittleText}>Follow us</Text>
            
              <View style = {styles.aboutTouchableOpacity}>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.instagram.com/thefuzzanddrums/')}}>
                  <Image
                    style={styles.aboutIcon}
                    source={require('../Images/icon/instagram.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.facebook.com/the.fuzz.and.drums/')}}>
                  <Image
                    style={styles.aboutIcon}
                    source={require('../Images/icon/facebook.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://twitter.com/TheFuzzandDrums')}}>
                  <Image
                    style={styles.aboutIcon}
                    source={require('../Images/icon/twitter.png')}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.aboutTittleText}>Contact us</Text>
              <View style = {styles.aboutTouchableOpacity}>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://m.me/the.fuzz.and.drums?fbclid=IwAR1vpX6vKoBtetUaNhlCsFISLo5VGjigLt5e23lMCTc9UE6_CduBkMDJjg8')}}>
                  <Image
                    style={styles.aboutIcon}
                    source={require('../Images/icon/messenger.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>  
      
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },

  scrollView: {
    backgroundColor:'#1B1B1B',
  },

  viewStyle: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center'
  },

  aboutImage: {
    flex: 1,
    marginBottom: 10,
    height: 200,
    width: 360,
    marginLeft:20
  },

  aboutTittleText: {
    fontSize: 25,
    marginBottom:10,
    fontWeight: 'bold',
    color: 'white',
    //alignContent: 'center'
  },

  aboutText: {
    marginBottom: 10,
    fontSize: 20,
    color: 'white',
    textAlign:"justify",

  },

  aboutIcon: {
    marginTop: 10,
    marginLeft: 15,
    height: 50,
    width: 50,
  },

  aboutTouchableOpacity: {
    flexDirection:'row',
    justifyContent:'center'
  }
});