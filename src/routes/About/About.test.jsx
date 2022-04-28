import { render, screen } from '@testing-library/react';
import About from './About';

it('renders learn react link', () => {
  render(<About />);
  const navElement = screen.getByText(/About/i);
  expect(navElement).toBeInTheDocument();
});
