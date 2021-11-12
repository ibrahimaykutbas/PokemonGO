import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackBase,
} from 'react-native';

import styles from './Button.style';

const Button = ({theme = 'primary', title}) => {
  return (
    <View style={styles[theme].container}>
      <Text style={styles[theme].text}>{title}</Text>
    </View>
  );
};

export default Button;
