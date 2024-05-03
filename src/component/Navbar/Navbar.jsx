"use client";
import React, { useEffect, useState } from "react";
import NavImg from "../../../public/tubLogo.png";
import Image from "next/image";
import Link from "next/link";
import AutoCompleteSearch from "./AutoCompleteSearch";
import axiosInstance from "@/utils/axios";
import { Skeleton } from "@mui/material";

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const category = localStorage.getItem("category");
            if (category == null) {
                axiosInstance.get("/categories/featured").then((res) => {
                    setCategories(res.data.data);
                    localStorage.setItem("category", JSON.stringify(res.data.data));

                });
            } else {
                setCategories(JSON.parse(category));
            }

        }


        axiosInstance.get("/brands").then((res) => {
            setBrands(res.data.data);
        });
    }, []);

    return (
        <div className=''>
            <div className='fixed-top'>
                <nav className='navbar navbar-expand-lg navbar-full-div'>
                    <div className='container '>
                        <div className='sssasd'>
                            <Link href='/'>
                                <div className='nav-tag-img-div'>
                                    <img className='NavImage' src={NavImg.src} alt='' />
                                    <p className='Nav-TUB'>TUB</p>
                                </div>
                            </Link>
                        </div>
                        <button
                            className='navbar-toggler for-mob-nav'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div
                            className='collapse navbar-collapse nav-routes-div'
                            id='navbarSupportedContent'>
                            <ul className='navbar-nav  mb-lg-0'>
                                <li className='nav-item'>
                                    <Link
                                        className='nav-link active'
                                        aria-current='page'
                                        href='/'>
                                        Home
                                    </Link>
                                </li>

                                <li className='nav-item dropdown'>
                                    <a
                                        className='nav-link dropdown-toggle'
                                        href='#'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'>
                                        New Arrival
                                    </a>
                                    <ul className='dropdown-menu'>
                                        <li>
                                            <a className='dropdown-item' href='/'>
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='/'>
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className='dropdown-divider' />
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='/'>
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a className='nav-link dropdown-toggle'
                                        href='#'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'>
                                        Category

                                    </a>

                                    <ul className='dropdown-menu'>
                                        {categories.length > 0 &&
                                            categories.map((item, i) => (
                                                <li>
                                                    <a className='dropdown-item' href='/'>
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}

                                    </ul>




                                </li>
                                <li className='nav-item dropdown'>
                                    <a className='nav-link dropdown-toggle'
                                        href='#'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'>
                                        Brand

                                    </a>

                                    <ul className='dropdown-menu'>
                                        {brands.length > 0 &&
                                            brands.map((item, i) => (
                                                <li>
                                                    <a className='dropdown-item' href='/'>
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}

                                    </ul>


                                </li>
                            </ul>


                            <AutoCompleteSearch />
                        </div>
                    </div>
                </nav>
                <div className=' sec-navbar-links-acc-div '>
                    <div className='container'>
                        <div className='row '>
                            <div className='col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9'>
                                <div className='sec-navbar-links'>
                                    {categories.length > 0 ?
                                        categories.map((item, i) => (
                                            <>
                                                <Link href='/'>{item.name}</Link>
                                            </>
                                        )) :
                                        <>
                                            <Skeleton width={'10%'} variant="text" sx={{ fontSize: '1rem' }} />
                                            <Skeleton width={'10%'} variant="text" sx={{ fontSize: '1rem' }} />
                                            <Skeleton width={'10%'} variant="text" sx={{ fontSize: '1rem' }} />
                                            <Skeleton width={'10%'} variant="text" sx={{ fontSize: '1rem' }} />
                                            <Skeleton width={'10%'} variant="text" sx={{ fontSize: '1rem' }} />

                                        </>

                                    }

                                    <Link href='/'>About Us</Link>
                                    <Link href='/'>Contact Us</Link>
                                </div>
                            </div>
                            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                                <div>
                                    <Link className='sec-navbar-links-acc' href='/manageSettings'>
                                        <span>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='20'
                                                height='20'
                                                viewBox='0 0 20 20'
                                                fill='none'>
                                                <g clip-path='url(#clip0_69_2401)'>
                                                    <path
                                                        d='M10 0.000488281C4.47773 0.000488281 0 4.47734 0 10C0 15.5228 4.47729 19.9996 10 19.9996C15.5231 19.9996 20 15.5228 20 10C20 4.47734 15.5231 0.000488281 10 0.000488281ZM10 2.99047C11.8273 2.99047 13.308 4.47163 13.308 6.29804C13.308 8.12488 11.8273 9.6056 10 9.6056C8.17359 9.6056 6.69288 8.12488 6.69288 6.29804C6.69288 4.47163 8.17359 2.99047 10 2.99047ZM9.9978 17.3852C8.17535 17.3852 6.50619 16.7215 5.21875 15.6229C4.90512 15.3554 4.72415 14.9632 4.72415 14.5516C4.72415 12.6992 6.22332 11.2168 8.07608 11.2168H11.9248C13.778 11.2168 15.2715 12.6992 15.2715 14.5516C15.2715 14.9636 15.0914 15.355 14.7773 15.6225C13.4903 16.7215 11.8207 17.3852 9.9978 17.3852Z'
                                                        fill='#02AAF1'
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id='clip0_69_2401'>
                                                        <rect width='20' height='20' fill='white' />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        Account
                                        <span>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='12'
                                                height='12'
                                                viewBox='0 0 12 12'
                                                fill='none'>
                                                <path
                                                    d='M5.99997 9.42017C5.7849 9.42017 5.56987 9.33806 5.4059 9.17417L0.24617 4.01439C-0.0820565 3.68616 -0.0820565 3.154 0.24617 2.8259C0.574263 2.49781 1.10632 2.49781 1.43457 2.8259L5.99997 7.39156L10.5654 2.82606C10.8936 2.49797 11.4256 2.49797 11.7537 2.82606C12.0821 3.15416 12.0821 3.68632 11.7537 4.01455L6.59404 9.17433C6.42999 9.33824 6.21495 9.42017 5.99997 9.42017Z'
                                                    fill='#475569'
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
