import React, { useState, useEffect } from "react";

const Stopwatch = () => {

    const [ticking, setTicking] = React.useState(false);

    // TODO output stopwatch readout
    return (
        <div className="stopwatch">
            <h1>ReactJS Stopwatch</h1>
            <div className="readout">
                00:00:00
            </div>
            <div className="buttons">
                <button id="start" onClick={() => setTicking(true)}>Start</button>
                <button id="reset" >Reset</button>
            </div>
        </div>
    );

};

export default Stopwatch;