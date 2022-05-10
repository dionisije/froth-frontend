import React, {useState} from 'react';
import AlbumTable from '../../components/AlbumTable/AlbumTable';
import FrothDataService from '../../services/froth';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const onChangeSearchText = e => {
        setSearchTerm(e.target.value);
    }
    const searchForText = () => {
        console.log(searchTerm);
        FrothDataService.searchAlbum(searchTerm)
            .then(response => {
                setSearchResults(response.data);
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
            {searchResults && searchResults.length > 0 ? (
                <div className='my-2'>
                    <AlbumTable data={searchResults} />
                </div>
            ) : (null)}
        </main>
    );
};

export default Search;
