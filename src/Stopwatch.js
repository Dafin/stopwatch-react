import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    // TODO output stopwatch readout
    //
    return (
        <div className="stopwatch">
        <h1>Stopwatch - React</h1>
            <div className="readout">
                00:00:00
            </div>
            <div className="buttons">
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );

};

export default Stopwatch;