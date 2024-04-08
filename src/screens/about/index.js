import React from "react";
import { Text, TouchableOpacity, View } from "react-native";



const About = () => {


    return(
        <View>
            <Text>About  Screen</Text>
          {
            DataView.map((ele) => {
                return(
                    <TouchableOpacity onPress={() => {}}>
                    <Text>click me</Text>
                </TouchableOpacity>
                )
            })
          }
        </View>
    )
}

export default About;