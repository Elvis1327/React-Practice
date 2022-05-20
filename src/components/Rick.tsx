import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { Result } from '../interface/rickData';

import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


export const Rick = () => {

  const swiper = useSwiper();
  const { rickData, isLoading } = useFetch(`https://rickandmortyapi.com/api/character?page=8`);

  const slideNextButton = () => {
    swiper.slideNext();
  }

  return (
    <section className="_main-rick-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        slidesPerView={5}
        spaceBetween={0}
        onSwiper={(swiper) => console.log(swiper)}
      >
   
        {rickData.map((res: Result) => (
            <>
              <SwiperSlide key={res.id}>
              <img src={res.image} alt="ok" />
              </SwiperSlide>
            </>
          ))}
      </Swiper>
        
    </section>
  )
}
