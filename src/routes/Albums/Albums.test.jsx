import { render, screen } from '@testing-library/react';
import Albums from './Albums';

xit('renders learn react link', () => {
  render(<Albums />);
  expect(screen.getAllByRole('heading')).toBeInTheDocument();
});
