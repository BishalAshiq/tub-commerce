"use client"
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '@/utils/axios';
// import { Autocomplete } from '@mantine/core';

const AutoCompleteSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

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

    const handleClickOutside = (event) => {
        if (autoCompleteRef.current && !autoCompleteRef.current.contains(event.target)) {
            setSearchResults([]);
        }
    };


    return (
        <form className='nav-search-input-form d-flex' role='search'>
            <div className='nav-search-input-div' ref={autoCompleteRef}>
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

            <div className='nav-search-input-btn ms-2' type='submit'>
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
            <div className='ms-2'>
                <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0526123" width="42" height="43.8947" rx="6.63158" fill="url(#paint0_linear_366_2069)" />
                    <path d="M29.6055 25C29.6033 24.3997 29.421 23.8139 29.0823 23.3183C28.7436 22.8227 28.264 22.4401 27.7055 22.22L29.5755 15.22C29.6145 15.0709 29.6186 14.9148 29.5874 14.7639C29.5562 14.613 29.4905 14.4713 29.3955 14.35C29.2983 14.2363 29.1769 14.1459 29.0402 14.0853C28.9035 14.0247 28.7549 13.9956 28.6055 14H14.9055L14.5755 12.74C14.5181 12.5269 14.3918 12.3388 14.2164 12.2049C14.0409 12.0711 13.8261 11.999 13.6055 12H11.6055V14H12.8355L15.3155 23.26C15.3741 23.4782 15.5048 23.6701 15.6864 23.8044C15.868 23.9388 16.0897 24.0077 16.3155 24H26.6055C26.8707 24 27.125 24.1054 27.3126 24.2929C27.5001 24.4804 27.6055 24.7348 27.6055 25C27.6055 25.2652 27.5001 25.5196 27.3126 25.7071C27.125 25.8947 26.8707 26 26.6055 26H13.6055C13.3403 26 13.0859 26.1054 12.8984 26.2929C12.7108 26.4804 12.6055 26.7348 12.6055 27C12.6055 27.2652 12.7108 27.5196 12.8984 27.7071C13.0859 27.8947 13.3403 28 13.6055 28H14.7855C14.621 28.4531 14.5682 28.9392 14.6314 29.4171C14.6946 29.895 14.8721 30.3506 15.1488 30.7454C15.4255 31.1401 15.7932 31.4624 16.2208 31.6849C16.6485 31.9074 17.1234 32.0235 17.6055 32.0235C18.0875 32.0235 18.5625 31.9074 18.9901 31.6849C19.4178 31.4624 19.7855 31.1401 20.0622 30.7454C20.3388 30.3506 20.5163 29.895 20.5795 29.4171C20.6428 28.9392 20.5899 28.4531 20.4255 28H22.7855C22.6358 28.4126 22.5784 28.853 22.6175 29.2902C22.6565 29.7274 22.791 30.1507 23.0115 30.5302C23.232 30.9098 23.5331 31.2363 23.8935 31.4868C24.2539 31.7373 24.665 31.9056 25.0975 31.98C25.5301 32.0543 25.9738 32.0328 26.3971 31.917C26.8205 31.8012 27.2133 31.5939 27.5478 31.3097C27.8823 31.0255 28.1504 30.6714 28.3332 30.2723C28.5159 29.8732 28.6089 29.4389 28.6055 29C28.6036 28.4834 28.4656 27.9764 28.2055 27.53C28.6331 27.2604 28.9856 26.8871 29.2304 26.4448C29.4751 26.0025 29.6042 25.5055 29.6055 25ZM25.6955 22H17.1055L15.4455 16H27.3055L25.6955 22ZM17.6055 30C17.4077 30 17.2143 29.9414 17.0499 29.8315C16.8854 29.7216 16.7573 29.5654 16.6816 29.3827C16.6059 29.2 16.5861 28.9989 16.6247 28.8049C16.6633 28.6109 16.7585 28.4328 16.8984 28.2929C17.0382 28.153 17.2164 28.0578 17.4104 28.0192C17.6044 27.9806 17.8054 28.0004 17.9882 28.0761C18.1709 28.1518 18.3271 28.28 18.4369 28.4444C18.5468 28.6089 18.6055 28.8022 18.6055 29C18.6055 29.2652 18.5001 29.5196 18.3126 29.7071C18.125 29.8947 17.8707 30 17.6055 30ZM25.6055 30C25.4077 30 25.2143 29.9414 25.0499 29.8315C24.8854 29.7216 24.7573 29.5654 24.6816 29.3827C24.6059 29.2 24.5861 28.9989 24.6247 28.8049C24.6633 28.6109 24.7585 28.4328 24.8984 28.2929C25.0382 28.153 25.2164 28.0578 25.4104 28.0192C25.6044 27.9806 25.8054 28.0004 25.9882 28.0761C26.1709 28.1518 26.3271 28.28 26.4369 28.4444C26.5468 28.6089 26.6055 28.8022 26.6055 29C26.6055 29.2652 26.5001 29.5196 26.3126 29.7071C26.125 29.8947 25.8707 30 25.6055 30Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_366_2069" x1="-2.45652e-07" y1="22.1099" x2="42" y2="22.1099" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#02D4B6" />
                            <stop offset="1" stop-color="#1663F9" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>

        </form>
    )

};

export default AutoCompleteSearch;
