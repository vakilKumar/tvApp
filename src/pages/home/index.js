import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { fetchDataFromDummyApiCreater } from "../../store/slice";



const Home = () => {

    const disptch = useDispatch();


    const handleClick = () => {
         alert('call')
        disptch(fetchDataFromDummyApiCreater())
    }


    return(
        <View>
            <Text>
                home page!!
            </Text>
            <TouchableOpacity onPress={handleClick}>
                <Text>Click for api call</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home;