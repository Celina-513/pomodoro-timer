import React from "react";
//import classNames from "../utils/class-names";
import {minutesToDuration} from '../utils/duration';


function TimerChoices({focusDuration, breakDuration, handleFocusIncrease, handleFocusDecrease, handleBreakIncrease, handleBreakDecrease, isTimerRunning}) {
    return (
        <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              {/* should be set to whatever the state of the focus duration is */}
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              {/* add a handler here to update the state of the focus duration */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={handleFocusDecrease}
                disabled={isTimerRunning}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              {/* add a handler here to update the state of the focus duration */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={handleFocusIncrease}
                disabled={isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                {/* should be set to whatever the state of the break duration is */}
                Break Duration: {minutesToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                {/* add a handler here to update the state of the break duration */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={handleBreakDecrease}
                  disabled={isTimerRunning}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                {/* add a handler here to update the state of the break duration */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={handleBreakIncrease}
                  disabled={isTimerRunning}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TimerChoices;