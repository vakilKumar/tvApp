import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useTranslation } from 'react-i18next';

import empowering from '../../assets/images/empowering.png';
import girl_with_laptop from '../../assets/images/girl_with_laptop.png';
import styles from './styles';

const LoginScreen = ({navigation}) => {
    const { t } = useTranslation();

    // const { t, i18n } = useTranslation(['home', 'common']);
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
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.flexRow}>
          <TouchableOpacity
          onPress={() => {
            i18n.changeLanguage('hi');
          }}
            style={{
              backgroundColor: 'lightGreen',
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
      </View>
    </View>
  );
};

export default LoginScreen;
