import React, { useRef, useState } from 'react';
import { CardMedia, Typography, Box, Paper } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, A11y } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/effect-cards'; 
import SectionHeader from './Header/SectionHeader';

function WebsitesSection({ data }) {
  const swiperRef = useRef(null);
  const [activeSiteIndex, setActiveSiteIndex] = useState(0);

  const handleSwiperChange = (swiper) => {
    setActiveSiteIndex(swiper.activeIndex);
  };

  const handleHeaderClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const totalSlides = data.sites.length;
      const nextSlideIndex = (activeSiteIndex + 1) % totalSlides; 
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
        {data.sites.map((site, index) => (
          <SwiperSlide key={index}>
            <Paper
              id='websites'
              elevation={12}
              sx={{
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
              }}
            >
              <SectionHeader title={site.name} onClick={handleHeaderClick} />
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, paddingTop: 2 }}>
                <CardMedia
                  component="img"
                  alt={site.name}
                  image={site.imageUrl}
                  sx={{ width: 100, height: 100, borderRadius: '50%' }} 
                />
                {/* Corrected data reference */}
                <Typography variant="body1">{site.description}</Typography> 
              </Box>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default WebsitesSection;
