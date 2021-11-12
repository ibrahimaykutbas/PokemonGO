import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, value, onType, onSubmitEditing}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#838282"
        value={value}
        onChangeText={onType}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default Input;
