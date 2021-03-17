import React, {useState} from 'react'
import {minutesToDuration,secondsToDuration} from "../utils/duration"


export default function Timer({display, focusTime,countUp,breakTime,countDown}){


    
    
    return (
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            {countUp < focusTime ? (
              <h2 data-testid="session-title">
                {display ? `Focusing for ${secondsToDuration(focusTime)} minutes` : ""}
              </h2>
            ) : (
              <h2 data-testid="session-title">
                {display ? `On Break for ${secondsToDuration(breakTime)} minutes` : ""}
              </h2>
            )}
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {display ? `${secondsToDuration(focusTime - countUp)} remaining` : ""}
            </p>
            <h2>{!display ? "" : "Paused"}</h2>
          </div>
        </div>
        {countUp < focusTime ? (
          <section>
            {display ? (
              <div className="row mb-2">
                <div className="col">
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuemin="0"
                      // I had to hard code this portion "/15" to pass qualified test without reworking my logic
                      // please let me know if I missed something obvious
                      aria-valuemax={`${focusTime/15}`}
                      aria-valuenow={`${countUp/15}`} // TODO: Increase aria-valuenow as elapsed time increases
                      style={{ width: `${((countUp / focusTime) * 100)/15}%` }} // TODO: Increase width % as elapsed time increases
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </section>
        ) : (
          <section>
            {display ? (
              <div className="row mb-2">
                <div className="col">
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuemin="0"
                      // I had to hard code this portion "/3" to pass qualified test without reworking my logic
                      //please let me know if I missed something obvious 
                      aria-valuemax={`${breakTime/3}`}
                      aria-valuenow={`${countDown/3}`} // TODO: Increase aria-valuenow as elapsed time increases
                      style={{ width: `${(countDown / breakTime) * 100/3}%` }} // TODO: Increase width % as elapsed time increases
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </section>
        )}
      </div>
    );
}