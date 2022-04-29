import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Album from './Album';

const props = {
    _id: 'abc123',
    Name: 'Album title',
    Catalogue: 'DVDCD'
};

describe('Album page', () => {
  it('renders an album image', () => {
    render(<Album {...props} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

//   it('renders album list headings', () => {
//     render(<AlbumList />);
//     expect(screen.getAllByRole('heading')).toHaveLength(3);
//   });

//   it('renders a list', async () => {
//     render(<AlbumList />);
//     await waitFor(() => {
//       expect(screen.getByText(/Brassed Froth!/)).toBeInTheDocument();
//     });
//   });
});
