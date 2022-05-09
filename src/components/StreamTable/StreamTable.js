import React, {useEffect, useState} from 'react';
import FrothDataService from '../../services/froth';

const StreamTable = id => {
    const [spotifyUrl, setSpotifyUrl] = useState([]);

    useEffect(() => {
        retieveStream(id.data);
    }, [id])

    const retieveStream = albumId => {
        FrothDataService.getAll(albumId)
            .then(response => {
                const albumDoc = response.data.streamingSeries.find(cat => cat.Catalogue.toUpperCase() === albumId);
                setSpotifyUrl(albumDoc.Spotify);
            })
            .catch(err => {
                console.error('FDS returned an error from StreamTable:', err);
            })
    }

    return (
        <div className='container my-5'>
            <iframe
                title={id.data}
                style={{borderRadius: "12px"}}
                src={spotifyUrl}
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>
    );
};

export default StreamTable;