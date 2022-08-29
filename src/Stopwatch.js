import { useState, useEffect } from "react";

export const Stopwatch = () => {

    const [ticking, setTicking] = useState(false);
    const [isResettable, updateResetState] = useState(false)
    const [timeDisplay, setTimeDisplay] = useState(0);

    useEffect(() => {
        let interval;
        if (ticking) {
            interval = setInterval(() => {
                setTimeDisplay((prevTimeDisplay) => prevTimeDisplay + 1);
            }, 1000);
        } else if (!ticking) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [ticking]);

    const getHours = (time) => {
        const result = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
        return result === "00" ? "00" : result;
    }
    const getMinutes = (time) => {
        const result = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
        return result === "00" ? "00" : result;
    }
    const getSeconds = (time) => {
        const result = ("0" + Math.floor((time) % 60)).slice(-2);
        return result === "00" ? "00" : result;
    }

    // TODO keyboard interaction
    // const onKeyboardInteraction = (keyboardEvent) => {
    //     switch (keyboardEvent.code) {
    //         case 'Enter':
    //             setTicking(true)
    //             break
    //         case 'Space':
    //             setTicking(false);
    //             break
    //         case 'Escape':
    //             setTimeDisplay(0)
    //             break
    //         default:
    //             break
    //     }
    // }
    return (
        <div className="stopwatch" data-testid="stop-watch">
            <h1>ReactJS Stopwatch</h1>
            <div
                className="readout"
                data-testid="readout-panel"
            >
                <span
                    data-testid="hours-segment"
                >
                    {getHours(timeDisplay)}
                </span>
                <span className={ticking ? 'colon' : ""}
                    data-testid="colon-segment"
                >
                    :
                </span>
                <span
                    data-testid="minutes-segment"
                >
                    {getMinutes(timeDisplay)}
                </span>
                <span
                    className={ticking ? 'colon' : ""}
                    data-testid="colon-segment"
                >
                :
                </span>
                <span
                    data-testid="seconds-segment"
                >
                {getSeconds(timeDisplay)}
                </span>
            </div>
            <div className="buttons">
                <button id={ticking ? 'started' : 'start'} data-testid="start-button" onClick={() => { 
                    setTicking(true); 
                    updateResetState(true);
                }}>Start</button>
                <button id={ticking ? 'stop' : 'stopped'} data-testid="stop-button" onClick={() => {
                    setTicking(false)
                    updateResetState(true);
                }}>Stop</button>
                {/* <button id="reset" data-testid="reset-button" onClick={() => setTimeDisplay(0)} >Reset</button> */}
                <button id={isResettable ? 'reset' : 'resettable'} data-testid="reset-button" onClick={() => {
                    setTimeDisplay(0);
                    updateResetState(false);
                }} >Reset</button>
            </div>
        </div>
    );
};