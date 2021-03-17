import React, {useState} from "react"
import classNames from "../utils/class-names";


export default function PlayStop({setCountDown,setDisplay,setCountUp,setBreakTime,setFocusTime,isTimerRunning,setIsTimerRunning}){

    

    function playPause() {
            setIsTimerRunning((prevState) => !prevState)
            setDisplay(true)
      }


    const handleStop =()=>{
        setIsTimerRunning(false)
        setFocusTime(25*60)
        setBreakTime(5*60)
        setCountUp(0)
        setCountDown(0)
    }

    return (
        <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            {!isTimerRunning ? (
              <button
                type="button"
                className="btn btn-secondary"
                title="Stop the session"
                //intial disabled
                disabled
              >
                <span className="oi oi-media-stop" />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                title="Stop the session"
                onClick={handleStop}
              >
                <span className="oi oi-media-stop" />
              </button>
            )}
          </div>
    )
}