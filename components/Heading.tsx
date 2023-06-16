import React from "react";
import {View, Text, StyleSheet} from 'react-native'; 
import {TomatoIcon} from './TomatoIcon';
import { colors } from "../assets/colors";

export const Heading: React.FC = () => {
return(
    <View style = {styles.headerBar}>
        <View style = {styles.headerTextContainer}>
        <Text style = {styles.headerText}>
          PomodoroPal
        </Text> 
        </View>
          <TomatoIcon/>
    </View>
);

}

const styles = StyleSheet.create({
    headerBar:{
        paddingTop:60, 
        marginHorizontal:20, 
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#000', 
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom:5,
        
        
    },
    headerText:{
        fontSize:33, 
        fontWeight:'600', 
        color: colors.white,
    }, 
    headerTextContainer:{
        paddingRight:10, 
        verticalAlign: 'bottom', 
        height:32,
    
    },
    
})