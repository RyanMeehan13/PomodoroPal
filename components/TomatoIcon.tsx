import React from 'react';
import { Image, StyleSheet} from 'react-native';

export const TomatoIcon: React.FC = ()=>{
    return(

        <Image style= {styles.logoStyle} source = {require('../assets/tomato.png')}/>

    );
}


const styles = StyleSheet.create({
    logoStyle:{
        height:32, 
        width:32, 
    }
});