import { render, screen } from '@testing-library/react';
import Albums from './Albums';

xit('renders learn react link', () => {
  render(<Albums />);
  const navElement = screen.getAllByText(/Albums/i);
  expect(navElement).toBeInTheDocument();
});
