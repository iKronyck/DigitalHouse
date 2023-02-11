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
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
  },
});
