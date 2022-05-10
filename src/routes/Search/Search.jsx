import React, {useState} from 'react';
import AlbumTable from '../../components/AlbumTable/AlbumTable';
import ArtistTable from '../../components/ArtistTable/ArtistTable';
import TrackTable from '../../components/TrackTable/TrackTable';
import FrothDataService from '../../services/froth';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const [tracks, setTracks] = useState([]);

    const onChangeSearchText = e => {
        setSearchTerm(e.target.value);
    }

    const searchForText = () => {
        FrothDataService.search(searchTerm)
            .then(response => {
                setAlbums(response.data.albumResults);
                setArtists(response.data.artistResults);
                setTracks(response.data.trackResults);
            })
            .catch(err => {
                console.error('FDS returned an derror from Search:', err);
            });
    };

    return (
        <main className="container">
            <h2>Search</h2>
            <form>
                <div className='input-group mb-3'>
                    <input
                        className='form-control'
                        type='search'
                        placeholder='Search for artist, track or album'
                        aria-label='Search for artist, track or album'
                        aria-describedby='search-button'
                        onChange={onChangeSearchText}
                    />
                    <button
                        className='btn btn-outline-secondary'
                        type='button'
                        id='search-button'
                        onClick={searchForText}
                    >
                        Search
                    </button>
                </div>
            </form>
            {albums && albums.length > 0 ? (
                <div className='my-2'>
                    <AlbumTable data={albums} />
                </div>
            ) : null}
            {artists && artists.length > 0 ? (
                <div className='my-2'>
                    <ArtistTable data={artists} />
                </div>
            ) : (null)}
            {tracks && tracks.length > 0 ? (
                <div className='my-2'>
                    <TrackTable data={tracks} />
                </div>
            ) : (null)}
        </main>
    );
};

export default Search;
