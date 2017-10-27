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
                <AstronomyCard data={ this.state.astronomy } />
            </View>
        );
    }
}
