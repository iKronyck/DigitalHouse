import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20,
    paddingHorizontal: 19,
    paddingTop: 21,
    height: 143,
    marginTop: 20,
    zIndex: 9,
    marginBottom: 20,
  },
  shadow: {
    borderRadius: 20,
    width: '100%',
    height: 143,
    position: 'absolute',
    bottom: 6,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
    marginBottom: 10,
  },
});
