'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import linklist from '../../components/linklist.js';

const display = () => {
    const router = useRouter();

    const navigateToHome = () => {
        router.push('/');
    };

    return(
        <div>
            <h1>SVG</h1>
            <image
            src="/design1.svg"
            alt="Art"
            priority
            >
        </div>
    )
}