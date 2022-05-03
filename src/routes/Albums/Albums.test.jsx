import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Albums from './Albums';

describe('Album list page', () => {
  it('renders the album list page', () => {
    render(<Albums />);
    const textElement = screen.getByText(/List/i);
    expect(textElement).toBeInTheDocument();
  });

  it('renders album list headings', () => {
    render(<Albums />);
    expect(screen.getAllByRole('heading')).toHaveLength(4);
  });

  it('renders a list', async () => {
    render(<Albums />);
    await waitFor(() => {
      expect(screen.getByTestId('original')).toBeInTheDocument();
    });
  });
});
