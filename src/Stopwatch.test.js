import { Stopwatch } from './Stopwatch'
import { render, screen, act } from '@testing-library/react';
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


    it('The stopwatch SHOULD have the ability to be started', () => {
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

    // TODO FAULTY  TEST!!
    it("The stopwatch SHOULD have the ability to be stopped once started", () => {
        // How to wait?? Cant rely on previous state? Could be useful: https://github.com/testing-library/react-hooks-testing-library/issues/241
        // Assemble
        render(<Stopwatch />)
        const startButton = screen.getByTestId('start-button');
        const stopButton = screen.getByTestId('stop-button');
        const readout = screen.getByTestId('readout-panel');

        // // Action 
        userEvent.click(startButton);
        setTimeout(2000);
        userEvent.click(stopButton);
        setTimeout(3000);
        // Assert
        expect(readout).toEqual('00:00:05');
    });

    it('The stopwatch displays the number of seconds', () => {
        //** Evaulate the stopwatch displaying seconds if the element rendering the seconds segment it contains any value */
        render(<Stopwatch />)
        const result = screen.getByTestId('minutes-segment');
        expect(result).toBeInTheDocument();
    });

    it('The stopwatch renders the number of seconds', () => {
        //** Evaulated the stopwatch rendering seconds if the element rendering the seconds segment it contains any value */
        render(<Stopwatch />)
        const result = screen.getByTestId('minutes-segment');
        expect(result).not.toBeEmptyDOMElement();
    });



    it('Reset button zero\'s the time.', () => {
    // expect(readout).toEqual('00:00:00');
      // Assemble
      render(<Stopwatch />)
      const resetButton = screen.getByTestId('reset-button');
      const readout = screen.getByTestId('readout-panel');
        const zero = ('00:00:00');
      // Action 
      userEvent.click(resetButton);

      // Assert
      expect(readout).toEqual(zero);
    });


    it('The stopwatch displays in the `hh:mm:ss`format',() =>{

        jest.useFakeTimers();
        render(<Stopwatch />);

        const startButton = screen.getByTestId('start-button');
        const readoutHours = screen.getByTestId('hours-segment');
        const readoutMinutes = screen.getByTestId('minutes-segment');
        const readoutSeconds = screen.getByTestId('seconds-segment');
        const stopButton = screen.getByTestId('stop-button');
        
        userEvent.click(startButton);
        act(() => {
            jest.advanceTimersByTime((
                86400000 +
                3600000 + // 1 hour
                36000 +// 1 Minute
                1000 // 1 second
            ))
        });
        userEvent.click(stopButton);

        // const result = readout-panel.expect.stringMatching(/?:[01]\d|2[0123]):(?:[012345]\d): (?: [012345]\d);   //https://www.regextester.com/104044

        const res = isTimeFomatHHMMSSAndValid(
            `${readoutHours.textContent}:${readoutMinutes.textContent}:${readoutSeconds.textContent}`
        )
        
        expect(res).toBeTruthy();
        // Assert
        expect(readoutHours.textContent).toEqual('01');
        expect(readoutMinutes.textContent).toEqual('30');
        expect(readoutSeconds.textContent).toEqual('37');
            // regex 24hour clock, HH: MM: SS: (?: [01]\d | 2[0123]): (?: [012345]\d): (?: [012345]\d)
    });

    // Received: <div class="readout" data-testid="readout-panel"><span data-testid="hours-segment">00</span>:<span data-testid="minutes-segment">00</span>:<span data-testid="seconds-segment">00</span></div>



it.todo('Time is accurate'); // Currently there is a lag, could getting server time help?: https://stackoverflow.com/questions/20269657/right-way-to-get-web-server-time-and-display-it-on-web-pages
    });

it.skip('App / Component is styled.', () => {
    // Check if Component is style -  https://the-teacher.medium.com/how-to-test-a-react-components-css-styles-with-react-testing-library-rtl-styled-components-43f744334528
    // render(<Stopwatch />)
    // const result = screen.getByTestId('stop-watch');
    // expect(result).toHaveStyle();
});

const isTimeFomatHHMMSSAndValid = (time) => new RegExp('(?:[01]\\d|2[0123]):(?:[012345]\\d):(?:[012345]\\d)', 'gm').test(time);
