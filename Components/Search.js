import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import musiques from '../Helpers/musiquesData'
import MusiqueItem from './MusiqueItem'
import { getMusiqueFromApiWithSearchedText } from '../API/FuzzApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            musiques: [],
            searchedText: ""
        }
    }

    _loadMusiques() {
        if (this.state.searchedText.length > 0) {
            getMusiqueFromApiWithSearchedText(this.state.searchedText).then(data => this.setState({ musiques: data.results }))
        }
    }

    _seachTextInputChanged(text) {
        this.setState({ searchedText: text })
    }

    render() {

        console.log("RENDER")

        return (
            <View style={styles.main_container}>
                <TextInput onChangeText={(text) => this._seachTextInputChanged(text)} style={styles.textinput} placeholder="Musique"/>
                <Button title="Rechercher" onPress={() => this._loadMusiques()}/>
            <FlatList
                data={this.state.musiques}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <MusiqueItem musique={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height:50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search