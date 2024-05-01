/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import empowering from '../../assets/images/empowering.png';
import table_with_boys from '../../assets/images/table_with_boys.png';
import styles from './styles';

const GetStartPage = ({navigation}) => {


    const handleGetStartBtn = useCallback(() => {
          navigation.navigate('Login')
    },[])
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View
        style={styles.empowerImgDiv}>
        <Image source={table_with_boys} style={styles.getStartImg} />
      </View>
      <View
        style={{
          flex: 0.7,
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image source={empowering} style={styles.empowerImg} />
        </View>
        <View>
          <Text style={{color: 'black', padding: 10, textAlign: 'center'}}>
            {'Empowering Minds, lgniting Future'}
          </Text>
        </View>
        <TouchableOpacity style={styles.getStartBtn} onPress={handleGetStartBtn}>
          <Text style={{color: 'black'}}>{'Get Started'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStartPage;
