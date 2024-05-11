// HomePage.js
import React from 'react';
import Navbar from './Navbar';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Container } from '@mui/material';
import data from '../Services/data'; // Import your data file

function HomePage() {
  return (
    <>
      <Navbar />
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          maxWidth: 'unset',
        }}
      >
        <div id="webapps" style={{ paddingTop: '64px',paddingBottom: '64px',textAlign: 'center' }}>
          {/* Centering the WebApps text */}
          <Typography variant="h2">WebApps</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Dynamically generate cards for sites */}
            {data.sites.map((site, index) => (
              <Card key={index} style={{ maxWidth: 300, margin: '20px' }}>
                <CardActionArea component="a" href={site.url}>
                  <CardMedia
                    component="img"
                    alt={site.name}
                    height="140"
                    image={site.imageUrl} // Use imageUrl from data
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {site.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {site.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
        {/* Repeat similar structure for other sections */}
        {/* Projects Section */}
        <div id="projects" style={{ paddingBottom: '64px' }}>
          <Typography variant="h2">Projects</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Dynamically generate cards for projects */}
            {data.projects.map((project, index) => (
              <Card key={index} style={{ maxWidth: 300, margin: '20px' }}>
                <CardActionArea component="a" href={project.githubUrl}>
                  <CardMedia
                    component="img"
                    alt={project.name}
                    height="140"
                    image={project.imageUrl} // Use imageUrl from data
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
        {/* About Me Section */}
        <div id="about" style={{ paddingBottom: '64px' }}>
          <Typography variant="h2">About Me</Typography>
          <Typography variant="body1">
            {data.aboutMe.bio}
          </Typography>
        </div>
        {/* Links Section */}
        <div id="links" style={{ paddingBottom: '64px' }}>
          <Typography variant="h2">Links</Typography>
          <div>
            {/* Dynamically generate links */}
            {data.links.map((link, index) => (
              <a key={index} href={link.url}>
                <img src={link.imageUrl} alt={link.name} style={{ marginRight: '20px' }} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
