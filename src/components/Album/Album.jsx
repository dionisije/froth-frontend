import React from 'react';
import AlbumImage from '../AlbumImage/AlbumImage';

const imageUri = 'http://frothmusic.co.uk/frothmusic/images/covers/';

const Album = ({_id, Name, Catalogue}) => (
    <div className='col'>
        <div className='card shadow-sm'>
            <AlbumImage
                className='img-thumbnail'
                src={`${imageUri}${Catalogue.toLowerCase()}.jpg`}
                alt={Name}
            />
            <div className='card-body'>{Name}</div>
        </div>
    </div>
);

export default Album;
