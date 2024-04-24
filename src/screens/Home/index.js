import React from "react";
import { Text, TouchableOpacity, View } from "react-native";



const Home = ({navigation}) => {

    const throwError = () => {
        throw new Error('Test error');
      };
    return(
        <View style={{backgroundColor:"white"}}>
            <Text style={{color: 'black'}}>Home Screen </Text>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text style={{color: 'black'}}>Go to About page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;