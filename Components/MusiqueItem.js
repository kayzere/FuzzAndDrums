// Components/MusiqueItem.js

import React from 'react'
import { getImageFromApi } from '../API/FuzzApi'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

//https://image.tmdb.org/t/p/w300/dHhyFNvAGnc1vtXWXWnnEfG1dLO.jpg

class MusiqueItem extends React.Component {
    render() {
        const { musique, displayDetailForMusique } = this.props
        return (
          <TouchableOpacity
              style={styles.main_container}
              onPress={() => displayDetailForMusique(musique.id)}>
            <Image
              style={styles.image}//getImageFromApi()
              source={{uri: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/59943425_2568485369847935_4484562055981957120_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=1XrIMF-6bGIAX-tb2dP&_nc_ht=scontent-cdg2-1.xx&oh=84c4bb0f892dfe41eda4bce96d9cdfdb&oe=5EFC0B13"}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{musique.title}</Text>
                <Text style={styles.vote_text}>{musique.vote_average}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{musique.overview}</Text>
              </View>
              <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le {musique.release_date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: 'row'
  },
  image: {
    width: 90,
    height: 90,
    margin: 5
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default MusiqueItem