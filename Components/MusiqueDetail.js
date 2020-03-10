import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getMusiqueFromApiWithId } from '../API/FuzzApi'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'

import SoundCloudWaveform from 'react-native-soundcloud-waveform'

export default class MusiqueDetail extends React.Component {
  
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false
  }
  
  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      })
 
      this.loadAudio()
    } catch (e) {
      console.log(e)
    }
  }

  async loadAudio() {
    const {currentIndex, isPlaying, volume} = this.state
   
    try {
      const playbackInstance = new Audio.Sound()
      const source = {uri: 'https://kayzere.me/Musiques/NotMuchToSay.mp3'}
   
      const status = {
        shouldPlay: isPlaying,
        volume
      }
   
      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)     
      await playbackInstance.loadAsync(source, status, false)
      this.setState({playbackInstance})
      } catch (e) {
        console.log(e)
      }
  }
   
  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    })
  }

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
 
    this.setState({
      isPlaying: !isPlaying
    })
  }
 
    handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      //currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }
 
  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      //currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }


    setTime = (time) => {
      playbackInstance.durationMillis();
    }

  renderFileInfo() {
    const { playbackInstance, currentIndex } = this.state
    return playbackInstance ? (
      <View style={styles.trackInfo}>
        <Text style={[styles.trackInfoText, styles.largeText]}>
          Titre
        </Text>
        <Text style={[styles.trackInfoText, styles.smallText]}>
          Artiste
        </Text>
        <Text style={[styles.trackInfoText, styles.smallText]}>
          Album
        </Text>
      </View>
    ) : null
  }

  render() {

    return (
      <View style={styles.container}>
        <Image
          style={styles.albumCover}
          source={require('../Images/cover.jpg')}
        />

        <SoundCloudWaveform
                waveformUrl={'https://kayzere.me/Musiques/NotMuchToSay.mp3'}
                percentPlayable={130}
                percentPlayed={10}
                setTime={1}
              />

        <View style={styles.controls}>
          <TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
            <Ionicons name='ios-skip-backward' size={48} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
            {this.state.isPlaying ? (
              <Ionicons name='ios-pause' size={48} color='red' />
            ) : (
              <Ionicons name='ios-play-circle' size={48} color='white' />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
            <Ionicons name='ios-skip-forward' size={48} color='white' />
          </TouchableOpacity>
        </View>
        {this.renderFileInfo()}
      </View>
    )
  }

}

// update the Stylesheet object 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  albumCover: {
    width: 400,
    height: 400
  },
  trackInfo: {
    padding: 40,
    backgroundColor: 'black'
  },
  trackInfoText: {
    textAlign: 'center',
    flexWrap: 'wrap',
    color: 'red'
  },
  largeText: {
    fontSize: 22
  },
  smallText: {
    fontSize: 16
  },
  control: {
    margin: 20
  },
  controls: {
    flexDirection: 'row'
  }
})
