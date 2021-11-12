import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    width: 160,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#FFFEFC',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: '#FCA600',
    },
    text: {...baseStyle.text},
  }),
  secondary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: '#0083FC',
    },
    text: {...baseStyle.text},
  }),
};
