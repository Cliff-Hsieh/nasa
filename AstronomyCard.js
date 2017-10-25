import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 0.75 * width,
  },
  title: {
    position: 'absolute',
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
    height: 500,
      width: width,
    marginTop: 100,
  },
  post: {
    flex: 1,
    position: 'relative',
      width: 0.8 * width,
    fontSize: 12,
    top: 20,
    lineHeight: 15,
    letterSpacing: 0.66,
      fontWeight: 'bold',
    left: 20,
     marginBottom: 40,
  },
    copyright: {
        position: 'relative',
        bottom: 10,
        backgroundColor: "#000",
        color: "#FFF",
        fontSize: 20,
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
