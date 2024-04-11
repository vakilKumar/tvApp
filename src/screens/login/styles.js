import {StyleSheet} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    text: {
        fontSize: responsiveFontSize(1),
        color: '#fff',
        textAlign: 'center'
    },
  getStartImg: {
    height: responsiveHeight(80),
    width: responsiveWidth(80),
    resizeMode: 'contain',
  },
  empowerImgDiv: {
    flex: 1.5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'pink'
  },
  empowerImg: {
    height: responsiveHeight(10),
    width: responsiveWidth(10),
    resizeMode: 'contain',
  },

  flexRow: {
    flexDirection: 'row',
    // alignContent: 'center',
    justifyContent: 'center'
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
