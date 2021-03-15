import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";

function Pomodoro({focusDuration, breakDuration, handleFocusIncrease, handleFocusDecrease, handleBreakIncrease, handleBreakDecrease}) {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      //disable increment buttons?
      //show the active session info?
      //countdown the focus timer and play the sound when its finished
      //then countdown the break timer and play the sound when its finished
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              {/* should be set to whatever the state of the focus duration is */}
              Focus Duration: {focusDuration}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              {/* add a handler here to update the state of the focus duration */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={handleFocusDecrease}
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
                Break Duration: {breakDuration}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                {/* add a handler here to update the state of the break duration */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={handleBreakDecrease}
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
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
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
            {/* add a handler that resets everything to its default state */}
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        {/* if isTimerRunning return this div, else return null */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">Focusing for {focusDuration} minutes</h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            {/* set to focusDuration minus the time elapsed */}
            <p className="lead" data-testid="session-sub-title">
              25:00 remaining
            </p>
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
                aria-valuenow="0" // TODO: Increase aria-valuenow as elapsed time increases, turn the elapsed time into a percentage
                style={{ width: "0%" }} // TODO: Increase width % as elapsed time increases, percentage should coencide with the aria-valuenow
              />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Pomodoro;
