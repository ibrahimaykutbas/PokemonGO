import React from 'react';
import {View} from 'react-native';

import PokemonList from '../PokemonList/PokemonList';
import Header from '../../components/Header/Header';

import styles from './Home.style';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Header navigation={navigation} /> */}

      <PokemonList navigation={navigation} />
    </View>
  );
};

export default Home;
