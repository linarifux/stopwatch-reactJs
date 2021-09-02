import "./App.css";
import WatchButton from "./components/WatchButton";
import React, { useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [tens, setTens] = useState(0);
  const [isActive, setIsActive] = useState(false)
  const [intervalId, setIntervalId] = useState()
  var tensValue = tens;
  var secondsValue = seconds;

  const actionHandler = (buttonName) => {
    const startTimer = () => {
      let myInterval = setInterval(() => {timer()},10)
      setIntervalId(myInterval)
    }
    const timer = () => {
      tensValue++
      if(tensValue > 99){
        tensValue=0
        secondsValue++
        if(secondsValue < 10){
          secondsValue = `0${secondsValue}`
        }
      }
      if(tensValue < 10){
        tensValue = `0${tensValue}`
      }
      setTens(tensValue)
      setSeconds(secondsValue)
    }

    if(buttonName === 'start'){
      startTimer()
      setIsActive(true)
    }
    if(buttonName === 'stop'){
      clearInterval(intervalId)
      setIsActive(false)
    }
    if(buttonName === 'reset'){
      clearInterval(intervalId)
      setTens(0)
      setSeconds(0)
      setIsActive(false)
    }
  }

  
  return (
    <div className="App">
      <div className="container">
        <h1>ReactJS - Stopwatch</h1>
        <div className="time">
          <span className="seconds">{seconds || "00"}</span>
          <span>:</span>
          <span className="tens">{tens || "00"}</span>
        </div>
        <div className="action-buttons">
          <WatchButton buttonName="start" handleAction={actionHandler} isActive={isActive}/>
          <WatchButton buttonName="stop" handleAction={actionHandler} />
          <WatchButton buttonName="reset" handleAction={actionHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
