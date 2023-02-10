import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    width: '100%'
  },
  productImage: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  productInformation: {
    justifyContent: 'space-evenly',
    marginHorizontal: 11,
    flex: 2,
  },
  productQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  productQuantityContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowIcon: {
    marginLeft: 16,
  },
});
