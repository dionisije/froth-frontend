import React, {useEffect, useState} from 'react';
import FrothDataService from '../services/froth';

const AlbumList = () => {
    const [originalTitles, setOriginalTitles] = useState([]);
    const [classicTitles, setClassicTitles] = useState([]);
    const [streamingTitles, setStreamingTitles] = useState([]);

    useEffect(() => {
        retrieveAlbumTitles()
    }, []);

    const retrieveAlbumTitles = () => {
        FrothDataService.getAll()
            .then(response => {
                console.log(response.data);
                setOriginalTitles(response.data.originalSeries);
                setClassicTitles(response.data.classicSeries);
                setStreamingTitles(response.data.streamingSeries);
            })
            .catch(err => {
                console.error('FDS returned an error:', err);
            });
    };

    return (
        <>
            <p>List of albums here...</p>
            {originalTitles ? (
                <>
                    <h3>Original series...</h3>
                    <ol>
                        {originalTitles.map(album => <li key={album._id}>{album.Name} ({album.Catalogue})</li>)}
                    </ol>
                </>
            ) : null}
            {classicTitles ? (
                <>
                    <h3>Classic series...</h3>
                    <ol>
                        {classicTitles.map(album => <li key={album._id}>{album.Name} ({album.Catalogue})</li>)}
                    </ol>
                </>
            ) : null}
            {streamingTitles ? (
                <>
                    <h3>Streaming series...</h3>
                    <ol>
                        {streamingTitles.map(album => <li key={album._id}>{album.Name} ({album.Catalogue})</li>)}
                    </ol>
                </>
            ) : null}
        </>
    );
};

export default AlbumList;