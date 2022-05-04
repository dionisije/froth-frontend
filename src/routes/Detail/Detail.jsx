import React, {useEffect, useState} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FrothDataService from '../../services/froth';

const imageUri = 'http://frothmusic.co.uk/frothmusic/images/covers/';

const Detail = () => {
    const path = useLocation().pathname.split('/');
    const albumId = path[path.length - 1];

    const [albumTracks, setAlbumTracks] = useState([]);

    useEffect(() => {
        retrieveAlbumDetail(albumId);
    }, [albumId]);

    const retrieveAlbumDetail = id => {
        console.log('retrieving with', id);
        FrothDataService.getAlbum(id)
        .then(response => {
            setAlbumTracks(response.data);
        })
            .catch(err => {
                console.error('FDS returned an error:', err);
            });
    };

    let params  = useParams();

    return (
        <main className='container col-xxl-8 px-4 py-5'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                    <div className='col-10 col-sm-8 col-lg-6'>
                        <h2>Detail</h2>
                        <p>Album ID: {params.albumId}</p>
                        <ol>
                            {albumTracks.map(track => <li key={track}>{track}</li>)}
                        </ol>
                    </div>
                    <div className='col-lg-6'>
                        <img
                            src={`${imageUri}${albumId.toLowerCase()}.jpg`}
                            className='d-block mx-lg-auto img-fluid'
                            alt={`Album cover for ${albumId}`}
                            width={500}
                            height={500}
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Detail;
