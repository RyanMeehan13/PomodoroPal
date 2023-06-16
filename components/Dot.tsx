import React from "react";
import {View, StyleSheet} from 'react-native';
import { colors } from "../assets/colors";


type Props = {
    isFilled: boolean;
}

export const Dot: React.FC<Props> = ({isFilled})=>{
    return(
        <View style = {isFilled?styles.filledDot:styles.openDot}></View>
    );

}


const styles = StyleSheet.create({
    filledDot:{
        width:18, 
        height:18,
        borderRadius:9,
        backgroundColor: colors.white,
    },
    openDot:{
        width:18, 
        height:18,
        borderRadius:9,
        borderColor: colors.white,
        borderWidth:2,
    },

});