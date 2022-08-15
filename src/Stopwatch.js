import { useState, useEffect } from "react";

export const Stopwatch = () => {

    const [ticking, setTicking] = useState(false);
    const [timeDisplay, setTimeDisplay] = useState(0);

    useEffect(() => {
        let interval;
        if (ticking) {
            interval = setInterval(() => {
                setTimeDisplay((prevTimeDisplay) => prevTimeDisplay + 1);
            }, 1);
        } else if (!ticking) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [ticking]);

    const getHours = (time) => {
       const result  = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
       return result === "00" ? "00" : result;
    } 
    const getMinutes = (time) => {
        const result  = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
        return result === "00" ? "00" : result;
     } 
     const getSeconds = (time) => {
        const result  = ("0" + Math.floor((time / 10) % 100)).slice(-2);
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
                {getHours(timeDisplay)}:{getMinutes(timeDisplay)}:{getSeconds(timeDisplay)}
            </div>
            <div className="buttons">
                <button id="start" data-testid="start-button" onClick={() => setTicking(true)}>Start</button>
                <button id="stop" onClick={() => setTicking(false)}>Stop</button>
                <button id="reset" onClick={() => setTimeDisplay(0)} >Reset</button>
            </div>
        </div>
    );

};

