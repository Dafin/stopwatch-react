import { Stopwatch } from './Stopwatch'
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe("<StopWatch />", () => {
    /// https://testing-library.com/docs/react-testing-library/example-intro
    it('Stopwatch should appear in the document .', () => {
        render(<Stopwatch />)
        const result = screen.getByTestId('stop-watch');
        expect(result).toBeInTheDocument();
    });
    it("The stopwatch SHOULD have the ability to be started", () => {
        /** WE evaulated the stopwatch as started when the readout is no longer '00:00:00' */
        
        // Assemble
        render(<Stopwatch />)
        const startButton = screen.getByTestId('start-button');
        const readout = screen.getByTestId('readout-panel');

        // Action 
        userEvent.click(startButton);

        // Assert
        expect(readout).not.toEqual('00:00:00');
    });
    it("The stopwatch SHOULD have the ability to be stopped once started", () => {
        // Assemble
        render(<Stopwatch />)
        const startButton = screen.getByTestId('start-button');
        const readout = screen.getByTestId('readout-panel');

        // Action 
        userEvent.click(startButton);

        // Assert
        expect(readout).not.toEqual('00:00:00');
    });
    it.todo('Check presence of start button');
    it.todo('Check presence of stop button');
    it.todo('Check presence of reset button');
    it.todo('Reset button zero\'s the time.');
    it.todo('The stopwatch SHOULD display the number of seconds')
    it.todo('The stopwatch renders the seconds.');
    it.todo('"The stopwatch COULD display the time in any recognisable timeformat (i.e hh:mm:ss)."');
    it.todo('The stopwatch displays in the hh:mm:ssformat');
    it.todo('Detailed styling IS NOT important - show your own creativity.');
});
