import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductCardLoader() {

    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
                navigation={false}
                autoplay={{ delay: 500, disableOnInteraction: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    // Define your breakpoints here
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}>
                <SwiperSlide key={'1'}>
                    <Skeleton variant="rectangular" width={210} height={118} />

                    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide key={'2'}>
                    <Skeleton variant="rectangular" width={210} height={118} />

                    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide key={'3'}>
                    <Skeleton variant="rectangular" width={210} height={118} />

                    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </SwiperSlide>


                <SwiperSlide key={'4'}>
                    <Skeleton variant="rectangular" width={210} height={118} />

                    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </SwiperSlide>


                <SwiperSlide key={'5'}>
                    <Skeleton variant="rectangular" width={210} height={118} />

                    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </SwiperSlide>


                <SwiperSlide key={'6'}>
                    <Skeleton variant="rectangular" width={210} height={118} />

                    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </SwiperSlide>


                <SwiperSlide key={'7'}>
                    <Skeleton variant="rectangular" width={210} height={118} />

                    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </SwiperSlide>


                <SwiperSlide key={'8'}>
                    <Skeleton variant="rectangular" width={210} height={118} />

                    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
