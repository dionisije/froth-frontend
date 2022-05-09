import React, {useState} from 'react';

const Search = () => {
    const [searchText, setSearchText] = useState('');

    const onChangeSearchText = e => {
        setSearchText(e.target.value);
    }
    const searchForText = () => {
        console.log(searchText);
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
        </main>
    );
};

export default Search;
