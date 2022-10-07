import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components'

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination,Navigation,Autoplay ,EffectCards } from "swiper";




import img from '../assets/Nfts/bighead.svg';
import imgl from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';
import img7 from '../assets/Nfts/bighead-7.svg';
import img8 from '../assets/Nfts/bighead-8.svg';
import img9 from '../assets/Nfts/bighead-9.svg';
import imgl0 from '../assets/Nfts/bighead-10.svg';

const Container = styled.div`
width: 25vw;
height: 70vh;

.swiper{
    width: 100%;
    height: 100%;

}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

}
`


const Carousel = () => {
  return (
      <Container>
          <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
          >
              <SwiperSlide>  <img src ={img} alt = "The Weardos  "/> </SwiperSlide>
              <SwiperSlide>  <img src ={img2} alt = "The Weardos  "/> </SwiperSlide>
              <SwiperSlide>  <img src ={img2} alt = "The Weardos  "/> </SwiperSlide>
              <SwiperSlide>  <img src ={img3} alt = "The Weardos  "/> </SwiperSlide>
              <SwiperSlide>  <img src ={img4} alt = "The Weardos  "/> </SwiperSlide>
              <SwiperSlide>  <img src ={img5} alt = "The Weardos  "/> </SwiperSlide>
              <SwiperSlide>  <img src ={img6} alt = "The Weardos  "/> </SwiperSlide>
              <SwiperSlide>  <img src ={img7} alt = "The Weardos  "/> </SwiperSlide>
              <SwiperSlide>  <img src={img8} alt  ="The Weardos  " /> </SwiperSlide>
              <SwiperSlide>  <img src={img9} alt  ="The Weardos  " /> </SwiperSlide>
          </Swiper>
    </Container>
  )
}

export default Carousel