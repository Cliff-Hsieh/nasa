import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 0.75 * width,
    flexDirection: 'row',
  },
  title: {
    position: 'relative',
    width: width,
    top: 50,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: "#6200ea",
  },
  img: {
    flex: 1,
    position: 'relative',
    height: 0.5 * width,
    width: 0.5 * width,
    left: 0.25 * width,
    alignItems: 'center',
    marginTop: 100,
  },
  post: {
    flex: 1,
    position: 'relative',
    textAlign: 'left',
    fontFamily: 'arial',
    fontSize: 12,
    marginTop: 40,
  },
  copyright: {
    position: 'relative',
    marginTop: 40,
    bottom: 10,
    color: "#6200ea",
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


const AstronomyCard = (props) => {
  const { date, explanation, hdurl, title, url } = props.data;

  return (
      <ScrollView>
      <Text style={ styles.title }>{ title }</Text>
      <Image source={{ uri: url }} style={ styles.img } alt={ title } />
      <Text style={ styles.post }>{ explanation }</Text>
      <Text style={ styles.copyright }>{ date }</Text>
      </ScrollView>
  )
}

export default AstronomyCard;
