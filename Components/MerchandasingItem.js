import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity, Linking } from 'react-native'

export default class MerchandasingItem extends React.Component {
  render() {
    const merch = this.props.merch
    return (
        <TouchableOpacity 
            style={styles.main_container}
            onPress={() => Linking.openURL(merch.url)}>
            <Text style={styles.title_text}>{merch.title} </Text>
            <Image 
                style={styles.merchImage}
                source={{uri: merch.imageUrl}}
            />
            <Text style={styles.textDescription}> {merch.description}</Text>
            <Text style={styles.textPrice}> {merch.price}</Text> 
        </TouchableOpacity>
    
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1/3,
    marginTop:20, 
    alignItems:'center',
    backgroundColor:'black',
    justifyContent: "space-between",
     
  },

  title_text: { 
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:10, 
    fontSize:18,
    fontWeight:'bold',
    color:'white', 
       
  },

  merchImage:{
    height:200, 
    width:200,
  },

  textDescription:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  },

  textPrice:{
    color:'red',
    fontWeight:'bold',
    marginBottom:10,
  }

});

