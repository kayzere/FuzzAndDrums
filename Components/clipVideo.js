import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { globalStyles } from './global_stylesheet';
import { Video } from 'expo-av';

export default class ClipVideo extends React.Component{

    state = {
        paused: false,
        isLooping : false,
    };

    render(){
        const {clip, ClipDisplay} = this.props
        console.log(clip)
        return(
            <View style={globalStyles.container}>
            <TouchableOpacity style={{flexDirection:"row-reverse"}} onPress={()=> ClipDisplay(clip)} >
            <View style={globalStyles.videotext}> 
                <Text style={globalStyles.videotitle}> {clip.title} </Text>
                <Text style={globalStyles.videoband}> {clip.body} </Text>
            </View>
                <Video 
                    source={{uri:clip.uri}}   
                    paused={this.state.paused}
                    resizeMode="cover"
                    shouldPlay="false"
                    style={globalStyles.videostyle}
                />
            </TouchableOpacity>
            </View>
        )
    }
}