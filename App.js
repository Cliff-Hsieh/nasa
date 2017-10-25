/*
 1. create card and import
 2. install axios and get data
 3. pass data to card
 4. drew card html and return
 5. render components
*/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AstronomyCard from './AstronomyCard';
import axios from 'axios';

export default class App extends Component<{}> {

  constructor(){
    super();

    this.state = {
      astronomy: []
    }
  }

  componentDidMount(){
    const END_POINT = "https://api.nasa.gov/planetary/apod?api_key=";
    const API_KEY = "ZYZTNFqrPPBS0mqgR4KeMFSrTuzc15H3PqlFt5QW";

    axios.get(END_POINT + API_KEY)
    .then(response => {
      this.setState({
        astronomy: response.data
      })
    })
    .catch( error => {
      console.log(error, "get data fail!")
    });
  }  

  render() {
    return (
      <View>
        <View>
          <Text>
             { this.state.astronomy.title }
          </Text>
        </View>
        <Text>Cliff Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
