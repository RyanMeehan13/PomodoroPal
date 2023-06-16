import React from "react";
import {View, Text,StyleSheet} from 'react-native';
import { DotGroup } from "./DotGroup";
import { colors } from "../assets/colors";


type Props = {
    timerDate:Date;
    currentMode: "focus"|"short-break"|"long-break";
}
export const TimeDisplay:React.FC<Props> = ({timerDate, currentMode}) => {
    let cont_type = styles.timeContainerFocus;
    if(currentMode==='focus'){
        cont_type = styles.timeContainerFocus;
    }
    else if(currentMode==='short-break'){
        cont_type = styles.timeContainerShBreak;
    }
    else{
        cont_type = styles.timeContainerLoBreak;
    }

    return(
        <View style = {cont_type}>
        <Text style = {styles.timeDisplayText}>
            <Text>{timerDate.getMinutes().toString().padStart(2,'0')}</Text>:<Text>{timerDate.getSeconds().toString().padStart(2,'0')}</Text>
        </Text>
        <Text style = {styles.quoteText}>
        {currentMode==='focus'?
        'It\'s time to focus.':(
            currentMode==='short-break'
            ?'Let\'s take a quick break.'
            :'Here\'s some time to recharge.')
        }
        </Text>
        
        <DotGroup currentMode={currentMode}/>
        
        </View>
    );
}

const styles = StyleSheet.create({
    timeContainerFocus:{
        width: '84%', 
        height: '31%', 
        backgroundColor: colors.red_light, 
        alignSelf:'center', 
        marginTop: '8%',
        borderRadius: 20,
        justifyContent:'center',
        flexDirection:'column'
    }, 
    timeContainerShBreak:{
        width: '84%', 
        height: '31%', 
        backgroundColor: colors.green_light, 
        alignSelf:'center', 
        marginTop: '8%',
        borderRadius: 20,
        justifyContent:'center',
        flexDirection:'column'
    }, 
    timeContainerLoBreak:{
        width: '84%', 
        height: '31%', 
        backgroundColor: colors.blue_light, 
        alignSelf:'center', 
        marginTop: '8%',
        borderRadius: 20,
        justifyContent:'center',
        flexDirection:'column'
    }, 
    timeDisplayText:{
        fontSize:92,
        fontWeight:'900', 
        textAlign:'center',
        color: colors.white, 
        paddingTop:'15%',
        paddingBottom:'10%',
        

    },
    quoteText:{
        fontSize:23, 
        fontWeight:'700',
        color:colors.white,
        textAlign:'center',
        
    },
    

});