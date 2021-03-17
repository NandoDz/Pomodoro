import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import Break from "./Break";
import Focus from "./Focus.js";
import PlayStop from "./PlayStop";
import Timer from "./Timer.js";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [breakTime, setBreakTime] = useState(300);
  const [focusTime, setFocusTime] = useState(1500);
  const [countUp, setCountUp] = useState(0);
  const [countDown,setCountDown] = useState(0);
  const [display,setDisplay] = useState(false)
 



  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      if (countUp < focusTime) {
        setCountUp((countUp) => countUp + 1);
        if(countUp == (focusTime - 1)){
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
        }
      }
      if(countUp >= focusTime){
        setCountDown((countDown)=> countDown + 1)
        if(countDown == (breakTime)){
          setCountUp(0)
        }
      }

    },
    isTimerRunning ? 1000 : null
  );


  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <Focus
            focusTime={focusTime}
            setFocusTime={setFocusTime}
            isTimerRunning={isTimerRunning}
            setIsTimerRunning={setIsTimerRunning}
          />
        </div>
        <div className="col">
          <div className="float-right">
            <Break
              breakTime={breakTime}
              setBreakTime={setBreakTime}
              isTimerRunning={isTimerRunning}
              setIsTimerRunning={setIsTimerRunning}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <PlayStop
              breakTime={breakTime}
              setBreakTime={setBreakTime}
              isTimerRunning={isTimerRunning}
              setIsTimerRunning={setIsTimerRunning}
              focusTime={focusTime}
              setFocusTime={setFocusTime}
              countUp={countUp}
              setCountUp={setCountUp}
              countDown={countDown}
              setCountDown={setCountDown}
              display={display}
              setDisplay={setDisplay}
            />
        </div>
      </div>
      <Timer
        focusTime={focusTime}
        setFocusTime={setFocusTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
        countUp={countUp}
        setCountUp={setCountUp}
        countDown={countDown}
        setCountDown={setCountDown}
        display={display}
        setDisplay={setDisplay}
        percent={(countUp/focusTime)*100}
      />
      
    
    </div>
  );
}

export default Pomodoro;
