import React from 'react';
import { StyleSheet, View, Linking, Alert, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, FlatFeed } from 'expo-activity-feed';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview'
 





// const infoRequest = new GraphRequest(
//   '/me/posts',
//   null,
//   this._responseInfoCallback,
// );
      
// new GraphRequestManager().addRequest(infoRequest).start();



export default class Concerts extends React.Component {

  // componentDidMount() {
  //   const { navigation } = this.props;
  //   //Adding an event listner om focus
  //   //So whenever the screen will have focus it will set the state to zero
  //   this.focusListener = navigation.addListener('didFocus', () => {
  //     this.setState({ count: 0 });
  //   });
  // }


  

  render() {

    const uri = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthe.fuzz.and.drums%2F&tabs=events&width=340&height=350&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=253663975633999'
    const HTML = '<meta name="viewport" content="initial-scale=1.02 maximum-scale=1.02"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthe.fuzz.and.drums%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=253663975633999" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>'
    return (
      <View style={{flex:1, alignSelf:'center', backgroundColor:'#1B1B1B'}}>
    <View style={{flex:1, alignSelf:'center', backgroundColor:'#1B1B1B'}}>
      
      <AutoHeightWebView 
      
            scalesPageToFit={true}
            style={{ backgroundColor:'#1B1B1B'}}
            // scalesPageToFit={true}
            viewportContent={'width=device-width, initial-scale=1.06, user-scalable=no'}
            originWhitelist={['*']}
            ref={(ref) => { this.webview = ref; }}
            // source={{ HTML }}
            source={{ uri  }}
            onNavigationStateChange={(event) => {
              if (event.url !== uri) {
                this.webview.stopLoading();
                Linking.openURL(event.url);
                }
              }}
          
            />

            </View>
            </View>
     
    );
  }
  onMessage(e)
  {
    // retrieve event data
    var data = e.nativeEvent.data;  // maybe parse stringified JSON
    try {
      data = JSON.parse(data)
    } catch ( e ) {  }  // check if this message concerns us
    if ( 'object' == typeof data && data.external_url_open ) {
      // proceed with URL open request
      return Alert.alert(
        'External URL',
        'Do you want to open this URL in your browser?',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'OK', onPress: () => Linking.openURL( data.external_url_open )},
        ],
        { cancelable: false }
      );
    }
  }
}

const styles = StyleSheet.create({

  conatinerTwo: {
    // flex: 1,
    // height:300
  },

  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1B1B1B',
  },
});


///////// Pour bloquer la naviagetion dans le WebView
// onShouldStartLoadWithRequest={request => {
          // Only allow navigating within this website
        //   return request.url.startsWith('https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthe.fuzz.and.drums%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=253663975633999');
        // }}


//////// WebView HTML

// html: '<meta name="viewport" content="initial-scale=1.02 maximum-scale=1.02"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthe.fuzz.and.drums%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=253663975633999" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>'
// }}


/////TOKEN TEST
// <StreamApp 
//         apiKey="37b1556d81060f2e8872f9617072121a"
//         appId="253663975633999"
//         userId="109831067299652"
//         token="EAADmtL8o9E8BANCFykjljFCxmeTHGE0lmgwoeh834FSC3LzqDpY9i2nC72rQgpG4rc5H6cgLaOshjpleGV9AJ2Q2VQFH318PBdjduCKGoxyRAJb4JadZBgT27784vofFpQb6tKZAVhqR68ZBVSbXeCC3PFXlZCF6OZAlkbqJNeyTRBGsUfM0dXJ82e70h1BsDBT9vsYF2zQZDZD"
//         ></StreamApp>


// url d'hebergement facebook : graph.facebook.com.