import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import FrothDataService from '../../services/froth';
import Album from '../../components/Album/Album';

const Albums = () => {
    const [streamingTitles, setStreamingTitles] = useState([]);
    const [classicTitles, setClassicTitles] = useState([]);
    const [originalTitles, setOriginalTitles] = useState([]);

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
                console.error('FDS returned an error from Albums:', err);
            });
    };
    
    return (
        <main className='container'>
            <h2>Albums</h2>
            <div className='album bg-dark'>
                {streamingTitles ? (
                    <>
                        <h3>Streaming series...</h3>
                        <div className='container'>
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 pb-5 g-3'>
                                {streamingTitles.map(album => (
                                    <NavLink to={`/albums/${album.Catalogue}`} key={album._id}>
                                        <Album {...album} />
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </>
                ) : null}
                {classicTitles ? (
                    <>
                        <h3>Classic series...</h3>
                        <div className='container'>
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 pb-5 g-3'>
                                {classicTitles.map(album => (
                                    <NavLink to={`/albums/${album.Catalogue}`} key={album._id}>
                                        <Album {...album} />
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </>
                ) : null}
                {originalTitles ? (
                    <>
                        <h3>Original series...</h3>
                        <div className='container' data-testid="original">
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 pb-5 g-3'>
                                {originalTitles.map(album => (
                                    <NavLink to={`/albums/${album.Catalogue}`} key={album._id}>
                                        <Album {...album} />
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
            <Outlet />
        </main>
    );
};

export default Albums;