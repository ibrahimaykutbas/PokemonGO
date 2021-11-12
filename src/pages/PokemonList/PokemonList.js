import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Header from '../../components/Header/Header';

import styles from './PokemonList.style';

const page = 0;
const char_limit = 25;

const PokemonList = ({navigation}) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${char_limit}&offset=${
      page * char_limit
    }`,
  );
  const [loading, setLoading] = useState(true);

  const getAllPokemons = async () => {
    setLoading(true);
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        );
        const data = await res.json();
        setAllPokemons(currentList => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
        /*  await allPokemons.sort(function (a, b) {
          return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
        }); */
      });
    }

    createPokemonObject(data.results);
    page += 1;

    setLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const footerIndicator = () => {
    return loading ? (
      <ActivityIndicator animating size="large" style={{paddingVertical: 20}} />
    ) : null;
  };

  const handleCharacterSelect = item => {
    navigation.navigate('DetailPage', item);
  };

  const renderCharacter = ({item}) => (
    <PokemonCard
      character={item}
      onSelect={() => handleCharacterSelect(item)}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={allPokemons}
        renderItem={renderCharacter}
        numColumns="2"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header navigation={navigation} />}
        onEndReached={getAllPokemons}
        /* onEndReachedThreshold={0.8} */
        ListFooterComponent={footerIndicator}
      />
    </View>
  );
};

export default PokemonList;
