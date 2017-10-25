import React from 'react';
import { View, Text, Image } from 'react-native';

const AstronomyCard = (props) => {

    const { date, explanation, hdurl, title, url } = props.data;

    return (
      <View>
        <Text>{ title }</Text>
        <Image src={ url } alt={ title } />
        <Text>{ explanation }</Text>
        <Text>{ date }</Text>
      </View>
    )
}

export default AstronomyCard;
