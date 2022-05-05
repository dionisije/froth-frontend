import { render, screen } from '@testing-library/react';
import Detail from './Detail';

it('renders an album link', async () => {
  render(<Detail />);
  expect(screen.getByTestId(/Detail/i)).toBeInTheDocument();
});
