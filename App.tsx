import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import {Heading} from './components/Heading';
import { TimeDisplay } from './components/TimeDisplay';
import { Task } from './components/Task';
import { Octicons } from '@expo/vector-icons';
import { colors } from './assets/colors';
import { FocusScreen } from './components/FocusScreen';
import { ShortBreakScreen } from './components/ShortBreakScreen';
import { LongBreakScreen } from './components/LongBreakScreen';

const FOCUS_DURATION_DEFUALT = 25*60*1000 //25 minutes * 60_000 ms/minute
const BREAK_SHORT_DURATION_DEFUALT = 5*60*1000 //5 minutes * 60_000 ms/minute
const BREAK_LONG_DURATION_DEFUALT = 15*60*1000 //15 minutes * 60_000 ms/minute


export default function App() {
  const [prefFocusTime, setPrefFocusTime] = useState(FOCUS_DURATION_DEFUALT);
  const [prefShortBreakTime, setPrefShortBreakTime] = useState(BREAK_SHORT_DURATION_DEFUALT);
  const [prefLongBreakTime, setPrefLongBreakTime] = useState(BREAK_LONG_DURATION_DEFUALT);
  const [currentTime, setCurrentTime] = useState<number>(prefFocusTime);
  const [currentMode, setCurrentMode] = useState<"focus"|"short-break"|"long-break">("focus");
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer|null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [numberSessionsCompleted, setNumberSessionsCompleted] = useState<number>(0);

  const [task, setTask] = useState<string>('');
  const [taskItems, setTaskItems] = useState<string[]>([]);
  
  const handleAddTask = () =>{
    Keyboard.dismiss();
    if(!(task.trim()==="")){
      setTaskItems([...taskItems,task]);
    }
    setTask("");
  }

  const completeTask = (index:number) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  useEffect(()=>{
    if(currentTime===0){
      if(currentMode==='long-break'){
        setCurrentMode('focus');
        setCurrentTime(prefFocusTime);
        setNumberSessionsCompleted(0);
      }
      else if(currentMode==='short-break'){
        setNumberSessionsCompleted(numberSessionsCompleted+1);
        if(numberSessionsCompleted===3){ //enter longbreak
          setCurrentMode('long-break');
          setCurrentTime(prefLongBreakTime)
        }
        else{ //back to focus
          setCurrentMode('focus');
          setCurrentTime(prefFocusTime);
        }
      }
      else{ //focus completion
        setCurrentMode('short-break');
        setCurrentTime(prefShortBreakTime);
      }
      stopTimer();
    }
  },[currentTime]);

  const startTimer = ()=>{
    setIsTimerRunning(true);
    const id = setInterval(()=>setCurrentTime(prev => prev-1000), 1000);
    setTimerInterval(id);
  }

  const stopTimer = () =>{
    setIsTimerRunning(false);
    if(timerInterval!=null){
      clearInterval(timerInterval);
    }
  }

  const timerDate = new Date(currentTime);

  if(currentMode==='focus')
  {
    return <FocusScreen timerDate = {timerDate} currentMode = {currentMode} taskItems = {taskItems} task = {task} 
                        isTimerRunning = {isTimerRunning} completeTask = {completeTask} setTask = {setTask} handleAddTask = {handleAddTask}
                        stopTimer={stopTimer} startTimer={startTimer}/>
  }
  else if(currentMode==='short-break')
  {
    return <ShortBreakScreen timerDate = {timerDate} currentMode = {currentMode} taskItems = {taskItems} task = {task} 
                        isTimerRunning = {isTimerRunning} completeTask = {completeTask} setTask = {setTask} handleAddTask = {handleAddTask}
                        stopTimer={stopTimer} startTimer={startTimer}/>
  }
  else
  {
    return <LongBreakScreen timerDate = {timerDate} currentMode = {currentMode} taskItems = {taskItems} task = {task} 
                            isTimerRunning = {isTimerRunning} completeTask = {completeTask} setTask = {setTask} handleAddTask = {handleAddTask}
                            stopTimer={stopTimer} startTimer={startTimer}/>
  }
}


