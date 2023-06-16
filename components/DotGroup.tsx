import React from "react";
import {View, StyleSheet} from 'react-native';
import { Dot } from "./Dot";


type Props = {
    currentMode: "focus"|"short-break"|"long-break";
}


export const DotGroup: React.FC<Props> = ({currentMode}) => {
    return(
    <View style = {styles.dotsContainer}>
        <Dot isFilled = {currentMode==='focus'?true:false}/>
        <Dot isFilled = {currentMode==='short-break'?true:false}/>
        <Dot isFilled = {currentMode==='long-break'?true:false}/>
    </View>
    );
}


const styles = StyleSheet.create({
    dotsContainer:{
        paddingTop:18,
        alignSelf:'center',
        width: '64%', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        
    }, 
});