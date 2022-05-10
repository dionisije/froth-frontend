import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import DiscTable from '../../components/DiscTable/DiscTable';
import StreamTable from '../../components/StreamTable/StreamTable';
import FrothDataService from '../../services/froth';


const Detail = () => {
    let { albumId }  = useParams();
    let imageUrl = './froth-frontend/public/logo512.png';
    const isStreamingRegex = /DVDPL\d+/;
    const isStreamingTitle = albumId && isStreamingRegex.test(albumId);
    const isCatalogueRegex = /^DVD((CD)|(CDR)|(PL))?\d\d?$/;

    if (albumId && isCatalogueRegex.test(albumId)) {
        imageUrl = `http://frothmusic.co.uk/frothmusic/images/covers/${albumId.toLowerCase()}.jpg`;
    }

    const [albumTracks, setAlbumTracks] = useState([]);

    useEffect(() => {
        const retrieveAlbumDetail = id => {
            if (!isStreamingTitle) {
                FrothDataService.getAlbum(id)
                    .then(response => {
                        setAlbumTracks(response.data);
                    })
                    .catch(err => {
                        console.error('FDS returned an error from Detail:', err);
                    });
            } else {
                setAlbumTracks([]);
            }
        };

        retrieveAlbumDetail(albumId);
    }, [albumId, isStreamingTitle]);


    return (
        <main className='container' data-testid='detail'>
            {isStreamingTitle ? (
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
                            <h1>{albumId}</h1>
                        </div>
                        <StreamTable data={albumId} />
                    </div>
                </>
            ) : (
                (albumTracks && albumTracks.length > 0) && (
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
                            <DiscTable data={albumTracks} />
                        </div>
                    </>
                )
            )}
        </main>
    );
};

export default Detail;
