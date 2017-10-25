import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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


const AstronomyCard = (props) => {
  const { date, explanation, hdurl, title, url } = props.data;

  return (
    <View style={ styles.container }>
      <Text>{ title }</Text>
      <Image src={ url } alt={ title } />
      <Text style={ styles.welcome } >{ explanation }</Text>
      <Text>{ date }</Text>
    </View>
  )
}

export default AstronomyCard;
