import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Stopwatch text on screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Stopwatch/i);
  expect(linkElement).toBeInTheDocument();
});

test.skip('The stopwatch SHOULD have the ability to be started and stopped.', () => {
  // TODO Check; button presence, functionality, multiple clicks
});

test.skip('The stopwatch SHOULD display the number of seconds.', () => {
  // TODO
});

test.skip('The stopwatch COULD have the ability to be reset without refreshing the page', () => {
  // TODO
});

test.skip('The stopwatch COULD display the time in any recognisable timeformat (i.e hh:mm:ss)', () => {
  // TODO
});

test.skip('Detailed styling IS NOT important - show your own creativity.', () => {
  // TODO 
});

// https://reactjs.org/docs/test-utils.html