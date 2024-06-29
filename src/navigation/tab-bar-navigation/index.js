import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Landing from '../../pages/landing';
import GetStartPage from '../../screens/getStart';
// import empowering from '../../assets/landing_icons/referral';
import painter from '../../assets/landing_icons/painter.png';
import {Image, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Contact from '../../pages/landing/contact';
import About from '../../pages/landing/about';

const Tab = createBottomTabNavigator();

export function TabBarNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Landing') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'user-md' : 'user-md';
            } else if (route.name === 'About') {
              iconName = focused ? 'rocket' : 'rocket';
            }

            return <FontAwesome name={iconName} size={30} color={color} />;
          },

          tabBarLabel: ({ focused, color }) => {
            let labelStyle = {
              fontSize: 14,
              fontWeight: 'bold',
              color: focused ? '#96C293' : 'gray',
            };

            if (route.name === 'Landing') {
              labelStyle = { ...labelStyle, fontSize: 16 };
            } else if (route.name === 'Contact') {
              labelStyle = { ...labelStyle, fontSize: 14 };
            } else if (route.name === 'About') {
              labelStyle = { ...labelStyle, fontSize: 12 };
            }

            return <Text style={labelStyle}>{route.name}</Text>;
          },

          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: '#AB947E',  
          inactiveTintColor: 'gray',  
          style: {
            backgroundColor: '#fff', 
            borderTopColor: 'transparent',  
            paddingTop: 10,  
            paddingBottom: 10, 
            height: 70,  
          },
        }}
      >
        <Tab.Screen name="Landing" component={Landing} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({route}) => ({
    //       tabBarIcon: ({focused, color, size}) => {
    //         let iconName;

    //         if (route.name === 'Landing') {
    //           iconName = focused ? 'home' : 'home';
    //         } else if (route.name === 'contact') {
    //           iconName = focused ? 'user-md' : 'user-md';
    //         } else if (route.name === 'About') {
    //           iconName = focused ? 'rocket' : 'rocket';
    //         }
    //         return <FontAwesome name={iconName} size={30} color={color} />;
    //       },

    //       tabBarLabel: ({ focused, color }) => {
    //         let labelStyle = {
    //           fontSize: 14,
    //           fontWeight: 'bold',
    //           color: focused ? '#96C293' : 'gray',
    //         };

    //         if (route.name === 'Landing') {
    //           labelStyle = { ...labelStyle, fontSize: 16 };
    //         } else if (route.name === 'Contact') {
    //           labelStyle = { ...labelStyle, fontSize: 14 };
    //         } else if (route.name === 'About') {
    //           labelStyle = { ...labelStyle, fontSize: 12 };
    //         }

    //         return <Text style={labelStyle}>{route.name}</Text>;
    //       },

    //       headerShown: false,
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: '#AB947E',
    //       inactiveTintColor: 'gray',
    //     }}>
    //     <Tab.Screen name="Landing" component={Landing} headerShown={false} />
    //     <Tab.Screen name="contact" component={Contact} />
    //     <Tab.Screen name="About" component={About} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}
