import React from "react";
//import classNames from "../utils/class-names";
import {minutesToDuration, secondsToDuration} from '../utils/duration';

function Active({showActive, isTimerRunning, focusDuration, focusTimeRemaining, breakDuration, breakTimeRemaining, focusPercentComplete, breakPercentComplete}) {
    return (showActive && 
        <>
        {focusTimeRemaining > 0 && (<>
            <div className="row mb-2">
            <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
                <h2 data-testid="session-title">Focusing for {minutesToDuration(focusDuration)} minutes</h2>
                {/* TODO: Update message below to include time remaining in the current session */}
                <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(focusTimeRemaining)} remaining
                </p>
                {!isTimerRunning && <p>PAUSED</p>}
            </div>
        </div>
        <div className="row mb-2">
        <div className="col">
            <div className="progress" style={{ height: "20px" }}>
            <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={focusPercentComplete} // TODO: Increase aria-valuenow as elapsed time increases, turn the elapsed time into a percentage
                style={{ width: `${focusPercentComplete}%` }} // TODO: Increase width % as elapsed time increases, percentage should coencide with the aria-valuenow
            />
            </div>
        </div>
        </div>
        </>)}
        {focusTimeRemaining === 0 && breakTimeRemaining > 0 && (<>
            <div className="row mb-2">
            <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
                <h2 data-testid="session-title">On Break for {minutesToDuration(breakDuration)} minutes</h2>
                {/* TODO: Update message below to include time remaining in the current session */}
                <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(breakTimeRemaining)} remaining
                </p>
                {!isTimerRunning && <p>PAUSED</p>}
            </div>
        </div>
        <div className="row mb-2">
        <div className="col">
            <div className="progress" style={{ height: "20px" }}>
            <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={breakPercentComplete} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${breakPercentComplete}%` }} // TODO: Increase width % as elapsed time increases
            />
            </div>
        </div>
        </div>
        </>)}
        
        </>
    )
}



export default Active;