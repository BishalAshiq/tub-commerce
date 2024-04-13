"use client"
import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '@/utils/axios';
// import { Autocomplete } from '@mantine/core';

const AutoCompleteSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = async (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        try {
            const response = axiosInstance.get(`/products/search?name=${term}`).then((res) => {

                setSearchResults(res.data.data);
            });

        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleSelectResult = (result) => {
        setSearchTerm(result.name);
        setSearchResults([]);
        // Do something with the selected result, like redirecting to a details page or updating state
    };

    return (
        <form className='nav-search-input-form d-flex' role='search'>
            <div className='nav-search-input-div ' 
               >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'>
                    <path
                        d='M13.1291 11.8792H12.4707L12.2374 11.6542C13.0541 10.7042 13.5457 9.47086 13.5457 8.12919C13.5457 5.13752 11.1207 2.71252 8.12907 2.71252C5.1374 2.71252 2.7124 5.13752 2.7124 8.12919C2.7124 11.1209 5.1374 13.5459 8.12907 13.5459C9.47074 13.5459 10.7041 13.0542 11.6541 12.2375L11.8791 12.4709V13.1292L16.0457 17.2875L17.2874 16.0459L13.1291 11.8792ZM8.12907 11.8792C6.05407 11.8792 4.37907 10.2042 4.37907 8.12919C4.37907 6.05419 6.05407 4.37919 8.12907 4.37919C10.2041 4.37919 11.8791 6.05419 11.8791 8.12919C11.8791 10.2042 10.2041 11.8792 8.12907 11.8792Z'
                        fill='#94A3B8'
                    />
                </svg>
                <input
                    className='nav-search-input'
                    type='search'
                    placeholder='e.g. toys'
                    value={searchTerm}
                    onChange={handleChange}
                />

            </div>
            <ul className="autocomplete-results">
                {searchResults.map((result) => (
                    <li key={result.id} onClick={() => handleSelectResult(result)}>
                        {result.name}
                    </li>
                ))}
            </ul>

            <div className='nav-search-input-btn' type='submit'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <g clip-path='url(#clip0_69_2395)'>
                        <path
                            d='M22.3468 21.0818L17.0857 15.61C18.4384 14.0019 19.1796 11.9787 19.1796 9.87238C19.1796 4.95122 15.1757 0.947388 10.2546 0.947388C5.33342 0.947388 1.32959 4.95122 1.32959 9.87238C1.32959 14.7935 5.33342 18.7974 10.2546 18.7974C12.1021 18.7974 13.8626 18.2401 15.3678 17.1823L20.6689 22.6957C20.8905 22.9258 21.1885 23.0527 21.5078 23.0527C21.8101 23.0527 22.0969 22.9374 22.3146 22.7279C22.7771 22.2828 22.7919 21.5447 22.3468 21.0818ZM10.2546 3.27565C13.8921 3.27565 16.8513 6.23486 16.8513 9.87238C16.8513 13.5099 13.8921 16.4691 10.2546 16.4691C6.61707 16.4691 3.65785 13.5099 3.65785 9.87238C3.65785 6.23486 6.61707 3.27565 10.2546 3.27565Z'
                            fill='white'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_69_2395'>
                            <rect
                                width='22.1053'
                                height='22.1053'
                                fill='white'
                                transform='translate(0.947266 0.947388)'
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </form>
    )

};

export default AutoCompleteSearch;
