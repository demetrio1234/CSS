import { useState } from 'react';
import LikeButton from './like-button';

function Button({ children, color, onClick }) {
    return (
        <>
            <button onClick={onClick}
                style={{ backgroundColor: color, borderRadius: '5px', padding: '10px', fontSize: '16px', border: 'none', cursor: 'pointer' }}
            >{children}</button>
        </>
    );
}

function Header({ title }) {
    return (
        <h1>{title ? title : 'This is the title'}</h1>
    );
}

function HomePage() {
    const [title, setTitle] = useState('test');
    const [likes, setLikes] = useState(0);

    function increaseLikes() {
        setLikes(likes + 1);
    }

    function decreaseLikes() {
        setLikes(likes - 1);
    }

    return (
        <>
            <Header title={title} />
            <LikeButton />
        </>
    );
}

/*
            <Header title='Demetrio' />
            <Button children='+' color='green' onClick={increaseLikes} />
            <p style={{ display: 'inline-block', marginLeft: '5px' }}>{likes} likes</p>
            <Button children='-' color='red' onClick={decreaseLikes} />
*/