import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import {Heading} from './Heading';
import { TimeDisplay } from './TimeDisplay';
import { Task } from './Task';
import { Octicons } from '@expo/vector-icons';
import { colors } from '../assets/colors';


type Props = {
    timerDate: Date;
    currentMode: "focus"|"short-break"|"long-break";
    taskItems: string[];
    task:string;
    isTimerRunning:boolean;
    completeTask: (index:number)=>void;
    setTask: (text:string)=>void;
    handleAddTask: ()=>void;
    startTimer: ()=>void;
    stopTimer: ()=>void;


}


export const ShortBreakScreen:React.FC<Props> = ({timerDate,currentMode,taskItems,task,isTimerRunning,completeTask,setTask,handleAddTask,
    stopTimer, startTimer  }) => {
    return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Heading/>

      <TimeDisplay timerDate={timerDate} currentMode={currentMode}/>

      
      <View style = {styles.scrollableContainer}>
        <View style = {styles.taskContainerHeading}>
          <Text style = {styles.taskContainerHeadingText}>Today's Tasks:</Text>
        </View>
        <ScrollView >
          <View style = {styles.taskContainer}>
          {taskItems.map((item, index)=>
          {
            return <TouchableOpacity key = {index} onPress = {()=>completeTask(index)}>
              <Task text = {item}/>
            </TouchableOpacity>
            
          })}
            
          </View>
        </ScrollView>
      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS==='ios'?"padding":"height"}
      style={styles.writeTaskWrapper}>
        <TextInput placeholder='Write a task' style = {styles.input} value = {task} onChangeText={text=>setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View>
            <Octicons name="plus-circle" size={29} color="#fff" />
          </View>

        </TouchableOpacity>
      </KeyboardAvoidingView>
      
      <View style = { {...styles.buttonShadow, ...{height: isTimerRunning?73:80}}}>
        <Pressable style = {styles.buttonStyle} onPress={isTimerRunning?stopTimer:startTimer}>
        <Text style={styles.buttonText}>{isTimerRunning?'Pause':'Start'}</Text>
        </Pressable>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.green_dark,
      
    },
    scrollableContainer:{
      marginTop:10,
      paddingTop:5,
      width:'84%', 
      alignSelf:'center', 
      height: 210, 
      backgroundColor:colors.green_light, 
      borderRadius:25, 
    }, 
    taskContainer:{ 
      flexDirection:'column', 
      width:'84%', 
      alignSelf:'center', 
      height: 210,
      overflow:'visible',
      borderRadius:25,
      alignItems:'center'
      
    }, 
    buttonStyle:{
      
       
      justifyContent:'center', 
      flexDirection:'row',
      width: '100%', 
      height:73,
      alignSelf: 'center', 
      backgroundColor:colors.white,
      alignItems: 'center',
      borderRadius:15,
  
    }, 
    buttonShadow:{
     width:'84%',
     position:'absolute',
     bottom:60,
     alignSelf:'center',
     alignItems:'center',
     borderRadius:15,
     backgroundColor:colors.grey,
  
    },
    buttonText:{
      fontSize:38,
      fontWeight:'700', 
      color:colors.green_dark, 
  
    },
  writeTaskWrapper:{
    position:'absolute',
    bottom:178,
    width: '84%', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf:'center',
      
    },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 295,
    backgroundColor: colors.white, 
    borderRadius: 10, 
    borderColor: colors.green_dark, 
    borderWidth: 1,
    fontSize:16,
  
  },
  plusText:{
    fontSize:55,
    fontWeight:'700',
    color:colors.white,
  }, 
  taskContainerHeading:{
    width:'62%',
    alignSelf:'center', 
    flexDirection:'row',
    justifyContent:'center', 
    alignItems:'center', 
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor:colors.white,
    marginBottom:5,
  
  }, 
  taskContainerHeadingText:{
    fontSize:30,
    fontWeight:'800', 
    color:colors.white,
  
  }});