import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import MusiqueItem from './MusiqueItem'
import { getMusiqueFromApiWithSearchedText } from '../API/FuzzApi'
import Header from '../Components/Header.js'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = {
          musiques: []
        }
      }
      
    _loadMusiques() {
      if (this.searchedText.length > 0) {q
        getMusiqueFromApiWithSearchedText(this.searchedText).then(data => {
            this.setState({ musiques: data.results })
        })
      }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
        this._loadMusiques()
    }

    render() {
        console.log("RENDER");
        return (
          
          <React.Fragment>
            <Header />
          
          
          <View style={styles.main_container}>
          
            <TextInput
                style={styles.textinput}
                placeholder='Titre de la musique'
                onChangeText={(text) => this._searchTextInputChanged(text)}
            />
            <Button
                style={{ height: 50}}
                title='Rechercher'
                onPress={() => this._loadMusiques()}
            />
            <FlatList
              data={this.state.musiques}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <MusiqueItem musiques={item}/>}
            />
          </View>
          </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      marginTop: 30,
      marginLeft: 5,
      marginRight: 5,

    },
    textinput: {
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      marginBottom: 20
    }
  })
  
  export default Search