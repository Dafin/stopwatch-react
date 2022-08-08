import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    // TODO output stopwatch readout
    //
    return (
        <div className="stopwatch">
        <h1>ReactJS Stopwatch</h1>
            <div className="readout">
                00:00:00
            </div>
            <div className="buttons">
                <button id="start">Start</button>
                <button id="stop">Stop</button>
                <button id="reset">Reset</button>
            </div>
        </div>
    );

};

export default Stopwatch;