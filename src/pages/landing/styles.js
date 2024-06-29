import {StyleSheet} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },

  flexRow: {
    flexDirection: 'row',
    alignContent: 'center',
  },

  container: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: responsiveHeight(1),
  },
  box: {
    backgroundColor: '#fff',
    width: responsiveWidth(45), 
    height: responsiveHeight(15), 
    alignItems: 'center', 
    justifyContent: 'flex-end',
    borderRadius: 5 , 
    elevation: 10,
  },
  largeBox: {
    backgroundColor: '#fff',
    width: responsiveWidth(100) - 40, 
    height: responsiveHeight(15),
    alignItems: 'center', 
    justifyContent: 'flex-end',
    elevation: 10,
    borderRadius: 5 , 
  },
  marginTop: {
    marginTop: responsiveHeight(1),
  },
  btn: {
    backgroundColor: '#16588e',
    padding: 8,
    borderRadius: 7,
    marginBottom: 10,
    width: responsiveWidth(35),
    shadowOpacity: 0.25,
    elevation: 5,
},
  jobBtn: {
    backgroundColor: '#ff8b00',
    padding: 8,
    borderRadius: 7,
    margin: 10,
    shadowOpacity: 0.25,
    elevation: 5,
    alignItems: 'center'
},

btnText: {
  color: '#fff',
  textAlign: 'center'
},

mainLargeBox: {
  backgroundColor: '#fff',
  width: responsiveWidth(100) - 40, 
  height: responsiveHeight(20),
  // alignItems: 'center', 
  padding: responsiveHeight(2),
  elevation: 10,
  borderRadius: 5 , 
},

flatList: {
  flexDirection: 'row',
  // justifyContent: 'space-around'
},

contentContainer: {
  padding: 10,
  gap: 10,
},

space : {
  // justifyContent: 'space-between'
},

webview: {
  width: 350,
  height: 250,
},

});
export default styles;
