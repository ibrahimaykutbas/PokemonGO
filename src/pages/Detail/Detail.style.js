import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  character: {
    marginTop: 50,
    height: 205,
    backgroundColor: '#FC7CFF',
    marginHorizontal: 21,
    borderRadius: 30,
    justifyContent: 'space-around',
    paddingBottom: 25,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 15,
    resizeMode: 'contain',
  },
  number: {
    color: '#FC7CFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  name: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 70,
    textTransform: 'capitalize',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 21,
    marginTop: 22,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#FA5AFD',
    marginTop: 25,
    paddingTop: 41,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    /*    flexWrap: 'wrap', */
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  informationContainer: {
    width: 230,
    height: 95,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginRight: 15,
  },
  informationData: {
    marginRight: 25,
    marginLeft: 15,
    marginBottom: 30,
    alignItems: 'center',
  },
  categoryName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 17.92,
  },
  categoryInfo: {
    color: ' rgba(255, 255, 255, 0.56)',
    textTransform: 'capitalize',
  },
  stats: {
    flex: 1,
    marginRight: 20,
  },
  statsHeader: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 17.92,
  },
  stat: {
    color: ' rgba(255, 255, 255, 0.56)',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
