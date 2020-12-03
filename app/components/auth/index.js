import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
class AuthComponent extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>Auth component</Text>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   }
// })

export default AuthComponent