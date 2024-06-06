'use client';

import { useState } from 'react';

export default function LikeButton({ likes, onClick }) {
    return (
        <button likes={likes} onClick={onClick} >👍</button>
    );
}

