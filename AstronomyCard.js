import React from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight, Linking } from 'react-native';
import styles from './Styles';

const AstronomyCard = (props) => {
  const { date, explanation, hdurl, title, url } = props.data;

  return (
      <ScrollView>
      <Text style={ styles.title }>{ title }</Text>
      <TouchableHighlight onPress={() => Linking.openURL( hdurl ) }>
        <Image source={{ uri: url }} style={ styles.img } alt={ title }S  />
      </TouchableHighlight>
      <Text style={ styles.post } >{ explanation }</Text>
      <Text style={ styles.copyright }>{ date }</Text>
      </ScrollView>
  )
}

export default AstronomyCard;
