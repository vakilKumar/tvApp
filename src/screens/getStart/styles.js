import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  getStartImg: {
    height: 500,
    width: 500,
    resizeMode: 'contain',
  },
  empowerImgDiv: {
    flex: 1.5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
  empowerImg: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },

  flexRow: {
    flexDirection: 'row',
    alignContent: 'center',
  },

  getStartBtn: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    width: '70%',
    alignSelf: 'center'
  },
});
export default styles;
