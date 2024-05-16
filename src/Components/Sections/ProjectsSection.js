import React, { useRef, useState } from 'react';
import { CardMedia, Typography, Box, Paper } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, A11y } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/effect-cards'; 
import SectionHeader from './Header/SectionHeader';

function ProjectsSection({ data }) {
  const swiperRef = useRef(null); 
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleSwiperChange = (swiper) => {
    setActiveProjectIndex(swiper.activeIndex);
  };

  const handleHeaderClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const totalSlides = data.projects.length;
      const nextSlideIndex = (activeProjectIndex + 1) % totalSlides; 
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
        {data.projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Paper id='projects' elevation={12} sx={{
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
              <SectionHeader title={project.name} onClick={handleHeaderClick} />
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, paddingTop: 2 }}>
                <CardMedia
                  component="img"
                  alt={project.name}
                  image={project.imageUrl}
                  sx={{ width: 100, height: 100, borderRadius: '50%' }} 
                />
                <Typography variant="body1">{data.projects[activeProjectIndex].description}</Typography> 
              </Box>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default ProjectsSection;
