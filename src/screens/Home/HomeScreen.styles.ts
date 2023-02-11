import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 40,
  },
  divider: {
    width: 13,
  }
})