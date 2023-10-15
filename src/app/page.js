
'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home(){
    const router = useRouter();

    const navigateToAbout = () => {
        router.push('/about');
    };
    return(
        <div className="container mx-auto mt-20">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md text-white">
                <div className="text-3xl font-bold mb-4">Welcome to Our Website</div>
                <div className="text-lg mb-6">
                    Explore the amazing features and content we have for you. Join our community and get started today.
                </div>
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Get Started
                </a>
                <button onClick={navigateToAbout} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Go to About Page</button>
            </div>
        </div>
    );
};