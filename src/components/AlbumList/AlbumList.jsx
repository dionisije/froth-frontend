import React, {useEffect, useState} from 'react';
import FrothDataService from '../../services/froth';
import Album from '../Album/Album';

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
                setOriginalTitles(response.data.originalSeries);
                setClassicTitles(response.data.classicSeries);
                setStreamingTitles(response.data.streamingSeries);
            })
            .catch(err => {
                console.error('FDS returned an error:', err);
            });
    };
    
    return (
        <div className='album py-5 bg-dark'>
            {originalTitles ? (
                <>
                    <h3>Original series...</h3>
                    <div className='container'>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3'>
                            {originalTitles.map(album => (<Album {...album} key={album._id} />))}
                        </div>
                    </div>
                </>
            ) : null}
            {classicTitles ? (
                <>
                    <h3>Classic series...</h3>
                    <div className='container'>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3'>
                            {classicTitles.map(album => (<Album {...album} key={album._id} />))}
                        </div>
                    </div>
                </>
            ) : null}
            {streamingTitles ? (
                <>
                    <h3>Streaming series...</h3>
                    <div className='container'>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3'>
                            {streamingTitles.map(album => (<Album {...album} key={album._id} />))}
                        </div>
                    </div>
                </>
            ) : null}

        </div>
    );
};

export default AlbumList;