import { render, screen, waitFor } from '@testing-library/react';
import Detail from './Detail';

it('renders learn react link', async () => {
  render(<Detail />);
  await waitFor(() => {
    expect(screen.getByText(/Detail/)).toBeInTheDocument();
  })
});
