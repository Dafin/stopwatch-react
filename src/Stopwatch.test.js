import { Stopwatch } from './Stopwatch'
import { render, screen, fireEvent } from '@testing-library/react';

describe("<StopWatch />", () => {
    /// https://testing-library.com/docs/react-testing-library/example-intro
    it('Stopwatch should appear in the document .', () => {
        render(<Stopwatch />)
        const result = screen.getByTestId('stop-watch');
        expect(result).toBeInTheDocument();
    });
    it.todo('Check presence of start button');
    it.todo('Check presence of stop button');
    it.todo("The stopwatch SHOULD have the ability to be started and stopped");
    it.todo('Check presence of reset button');
    it.todo('Reset button zero\'s the time.');
    it.todo('The stopwatch SHOULD display the number of seconds')
    it.todo('The stopwatch renders the seconds.');
    it.todo('"The stopwatch COULD display the time in any recognisable timeformat (i.e hh:mm:ss)."');
    it.todo('The stopwatch displays in the hh:mm:ssformat');
    it.todo('Detailed styling IS NOT important - show your own creativity.');
});
