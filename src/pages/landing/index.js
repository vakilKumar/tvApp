/* eslint-disable prettier/prettier */
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import logo_tatd from '../../assets/landing_icons/logo-tatd.png';
import convenientblueicon from '../../assets/landing_icons/convenientblueicon.png';
import punctualblueicon from '../../assets/landing_icons/punctualblueicon.png';
import openblueicon from '../../assets/landing_icons/openblueicon.png';
import driverblueicon from '../../assets/landing_icons/driverblueicon.png';
import howitblueicon from '../../assets/landing_icons/howitblueicon.png';
import maskblueicon from '../../assets/landing_icons/maskblueicon.png';
import presenceblueicon from '../../assets/landing_icons/presenceblueicon.png';
import verifiedblueicon from '../../assets/landing_icons/verifiedblueicon.png';
import ratingImg from '../../assets/images/rating.png';
import {WebView} from 'react-native-webview';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useCallback, useState} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';

const item = [
  {
    name: 'safe',
    img: maskblueicon,
  },
  {
    name: 'Trained',
    img: verifiedblueicon,
  },
  {
    name: 'Experince',
    img: driverblueicon,
  },
  {
    name: 'Punctual',
    img: punctualblueicon,
  },
  {
    name: '24*7 Services',
    img: openblueicon,
  },
  {
    name: 'Presence',
    img: presenceblueicon,
  },
  {
    name: 'Convenient',
    img: convenientblueicon,
  },
  {
    name: 'How It Works',
    img: howitblueicon,
  },
];

const videoList = [
  {
    url: 'https://youtu.be/gOUGGl-l39E',
    id: 1,
  },
  {
    url: 'https://youtu.be/OtaAd5aUHJw',
    id: 2,
  },
  {
    url: 'https://youtu.be/z7fbMTl2scU',
    id: 3,
  },
  {
    url: 'https://youtu.be/z7fbMTl2scU',
    id: 4,
  },
];

