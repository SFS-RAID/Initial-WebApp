
'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
    const router = useRouter();

    const navigateToHome = () => {
        router.push('/');
    };
    return (
        <div className="container mx-auto mt-20">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md text-white">
                <div className="text-3xl font-bold mb-4">About Us</div>
                <div className="text-lg mb-6">
                    This app is created for learning HTML and web development. Explore and have fun while you learn!
                </div>
                <button onClick={navigateToHome}>Home</button>
            </div>
        </div>
    );
};

export default AboutPage;