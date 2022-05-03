import React from 'react';
import {Outlet} from 'react-router-dom';
import AlbumList from '../../components/AlbumList/AlbumList';

const Albums = () => (
    <main className="container">
        <h2>Albums</h2>
        <AlbumList />
        <Outlet />
    </main>
);

export default Albums;