const Landing = () => {
  const [toggleSelected, setToggleSelected] = useState(false);

  const handleToggle = useCallback(
    from => {
      if (from === 'Partner') {
        setToggleSelected(true);
      } else {
        setToggleSelected(false);
      }
    },
    [toggleSelected],
  );

  const header = () => {
    return (
      <View
        style={{
          backgroundColor: toggleSelected ? '#fff' : null,
          shadowOpacity: 0.25,
          elevation: toggleSelected ? 5 : null,
          paddingBottom: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              padding: responsiveHeight(1),
            }}>
            <View>
              <Image
                source={logo_tatd}
                style={[
                  styles.img,
                  {tintColor: !toggleSelected ? '#fff' : null},
                ]}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: responsiveFontSize(4),
                  color: toggleSelected ? 'black' : '#fff',
                }}>
                {'tat d'}
              </Text>
            </View>
          </View>

          <View
            style={{
              height: responsiveHeight(4.5),
              width: '45%',
              backgroundColor: '#fff',
              borderRadius: 20,
              flexDirection: 'row',
              marginTop: 10,
              borderWidth: 1,
            }}>
            <TouchableOpacity
              onPress={() => handleToggle('Customer')}
              style={{
                backgroundColor: !toggleSelected ? '#16588e' : '#fff',
                margin: 5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: responsiveHeight(2),
                height: responsiveHeight(3.1),
                width: responsiveWidth(20),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: !toggleSelected ? '#fff' : '#878787',
                }}>
                {toggleSelected ? 'BACK' : 'CUSTOMER'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleToggle('Partner')}
              style={{
                backgroundColor: toggleSelected ? '#ff8b00' : '#fff',
                margin: 5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: responsiveHeight(2),
                height: responsiveHeight(3.1),
                width: responsiveWidth(20),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: toggleSelected ? '#fff' : '#878787',
                }}>
                {toggleSelected ? 'DRIVER' : 'PARTNER'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            paddingLeft: responsiveHeight(1),
            color: toggleSelected ? 'black' : '#fff',
            marginLeft: responsiveWidth(10),
            fontSize: responsiveFontSize(1.3),
            marginTop: responsiveHeight(-1)
          }}>
          { toggleSelected ? 'trusted & trained driver' : 'Go anywhere at anytime'}
        </Text>
      </View>
    );
  };

  const driverCardSection = () => {
    const randerItemList = ({item, index}) => {
      return (
        <View
          style={{
            alignItems: 'center',
            marginLeft: index < 4 ? responsiveHeight(3) : responsiveHeight(1.3),
            marginBottom:
              index < 4 ? responsiveHeight(2.5) : responsiveHeight(1.3),
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item?.img}
              style={{
                // height: 50,
                // width: 50,
                resizeMode: 'contain',
              }}
            />
          </View>
          <Text
            style={{
              color: '#fff',
              flexWrap: 'nowrap',
              marginTop: 5,
            }}>
            {item.name}
          </Text>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            marginTop: responsiveHeight(5),
            marginBottom: responsiveHeight(5),
            fontSize: responsiveFontSize(3),
          }}>
          {'I require driver for?'}
        </Text>
        <View style={styles.row}>
          <View style={[styles.box]}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>{'Hourly Driver'}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box]}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>{'Outstation Driver'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.largeBox}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{'Monthly Driver'}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.largeBox, styles.marginTop]}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{'Weekly Driver'}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: responsiveWidth(100),
            borderWidth: 2,
            borderColor: '#fff',
            marginTop: responsiveHeight(8),
            borderRadius: 5,
          }}>
          <View style={[styles.mainLargeBox]}>
            <View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: 400,
                  color: 'black',
                }}>
                {
                  'Our drivers are briefed about the importance of time, Also we track their performance & provide them feedback as & when required. '
                }
              </Text>
            </View>
            <View
              style={{
                marginTop: responsiveHeight(7),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: 400,
                    color: 'black',
                  }}>
                  {'Your Safety Matters'}
                </Text>
              </View>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'blue',
                  }}>
                  {'99999160322'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={item}
            renderItem={randerItemList}
            keyExtractor={item => item.id}
            // horizontal={true}
            style={{
              marginTop: responsiveHeight(3),
            }}
            numColumns={4}
            columnWrapperStyle={styles.space}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  const ratingSection = () => {
    return (
      <View
        style={[
          styles.mainLargeBox,
          {
            marginLeft: responsiveWidth(5),
            backgroundColor: '#d9d9d9',
            height: responsiveWidth(120),
            marginBottom: 20,
          },
        ]}>
        <Text style={{fontSize: 22, fontWeight: 600, color: '#000'}}>
          {'Rating and Review'}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: responsiveWidth(2),
            }}>
            <Text style={{fontSize: 28, fontWeight: 800, color: '#000'}}>
              {'4.8'}
            </Text>
            <Rating
              type="custom"
              ratingColor="#3498db"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={5}
              imageSize={30}
              onFinishRating={this.ratingCompleted}
              style={{paddingVertical: 10}}
            />
            <Text style={{fontSize: 18, fontWeight: 600, color: '#000'}}>
              {'430418'}
            </Text>
          </View>
          <View>
            <Image
              source={ratingImg}
              style={{resizeMode: 'contain', width: responsiveWidth(45)}}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: responsiveHeight(2),
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: '#16588e',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 22, fontWeight: 600, color: '#fff'}}>
                  S
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#000',
                  marginLeft: 10,
                }}>
                {'Saumya Rajan'}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: 600, color: '#000'}}>
                {'Noida'}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: responsiveHeight(2),
            }}>
            <Rating
              type="custom"
              ratingColor="#3498db"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={5}
              imageSize={30}
              onFinishRating={this.ratingCompleted}
              style={{paddingVertical: 10}}
            />

            <Text
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: '#000',
                margin: 10,
              }}>
              {'28 Jun, 2024'}
            </Text>
          </View>

          <Text
            style={{fontSize: 18, fontWeight: 600, color: '#000', margin: 10}}>
            {'Very nice and professional person.'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: toggleSelected ? '#fff' : '#16588e',
      }}>
      <View style={{}}>{header()}</View>
      <ScrollView>
        {!toggleSelected ? driverCardSection() : driverSection()}
        <View>{!toggleSelected && ratingSection()}</View>
      </ScrollView>
    </View>
  );
};

const driverSection = () => {
  // const [input, setInput] = useState('')

  const videoPlayerSection = () => {
    return (
      <FlatList
        data={videoList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                // justifyContent: 'center',
                alignItems: 'center',
                margin: 10
              }}>
              <WebView source={{uri: item.url}} style={styles.webview} />
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    );
  };
  return (
    <View style={{margin: 20}}>
      <Text style={{margin: 10}}>{'Enter Your Mobile Number'}</Text>
      <TextInput
        value={''}
        style={{borderWidth: 1, borderRadius: 5, padding: 5, margin: 10}}
        placeholder="Eg. 9810338108"
        onChangeText={e => {}}
      />

      <TouchableOpacity style={styles.jobBtn}>
        <Text style={{color: '#fff', fontSize: 22, fontWeight: 700}}>{'APPLY FOR DRIVER JOB'}</Text>
      </TouchableOpacity>

      {videoPlayerSection()}
    </View>
  );
};

export default Landing;
