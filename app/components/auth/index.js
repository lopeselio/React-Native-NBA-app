import React, {Component} from 'react'
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  View,
  Text
} from 'react-native';
import LogoComponent from './authLogo'
import AuthForm from './authForm'
import { getTokens, setTokens } from '../../utils/misc'

class SignIn extends Component {
  
  state = {
      loading: false
  }  

  goNext = () => {
    this.props.navigation.navigate('App')
  }
  
  componentDidMount() {
    getTokens((value) => {
      console.log(value)
    })
  }

  render() {
      if(this.state.loading){
          return(
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
          )         
      }else {
        return (
            <ScrollView style={styles.container}>
              <View>
                  <LogoComponent />
                  <AuthForm 
                    goNext={this.goNext}
                  />
              </View>
            </ScrollView>
          )
      }

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d428a',
    padding: 50
  },
  loading: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center'
  }
})

export default SignIn