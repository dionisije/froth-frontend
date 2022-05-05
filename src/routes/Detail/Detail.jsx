import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import TrackTable from '../../components/TrackTable/TrackTable';
import FrothDataService from '../../services/froth';


const Detail = () => {
    let { albumId }  = useParams();
    let imageUrl = './froth-frontend/public/logo512.png';
    const regex = /^DVD((CD)|(RM))R?\d\d?$/;

    if (albumId && regex.test(albumId)) {
        imageUrl = `http://frothmusic.co.uk/frothmusic/images/covers/${albumId.toLowerCase()}.jpg`;
    }

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
        <main className='container' data-testid='detail'>
            {albumTracks.length > 0 && (
                <>
                    <div className='row align-items-center'>
                        <div className='col-md mx-5 my-2'>
                            <img
                                src={`${imageUrl}`}
                                className='d-block mx-md-auto img-fluid'
                                alt={`Album cover for ${albumId}`}
                                width={400}
                                height={400}
                                loading='lazy'
                            />
                        </div>
                        <div className='col-md mx-5 my-2'>
                            <h1>{albumTracks[0][0].Album}</h1>
                        </div>
                    </div>
                    <div className='row align-items-center mx-5 my-2'>
                        <TrackTable data={albumTracks} />
                    </div>
                </>
            )}
        </main>
    );
};

export default Detail;
