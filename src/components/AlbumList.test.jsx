import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import AlbumList from './AlbumList';

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json([{
      _id: "6262d2b04957cd7f41a009fb",
      Name: 'Sinners & Saints',
      Artist: 'Raul Malo',
      Album: 'Brassed Froth!',
      Time: '330',
      Disc: '1',
      'Disc Count': '1',
      Track: '1',
      'Track Count': '20',
      Year: '2015',
      Catalogue: 'DVDCD40',
      Order: '40',    
    }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Album list page', () => {
  it('renders album list page', () => {
    render(<AlbumList />);
    const textElement = screen.getByText(/List/i);
    expect(textElement).toBeInTheDocument();
  });

  it('renders a list', async () => {
    render(<AlbumList />);
    await waitFor(() => screen.findByText('Brassed Froth!'));
    expect(screen.getByText('Brassed Froth!')).toBeInTheDocument();
  });

})


