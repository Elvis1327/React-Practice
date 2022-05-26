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
        speed={1000}
        spaceBetween={0}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          390: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          600: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1000: {
            slidesPerView: 5,
            slidesPerGroup: 5
          }
        }}
      >
        {rickData.map((res: Result) => (
            <>
              <SwiperSlide key={res.id}>
              <img 
                src={res.image} 
                alt="ok" 
                className='_rick-image'
              />
              </SwiperSlide>
            </>
          ))}
      </Swiper>
        
    </section>
  )
}
