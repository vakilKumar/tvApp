import React from "react";
import { Text, TouchableOpacity, View } from "react-native";



const Home = ({navigation}) => {

    const throwError = () => {
        throw new Error('Test error');
      };
    return(
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text>Go to About page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;