import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import LogoIcon from '../../assets/svg/logo.svg';
import BackIcon from '../../assets/svg/back.svg';
import FilterIcon from '../../assets/svg/filter.svg';

import Input from '../Input/Input';

import styles from './Header.style';

const Header = ({visible, navigation}) => {
  const handleFormSubmit = async value => {
    if (!value.pokemon) {
      return showMessage({
        message: 'Cannot be blank.',
        type: 'danger',
      });
    }
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${value.pokemon}`,
      );
      const data = await response.json();
      navigation.navigate('DetailPage', data);
      value.pokemon = '';
    } catch (error) {
      showMessage({
        message: 'There is no such pokemon. Yet!',
        type: 'danger',
      });
    }
  };
  return (
    <>
      <View style={styles.container}>
        <LogoIcon />
      </View>
      <View style={styles.innerContainer}>
        {visible && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
        )}
        <Formik initialValues={{pokemon: ''}} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <Input
              placeholder="Search Pokémon"
              value={values.pokemon}
              onType={handleChange('pokemon')}
              onSubmitEditing={handleSubmit}
            />
          )}
        </Formik>
        {visible && <FilterIcon />}
      </View>
    </>
  );
};

export default Header;
