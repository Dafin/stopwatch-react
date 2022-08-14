import { Stopwatch } from './Stopwatch'
import { render, screen, fireEvent } from '@testing-library/react';

describe("Stopwatch", () => {
    /// https://testing-library.com/docs/react-testing-library/example-intro
    it('Stopwatch should appear in the document .', () => {
        render(<Stopwatch />)
        const result = screen.getByTestId('stop-watch');
        expect(result).toBeInTheDocument();
    });

    it.todo('The stopwatch SHOULD have the ability to be started and stopped.');
});





// test.skip('The stopwatch SHOULD have the ability to be started and stopped.', () => {
//     // TODO Check; button presence, functionality, multiple clicks
// });

// test.skip('The stopwatch SHOULD display the number of seconds.', () => {
//     // TODO
// });

// test.skip('The stopwatch COULD have the ability to be reset without refreshing the page', () => {
//     // TODO
// });

// test.skip('The stopwatch COULD display the time in any recognisable timeformat (i.e hh:mm:ss)', () => {
//     // TODO
// });

// test.skip('Detailed styling IS NOT important - show your own creativity.', () => {
//     // TODO 
// });
