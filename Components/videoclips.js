import React, {Component, useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import madatay from './datay';
import ClipVideo from './clipVideo'

export default class VideoClips extends Component {
  /*_displayClip = (Clipid) => {
    console.log("Dooom" + Clipid)
    console.log(this.props.navigation.navigate("Clip_"))
  }*/
  _ClipDisplay = (Clipid) => {
    console.log("Booom" + Clipid)
    console.log("HELLOOO")
    this.props.navigation.navigate("Clip", {Clipid: Clipid})
  }

  render() {
    return (
       <FlatList
           data={madatay}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({ item }) => <ClipVideo clip={item} ClipDisplay={this._ClipDisplay} />}
        />
    )
  }
}
