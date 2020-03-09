import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, FlatFeed } from 'expo-activity-feed';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { WebView } from 'react-native-webview';

export default class News extends React.Component {

  render() {
    return (
      <View style={styles.conatinerTwo}>
        <WebView 
          automaticallyAdjustContentInsets={false}
          originWhitelist={['*']}
          source={{ html: '<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthe.fuzz.and.drums%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=253663975633999" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  conatinerTwo: {
    flex: 1
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1B1B1B',
  },
});

// <StreamApp 
//             apiKey="5rqsbgqvqphs"
//             appId="40273"
//             token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZDczNDllZjUtM2MwMC00NzFjLWExYzktMjQwNTQzMmI4Mzc4In0.odhu6Ry3821lM7qzjWcgfD6Lz_65UlwO4eSymz5f_Bo"
//         ></StreamApp>