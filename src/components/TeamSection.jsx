import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import photo1 from '../assets/Rectangle 193.png';
import photo2 from '../assets/Rectangle 193 (1).png';
import photo3 from '../assets/Rectangle 193 (2).png';


// Team member data
const teamMembers = [
  {
    name: 'Wilson John',
    role: 'MARKETING LEAD',
    image: photo1
  },
  {
    name: 'Bob Thomas',
    role: 'MARKETING LEAD',
    image: photo2
  },
  {
    name: 'Bob Thomas',
    role: 'MARKETING LEAD',
    image: photo3
  },
  {
    name: 'Bob Thomas',
    role: 'MARKETING LEAD',
    image: photo1
  }
];

// Styled Components
const TeamCard = styled(Card)(({ theme }) => ({
  background: 'white',
  borderRadius: '15px',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
  }
}));

const TeamImage = styled('img')({
  width: '100%',
  height: '350px',
  objectFit: 'cover',
  display: 'block'
});

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(12, 0),
  marginBottom: theme.spacing(8),
  background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
}));

const TeamSection = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <HeroSection>
        <Box sx={{ width: '100%', px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
          <Typography 
            component="span" 
            sx={{ 
              color: 'primary.main',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: 3
            }}
          >
            OUR TEAM MEMBER
          </Typography>
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              fontWeight: 700,
              marginBottom: 4,
              color: '#2B2D42',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Our Experienced Team
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.8,
              fontSize: '1.125rem'
            }}
          >
            EHR systems centralize patient information, allowing secure access and sharing of
            medical records. They enhance caremedical records. They enhance care
          </Typography>
        </Box>
      </HeroSection>

      {/* Team Cards */}
      <Box sx={{ width: '100%', px: { xs: 2, sm: 4, md: 6, lg: 8 }, pb: 12 }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TeamCard elevation={0}>
                <TeamImage
                  src={member.image}
                  alt={member.name}
                />
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                      fontWeight: 700,
                      marginBottom: 1.5,
                      color: '#2B2D42',
                      fontSize: '1.25rem'
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="subtitle2"
                    sx={{ 
                      color: 'primary.main',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    {member.role}
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TeamSection;