import React from "react"

import {minutesToDuration} from "../utils/duration"

export default function Focus({focusTime,setFocusTime,isTimerRunning}){

   


    const handleClick=(value)=>{
        if(value !== "-"){
        setFocusTime(focusTime => focusTime - 300) 
            if(focusTime <= 300){
                setFocusTime(300)
            }
        } else {
            setFocusTime(focusTime => focusTime + 300) 
                if(focusTime >= (3600)){
                    setFocusTime(3600)
                } 
        }
        
    }

    

    return (
      <fieldset>
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusTime/60)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            {isTimerRunning ? ( // if the timer is running you need to disable the buttons
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={() => handleClick("+")}
                disabled
              >
                <span className="oi oi-minus" />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={() => handleClick("+")}
              >
                <span className="oi oi-minus" />
              </button>
            )}

            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              {isTimerRunning ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-focus"
                  onClick={() => handleClick("-")}
                  disabled
                >
                  <span className="oi oi-plus" />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-focus"
                  onClick={() => handleClick("-")}
                >
                  <span className="oi oi-plus" />
                </button>
              )}
          </div>
        </div>
      </fieldset>
    );
}
