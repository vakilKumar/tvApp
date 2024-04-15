import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useTranslation} from 'react-i18next';

import empowering from '../../assets/images/empowering.png';
import girl_with_laptop from '../../assets/images/girl_with_laptop.png';
import styles from './styles';
import theme from '../../theme';

const userData = [
  {
    userName: 'Teacher',
    id: 0,
  },
  {
    userName: 'Admin',
    id: 0,
  },
  {
    userName: 'Student',
    id: 0,
  },
];

const LoginScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const {t} = useTranslation();

  // const { t, i18n } = useTranslation(['home', 'common']);

  const handleMobileNumberChange = useCallback((e) => {
          setMobileNumber(e)
  }, [mobileNumber])

  const handlePasswordChange = useCallback((e) => {
    setPassword(e)
  }, [password])
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={styles.empowerImgDiv}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: responsiveHeight(5),
            position: 'absolute',
            left: responsiveHeight(5),
            top: responsiveHeight(5),
            borderRadius: 10,
          }}>
          <Image source={empowering} style={[styles.empowerImg, {}]} />
        </View>
        <Image source={girl_with_laptop} style={styles.getStartImg} />
      </View>
      <View
        style={{
          flex: 0.7,
          // display: 'flex',
          // alignContent: 'center',
          justifyContent: 'center',
          padding: 60
        }}>
        <View style={styles.flexRow}>
          <TouchableOpacity
            onPress={() => {
              i18n.changeLanguage('hi');
            }}
            style={{
              backgroundColor: 'green',
              padding: 5,
              borderRadius: 10,
              width: responsiveWidth(10),
            }}>
            <Text style={styles.text}>{t('Login')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(1),
                textAlign: 'center',
                marginLeft: responsiveWidth(2),
              }}>
              {'Register'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: responsiveFontSize(4), textAlign: 'left'}}>
          {t('welcome')}
        </Text>
        <Text style={{textAlign: 'left'}}>
          <Text
            style={{
              fontSize: responsiveFontSize(1),
              textAlign: 'center',
              color: 'lightGray',
              fontWeight: theme.fonts.fontSemiBold,
              textDecorationLine: 'underline',
            }}>
            {t('Pleace login to your')}
          </Text>
          <Text> {t('account')}</Text>
        </Text>

        {/* Radio button style */}
        <View style={[styles.flexRow, {gap: 10, marginTop: responsiveHeight(2), marginBottom: responsiveHeight(2)}]}>
          <View style={styles.radioBtn}>
            <View style={styles.selectedRadioBtn} />
          </View>
          <Text>{'Teacher'}</Text>
          <View style={styles.radioBtn}>
            <View style={styles.selectedRadioBtn} />
          </View>
          <Text>{'Admin'}</Text>
          <View style={styles.radioBtn}>
            <View style={styles.selectedRadioBtn} />
          </View>
          <Text>{'Student'}</Text>
        </View>

        {/* Login page */}
        <View >
          <Text style={styles.normalText}>{'Mobile Number'}</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#000',
              height: 40, 
              paddingVertical: 8, 
              paddingHorizontal: 10, 
            }}
            keyboardType='numeric'
            value={mobileNumber}
            onChangeText={()=> handleMobileNumberChange()}
          />
        </View>
        <View style={{marginTop: responsiveHeight(2)}}>
          <Text style={styles.normalText}>{'Password'}</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: '#000',
              height: 40, 
              paddingVertical: 8, 
              paddingHorizontal: 10, 
            }}
            keyboardType='numeric'
            value={password}
            onChangeText={()=> handlePasswordChange()}
          />
        </View>
       <TouchableOpacity style={{padding: 5}}>
       <Text style={{fontSize: responsiveFontSize(1), color: 'pink', textDecorationLine: 'underline'}}>{'Forgot Password'}</Text>
       </TouchableOpacity>
      <View style={{alignItems: 'flex-end'}}>
      <TouchableOpacity
            onPress={() => {
              // i18n.changeLanguage('hi');
            }}
            style={{
              backgroundColor: 'green',
              padding: 5,
              borderRadius: 10,
              width: responsiveWidth(10),
            }}>
            <Text style={styles.text}>{t('Login')}</Text>
          </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default LoginScreen;
