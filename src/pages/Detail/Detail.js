import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import ImageIcon from '../../assets/svg/image.svg';

import styles from './Detail.style';

const Detail = ({navigation, route}) => {
  const character = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header visible={true} navigation={navigation} />
        <View style={styles.character}>
          <View style={styles.info}>
            <Text style={styles.number}>{`#${character.id}`}</Text>
            <Text style={styles.name}>{character.name}</Text>
          </View>
          <Image
            style={styles.image}
            width="100%"
            height="100%"
            source={{
              uri: character.sprites.other.home.front_default,
            }}
          />
        </View>
        <View style={styles.button}>
          {character.types.map(c => (
            <Button
              key={c.type.name}
              title={c.type.name}
              theme={c.slot === 1 ? 'primary' : 'secondary'}
            />
          ))}
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.data}>
            <View style={styles.informationContainer}>
              <View style={styles.informationData}>
                <Text style={styles.categoryName}>Weight</Text>
                <Text style={styles.categoryInfo}>{character.weight}</Text>
              </View>
              <View style={styles.informationData}>
                <Text style={styles.categoryName}>Height</Text>
                <Text style={styles.categoryInfo}>{character.height} m</Text>
              </View>
              <View style={styles.informationData}>
                <Text style={styles.categoryName}>Ability</Text>
                <Text style={styles.categoryInfo}>
                  {character.abilities[0].ability.name}
                </Text>
              </View>
              <View style={styles.informationData}>
                <Text style={styles.categoryName}>Ability</Text>
                <Text style={styles.categoryInfo}>
                  {character.abilities[1].ability.name}
                </Text>
              </View>
            </View>

            <View style={styles.stats}>
              <Text style={styles.statsHeader}>Stats</Text>
              {character.stats.map(c => (
                <Text style={styles.stat} key={c.stat.name}>
                  {c.stat.name.replace('-', ' ')}: {c.base_stat}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.footer}>
            {/*  <View
              style={
                (styles.informationContainer,
                {justifyContent: 'center', alignItems: 'center'})
              }>
              <Text style={styles.categoryName}>Habilidades</Text>
              <Text style={styles.categoryInfo}>Mar Llamas</Text>
            </View> */}
            <ImageIcon />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
