import React from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight, Linking } from 'react-native';
import styles from './Styles';

class AstronomyCard extends React.Component {

    state = {
      display: this.props.data.display,
    }

    onPress = () => {
        const { display } = this.state;
        this.setState({ display: !display });
    };

    render() {
        const { date, explanation, hdurl, title, url } = this.props.data.astronomy;
        const { display } = this.state

        return (
            <ScrollView>
                <Text style={ styles.title }>{ title }</Text>
                <TouchableHighlight onPress={this.onPress}>
                    <Image source={{ uri: url }} style={ styles.img } alt={ title }S  />
                </TouchableHighlight>
                {
                  display
                  ? <Text style={ styles.post } >{ explanation }</Text>
                  : null
                }
                <Text style={ styles.copyright }>{ date }</Text>
            </ScrollView>
        )
    }
}

export default AstronomyCard;
