import { render, screen } from '@testing-library/react';
import Albums from './Albums';

it('renders learn react link', () => {
  render(<Albums />);
  const navElement = screen.getByText(/Albums/i);
  expect(navElement).toBeInTheDocument();
});
