import React from 'react'
import { StyleSheet, View, ActivityIndicator, ScrollView, Text } from 'react-native'
import { getMusiqueFromApiWithId } from '../API/FuzzApi'

class MusiqueDetail extends React.Component {
  
  constructor(props) {
      super(props)
      this.state = {
        musiques: undefined,
        isLoading: true
      }
    }
  
  componentDidMount() {
      getMusiqueFromApiWithId(this.props.navigation.state.params.idMusique).then(data => {
        this.setState({
          musiques: data,
          isLoading: false
        })
      })
    }
  
  _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }
  
  _displayMusique() {
      const { musiques } = this.state
      if (musiques != undefined) {
        return (
          console.log(musiques),
          <ScrollView style={styles.scrollview_container}>
             <Text style={styles.title_text}>{musiques.title}</Text>
            <Text style={styles.description_text}>{musiques.overview}</Text>
            <Text style={styles.default_text}>Sorti le {}</Text>
            <Text style={styles.default_text}>Note : {musiques.vote_average} / 10</Text>
            <Text style={styles.default_text}>Nombre de votes : {}</Text>
            <Text style={styles.default_text}>Budget : {}</Text>
            <Text style={styles.default_text}>Genre(s) : {}</Text>
          </ScrollView>
        )
      }
    }
  
  render() {
      return (
        <React.Fragment>
          <View style={styles.main_container}>
            {this._displayLoading()}
            {this._displayMusique()}
          </View>
        </React.Fragment>
      )
    }
  }
  
  const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollview_container: {
      flex: 1
    },
    image: {
      height: 169,
      margin: 5
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 35,
      flex: 1,
      flexWrap: 'wrap',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
      color: '#000000',
      textAlign: 'center'
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666',
      margin: 5,
      marginBottom: 15
    },
    default_text: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
    }
  })
  
  export default MusiqueDetail