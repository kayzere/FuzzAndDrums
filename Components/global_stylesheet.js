import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
    container: {
        flex :1,
        padding: 20,
        backgroundColor: "black"
    },
    titleText:{
        fontSize: 18,
        color: 'white'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        color: 'white',
    },
    videocontainer: {
        flex:1,
        //flexDirection: 'column',
        backgroundColor : 'black',
        //alignItems: 'center',
    },

    videostyle: {
        flex: 2,
        borderRadius : 8,
        borderColor : 'white',
        borderWidth : 2,
        width: 275,
        height: 150,
        margin:15,
    },

    videotext: {
        flex: 1,
        flexDirection:"column",
        marginTop:30,
        marginLeft:-10,
    },

    videotitle: {
        color: "white",
        fontSize : 14,
        fontWeight : "bold",
    },

    videoband: {
        color: "grey",
        fontSize : 10,
        fontWeight : "bold",
    },
    myvideoplayer: {
        borderRadius : 8,
        borderColor : 'white',
        borderWidth : 2,
        height: 200,
    },
    controls: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 48,
        left: 182,
        bottom: 400,
        right: 0,
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
});