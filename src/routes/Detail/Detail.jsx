import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    let params  = useParams();
    console.log(params);

    return (
        <main className='container'>
            <h2>Detail</h2>
            <p>Album ID: {params.albumId}</p>
        </main>
    );
};

export default Detail;
