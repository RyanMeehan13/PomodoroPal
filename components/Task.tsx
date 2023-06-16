import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { colors } from '../assets/colors';

type Props = {
    text:string;
}

export const Task:React.FC<Props> = ({text}) => {
    return(
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <Fontisto name="angle-right" size={13} color="black" />
                <Text style = {styles.itemText}>{text}</Text>
            </View>
            <View style = {styles.circleIcon}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: colors.white,
        paddingHorizontal: 5,
        paddingVertical:10,
        borderRadius: 10,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginBottom: 10,
        width:295,
        
    },
    itemText:{
        maxWidth:'93%',
        fontSize:16,
        fontWeight: '500',
        
    },
    itemLeft:{
        flexDirection: 'row', 
        alignItems: 'center', 
        flexWrap: 'wrap',
    },
    circleIcon:{
        height: 14,
        width: 14, 
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 7,
    },
    

});