import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './PokemonCard.style';

const PokemonCard = ({character, onSelect}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          width="85%"
          height="100%"
          source={{
            uri: character.sprites.other.home.front_default,
          }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.number}>{`#${character.id}`}</Text>
          <Text style={styles.name}>{character.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;
