import { render, screen } from '@testing-library/react';
import Facts from './Facts';

it('renders learn react link', () => {
  render(<Facts />);
  const navElement = screen.getByText(/Facts/i);
  expect(navElement).toBeInTheDocument();
});
