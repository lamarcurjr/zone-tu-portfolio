import { Container, Box, Stack } from '@mui/material';
import Navbar from './Navbar';
import MessagesSection from './Sections/MessagesSection';
import WebsitesSection from './Sections/WebsitesSection';
import ProjectsSection from './Sections/ProjectsSection';
import LinksSection from './Sections/LinksSection';
import data from './Services/data';
import HomeHeader from './Sections/Header/HomeHeader';
import SettingsHeader from './Sections/Header/SettingsHeader';

function Home() {

  return (
    <>
      <HomeHeader />
      <SettingsHeader/>
      
      <Container
        style={{
          backgroundColor: '#1a1a1a',
          maxWidth: 'unset', 
          minHeight: '120vh'
        }}
      >
        <Navbar />
        <Box sx={{ height: 200 }} /> 

        <Stack 
          spacing={20} 
          sx={{
            marginLeft: {
              xs: '50px',  // Up to 600px screen width
              sm: '75px',   // 600px to 768px screen width
              md: '100px',  // 768px to 900px screen width
              lg: '150px',  // 900px and up
            }
          }}
        > 
          <Box sx={{ height: 150, width: '100%' }}>
            <MessagesSection data={data} />
          </Box>

          <Box sx={{ height: 150, width: '100%' }}>
            <WebsitesSection data={data} />
          </Box>
            
          <Box sx={{ height: 150, width: '100%' }}>
            <ProjectsSection data={data} />
          </Box>

          <Box sx={{ height: 150, width: '100%' , paddingBottom: 20}}>
            <LinksSection data={data} />
          </Box>
        </Stack>

      </Container>
    </>
  );
}

export default Home;
