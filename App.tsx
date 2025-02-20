import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config)

class App extends React.Component {
  state = {
    user: {}
  }
  getUserData() {
    return Auth.currentCredentials();
  }
  componentDidMount() {
   this.getUserData();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Yo!</Text>
      </View>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});