import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function SingleReviewCard({ item }) {
    return (
        <div className='card-diiiiv-full'>
            <div className='row card-diiiiv'>
                <div className=' col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                    <div className='card-header-text-div'>
                        <div className='author-img-div'>
                            <img className='author-img' src={item.avatar} alt='' />
                        </div>
                        <div>
                            {" "}
                            <h5>{item.user_name}</h5>
                            <p className='cust-name'>Customer</p>
                        </div>
                    </div>
                </div>
                <div className=' col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'></div>
            </div>

            <div className='card-ptext'>
                <p>
                    {item.comment}
                </p>
                <div>
                    <Stack spacing={1}>
                        <Rating name="size-small" defaultValue={2} size="small" />

                    </Stack>
                </div>
            </div>
        </div>
    )
}
