import React from "react"
import {secondsToDuration} from "../utils/duration"

export default function Break({isTimerRunning,breakTime, setBreakTime}){
    

    

    const handleClick=(value)=>{
        if(value !== "-"){
        setBreakTime(breakTime => breakTime - 60)
            if(breakTime <= 60/60){
                setBreakTime(60/60)
            }
        } else {
            setBreakTime(breakTime => breakTime + 60)
                if(breakTime >= (15*60)){
                    setBreakTime(15*60)
                }
        }
    }
    return (
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-break">
          {/* TODO: Update this text to display the current break session duration */}
          Break Duration: {secondsToDuration(breakTime)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
          {isTimerRunning ? (
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={() => handleClick("+")}
              disabled
            >
              <span className="oi oi-minus" />
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={() => handleClick("+")}
            >
              <span className="oi oi-minus" />
            </button>
          )}
          {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
            {isTimerRunning ? (
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={() => handleClick("-")}
                disabled
              >
                <span className="oi oi-plus" />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={() => handleClick("-")}
              >
                <span className="oi oi-plus" />
              </button>
            )}
        </div>
      </div>
    );
}