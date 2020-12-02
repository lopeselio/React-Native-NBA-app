import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to react Native</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  }
})