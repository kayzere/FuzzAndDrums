import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from './global_stylesheet';
import ProgressBar from "react-native-progress/Bar"
import { Video } from 'expo-av';
import Icon from "react-native-vector-icons/FontAwesome";

function secondsToTime(time){
    return ~~(time/60)+ ":" 
            + (time % 60 < 10 ? "0" : "") 
            + time % 60;
}

export default class Clip extends Component {

    constructor(props) {
        super(props)
        this.currentclip = this.props.navigation.state.params.Clipid
    }

    state = {
        paused: false,
        progress: 0,
        duration: 0,

    };
    position ={
        start: null,
        end: null
    }
    render(){
        console.log(this.currentclip)

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.videotitle}> {this.currentclip.title} </Text>
            <Video 
                source={{uri:this.currentclip.uri}}   
                paused= {this.state.paused}
                resizeMode="cover"
                shouldPlay="false"
                onLoad={this.handleLoad}
                onProgress={this.handleProgress}
                onEnd={this.handleEnd}
                style={globalStyles.myvideoplayer}
                ref={ref => this.player = ref}
            />
            <View style={globalStyles.controls}> 
                <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
                    <Icon name={!this.state.paused ? "pause" : "play"}
                    size={30} color="#FFF" />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
    }
}
