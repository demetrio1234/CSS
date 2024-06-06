'use client';

import { useState } from 'react';
import LikeButton from './like-button';
import DislikeButton from './dislike-button';

/*

function Button({ children, color, onClick }) {
    return (
        <>
            <button onClick={onClick}
                style={{ backgroundColor: color, borderRadius: '5px', padding: '10px', fontSize: '16px', border: 'none', cursor: 'pointer' }}
            >{children}</button>
        </>
    );
}

*/

function Header({ title }) {
    return (
        <h1>{title ? title : 'This is the title'}</h1>
    );
}

export default function HomePage() {
    const [title, setTitle] = useState('');
    const [likes, setLikes] = useState(0);

    function increaseLikes() {
        setLikes(likes + 1);
    }

    function decreaseLikes() {
        if (likes > 0)
            setLikes(likes - 1);
    }

    return (
        <>
            <Header title='Demetrio' />
            <LikeButton /* children='+' color='green' */ likes={likes} onClick={increaseLikes} />
            <p style={{ display: 'inline-block', marginLeft: '5px' }}>{likes} likes</p>
            <DislikeButton /* children='-' color='red' */ likes={likes} onClick={decreaseLikes} />
        </>
    );
}