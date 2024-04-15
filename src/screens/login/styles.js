import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  normalText: {
    fontSize: responsiveFontSize(1),
    color: 'black',
    // textAlign: 'center',
  },
  text: {
    fontSize: responsiveFontSize(1),
    color: '#fff',
    textAlign: 'center',
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
    backgroundColor: 'pink',
  },
  empowerImg: {
    height: responsiveHeight(10),
    width: responsiveWidth(10),
    resizeMode: 'contain',
  },

  flexRow: {
    flexDirection: 'row',
  },

  getStartBtn: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    width: '70%',
    alignSelf: 'center',
  },

  radioBtn: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioBtn: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'green',
  },
});
export default styles;
