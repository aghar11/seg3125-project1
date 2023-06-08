import { render, screen } from '@testing-library/react';
import Homepage from './components/homepage/Homepage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
