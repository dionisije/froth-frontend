import React, {useEffect, useState} from 'react';
import FrothDataService from '../services/froth';

const AlbumList = () => {
    const [albumTitles, setAlbumTitles] = useState([]);

    useEffect(() => {
        retrieveAlbumTitles()
    }, []);

    const retrieveAlbumTitles = () => {
        FrothDataService.getAll()
            .then(response => {
                console.log(response.data);
                setAlbumTitles(response.data);
            })
            .catch(err => {
                console.error('FDS returned an error:', err);
            });
    };

    return (
        <>
            <p>List of albums here...</p>
            <ol>
                {albumTitles ? (
                    albumTitles.map(album => <li key={album._id}>{album.Album}</li>)
                ) : null}
            </ol>
        </>
    );
};

export default AlbumList;