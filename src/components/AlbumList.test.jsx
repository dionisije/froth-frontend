import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AlbumList from './AlbumList';

describe('Album list page', () => {
  it('renders the album list page', () => {
    render(<AlbumList />);
    const textElement = screen.getByText(/List/i);
    expect(textElement).toBeInTheDocument();
  });

  it('renders album list headings', () => {
    render(<AlbumList />);
    expect(screen.getAllByRole('list')).toHaveLength(3);
  });

  it('renders a list', async () => {
    render(<AlbumList />);
    await waitFor(() => {
      expect(screen.getByText(/Brassed Froth!/)).toBeInTheDocument();
    });
  });
});
