import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
  },
  content: {
    flex: 3,
  },
  productImageContainer: {
    width: '100%',
    height: 350,
    marginTop: 19,
    marginBottom: 32,
    borderRadius: 10,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    ...Platform.select({
      android: {elevation: 6},
    }),
  },
  productImage: {
    width: '100%',
    height: 350,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 20,
  },
  pointText: {
    marginTop: 32,
  },
  buttonContainer: {
    width: '100%',
    height: 70,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
