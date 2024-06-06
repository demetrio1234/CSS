'use client';

import { useState } from 'react';

export default function DislikeButton({ likes, onClick }) {
    return (
        <button likes={likes} onClick={onClick}>👎</button>
    );
}