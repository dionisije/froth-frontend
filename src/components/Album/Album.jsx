import React from 'react';
import {NavLink} from 'react-router-dom';
// import Thumbnail from '../images/record.svg';

const imageUri = 'http://frothmusic.co.uk/frothmusic/images/covers/';

const Album = ({_id, Name, Catalogue}) => {
    const imgUrl = `${imageUri}${Catalogue.toLowerCase()}.jpg`;

    return (
        <NavLink to={`/albums/${_id}`}>
            <div className='col'>
                <div className='card shadow-sm'>
                    <img 
                        className='img-thumbnail'
                        src={imgUrl}
                        alt={Name}
                    />
                    <div className='card-body'>{Name}</div>
                </div>
            </div>
        </NavLink>
    );
}

export default Album;
