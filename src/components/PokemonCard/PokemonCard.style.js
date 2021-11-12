import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 150,
    alignItems: 'center',
    flex: 1,
    paddingTop: 40,
    marginRight: 20,
  },
  contentContainer: {
    backgroundColor: '#FC7CFF',
    height: 115.18,
    width: '100%',
    borderRadius: 20,
    paddingTop: 10,
    justifyContent: 'flex-end',
  },
  image: {
    marginBottom: 18.28,
    alignSelf: 'center',
  },
  infoContainer: {
    backgroundColor: '#676767',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginBottom: 12.8,
    borderRadius: 10,
  },
  number: {
    color: '#F993FB',
    fontWeight: 'bold',
  },
  name: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
