import React from "react";
import { View } from "react-native";


const If = (props) => {

    if(props.condition && props.children) return props.children;
    return null;
}

export default React.memo(If);