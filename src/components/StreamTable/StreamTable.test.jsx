import { render, screen, waitFor } from '@testing-library/react';
import StreamTable from './StreamTable';

const props = "DVDPL1";


it('renders Spotify iframe', async () => {
    render(<StreamTable data={props} />);
    await waitFor(() => {
        expect(screen.getByTestId(/DVDPL1/i)).toBeInTheDocument();
    })
});
