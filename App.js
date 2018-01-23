import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
        <Text>Open up App.js to start working on your app!
        </Text>
      </View>
    );
  }
}

class Welcome extends Component {
  state = {name: 'Guest', initialInput:'[Put in your name]'}
  
  updateName = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    //const {name} = this.state
    const {value} = 'Your Name:'

    return (
      <View>
        <Text style={styles.title}>
          Welcome, {this.state.name}!
        </Text>
        <TextInput value={value} onChange={this.updateName}/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: 'blue',
    backgroundColor: 'gray',
    marginTop: 25
  }
});
