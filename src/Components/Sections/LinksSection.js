import React, { useRef, useState } from 'react';
import {  Box, Paper } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, A11y } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/effect-cards'; 
import SectionHeader from './Header/SectionHeader';

function LinksSection({ data }) {
  const swiperRef = useRef(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const handleSwiperChange = (swiper) => {
    setActiveLinkIndex(swiper.activeIndex);
  };

  const handleHeaderClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const totalSlides = data.links.length;
      const nextSlideIndex = (activeLinkIndex + 1) % totalSlides; 
      swiperRef.current.swiper.slideTo(nextSlideIndex);
    }
  };

  return (
    <Box sx={{ height: 150, width: '80%' }}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        ref={swiperRef}
        onSlideChange={handleSwiperChange}
        className="my-swiper"
        cardsEffect={{ slideShadows: false }}
      >
        {data.links.map((link, index) => (
          <SwiperSlide key={index}>
            <Paper
              id='links'
              elevation={12} sx={{
              paddingBottom: 2,
              borderRadius: 2,
              mb: 8,
              backgroundColor: '#252d35',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              zIndex: 1,
              color: '#fff',
              transform: 'scale(0.9)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1)',
              },
            }}>
              <SectionHeader title={`${link.name}`} onClick={handleHeaderClick} />
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' , paddingTop: 2,}}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src={link.imageUrl} alt={link.name} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                </a>
              </Box>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default LinksSection;
