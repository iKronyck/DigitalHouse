import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20,
    paddingHorizontal: 19,
    paddingTop: 21,
    height: 143,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
