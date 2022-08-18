import { Stopwatch } from './Stopwatch'
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

/// https://testing-library.com/docs/react-testing-library/example-intro

describe("<StopWatch />", () => {
    it('Stopwatch should appear in the document .', () => {
        render(<Stopwatch />)
        const result = screen.getByTestId('stop-watch');
        expect(result).toBeInTheDocument();
    });

    it('Check presence of start button', () => {
        render(<Stopwatch />)
        const result = screen.getByTestId('start-button');
        expect(result).toBeInTheDocument();
    });
    it('Check presence of stop button', () => {
        render(<Stopwatch />)
        const result = screen.getByTestId('stop-button');
        expect(result).toBeInTheDocument();
    });

    it('Check presence of reset button', () => {
        render(<Stopwatch />)
        const result = screen.getByTestId('reset-button');
        expect(result).toBeInTheDocument();
    });
    

    it("The stopwatch SHOULD have the ability to be started", () => {
        /** WE evaulate the stopwatch as started when the readout is no longer '00:00:00' */
        
        // Assemble
        render(<Stopwatch />)
        const startButton = screen.getByTestId('start-button');
        const readout = screen.getByTestId('readout-panel');

        // Action 
        userEvent.click(startButton);

        // Assert
        expect(readout).not.toEqual('00:00:00');
    });


// How to wait?? Cant rely on previous state? 
// https://github.com/testing-library/react-hooks-testing-library/issues/241
    it.skip("The stopwatch SHOULD have the ability to be stopped once started", async () => {
        // Assemble
        // render(<Stopwatch />)
        // const startButton = screen.getByTestId('start-button');
        // const stopButton = screen.getByTestId('stop-button');
        // const readout = screen.getByTestId('readout-panel');

        // // Action 
        // userEvent.click(startButton);
        // await new Promise((r) => setTimeout(r, 2000));
        // userEvent.click(stopButton);
        // await new Promise((r) => setTimeout(r, 2000));
        // // Assert
        // expect(readout).not.toEqual('00:00:02');
    });

    it.todo('The stopwatch displays in the `hh:mm:ss`format');
    // render(<Stopwatch />)
    // const readout = screen.getByTestId('readout-panel');
    // // Assert
    // expect(readout).not.toContain('00:00:00');



    it.todo('Reset button zero\'s the time.');
    it.todo('The stopwatch SHOULD display the number of seconds')
    it.todo('The stopwatch renders the seconds.');
    it.todo('Detailed styling IS NOT important - show your own creativity.');
    it.todo('Time is accurate');
    // POtentially usefull information : https://stackoverflow.com/questions/20269657/right-way-to-get-web-server-time-and-display-it-on-web-pages
});