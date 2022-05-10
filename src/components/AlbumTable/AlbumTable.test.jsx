import { render, screen } from '@testing-library/react';
import AlbumTable from './AlbumTable';

const props = [
    [
        {
            "_id": "6262d2844957cd7f41a0052b",
            "Catalogue": "DVDCD12",
            "DJ": "DJ Dick",
            "Date": "",
            "Pre-comment": "",
            "Post-comment": "",
            "Name": "Froth For The Common People",
            "Order": 12,
            "Spotify": "https://open.spotify.com/embed/playlist/1LMEP5gOrYHipOxEbBqfD1?utm_source=generator"
        }
    ]
];

render(<AlbumTable data={props} />);

it('renders an album table', () => {
    expect(screen.queryAllByRole('row')).toHaveLength(2);
});
