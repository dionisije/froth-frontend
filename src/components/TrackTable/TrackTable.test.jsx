import { render, screen } from '@testing-library/react';
import TrackTable from './TrackTable';

const props = [
    [
        {
            "_id": "6262d2b04957cd7f41a00a5f",
            "Name": "Breadfan",
            "Artist": "Budgie",
            "Album": "2x2 = Froth²",
            "Time": 363,
            "Disc": 1,
            "Disc Count": 4,
            "Track": 1,
            "Track Count": 21,
            "Year": 2017,
            "Catalogue": "DVDCD44",
            "Order": 44.1,
            "Comment": ""
        }
    ]
];

render(<TrackTable data={props} />);

it('renders a track table', () => {
    expect(screen.queryAllByRole('row')).toHaveLength(2);
});
