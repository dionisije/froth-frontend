import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import FrothDataService from '../../services/froth';


const Detail = () => {
    let { albumId }  = useParams();
    let imageUrl = albumId ? `http://frothmusic.co.uk/frothmusic/images/covers/${albumId.toLowerCase()}.jpg` : '';

    const [albumTracks, setAlbumTracks] = useState([]);

    useEffect(() => {
        retrieveAlbumDetail(albumId);
    }, [albumId]);

    const retrieveAlbumDetail = id => {
        FrothDataService.getAlbum(id)
        .then(response => {
            console.log(response.data);
            setAlbumTracks(response.data);
        })
            .catch(err => {
                console.error('FDS returned an error:', err);
            });
    };

    return (
        <main className='container col-xxl-8 px-4 py-5'>
            {albumTracks.length > 0 && (
                <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                    <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                        <div className='col-10 col-sm-8 col-lg-6'>
                            <h2>{albumTracks[0].Album}</h2>
                            <h6>{albumTracks[0].Catalogue}</h6>
                            <ol>
                                {albumTracks.map(track => <li key={track._id}>{track.Artist} - {track.Name}</li>)}
                            </ol>
                        </div>
                        <div className='col-lg-6'>
                            <img
                                src={`${imageUrl}`}
                                className='d-block mx-lg-auto img-fluid'
                                alt={`Album cover for ${albumId}`}
                                width={500}
                                height={500}
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Detail;
