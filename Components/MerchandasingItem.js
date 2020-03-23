import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity, Linking } from 'react-native'

export default class MerchandasingItem extends React.Component {
  render() {
    const merch = this.props.merch
    return (
      <View style={styles.main_container}>
        <TouchableOpacity 
          style={styles.touchableOpacity}
          onPress={() => Linking.openURL(merch.url)}>
            <View>
            <Image 
                style={styles.merchImage}
                source={{uri: merch.imageUrl}}
            />
            </View>
            <View style={styles.textView}>
              <Text style={styles.title_text}>{merch.title} </Text>
              <Text style={styles.textDescription}> {merch.description}</Text>
              <Text style={styles.textPrice}> {merch.price}</Text> 
            </View>
        </TouchableOpacity>
      </View>
    
    )
  }
}

const styles = StyleSheet.create({
  main_container: {

    
  },

  touchableOpacity: {
    flex:1,
    flexDirection:'row',
    marginTop:20, 
    alignItems:'center',
    backgroundColor:'black',
     
  },

  merchImage:{
    height:100, 
    width:100,
  },

  textView:{
    marginLeft:10,
    marginRight:10,
    flexDirection:'column',
    alignItems: 'baseline'

  },

  title_text: { 
    marginTop:10,
    marginBottom:10, 
    fontSize:18,
    fontWeight:'bold',
    color:'white', 
       
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

