import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Team member data
const teamMembers = [
  {
    name: 'Wilson John',
    role: 'MARKETING LEAD',
    image: '/team1.jpg'
  },
  {
    name: 'Bob Thomas',
    role: 'MARKETING LEAD',
    image: '/team2.jpg'
  },
  {
    name: 'Bob Thomas',
    role: 'MARKETING LEAD',
    image: '/team3.jpg'
  },
  {
    name: 'Bob Thomas',
    role: 'MARKETING LEAD',
    image: '/team4.jpg'
  }
];

// Styled Components
const TeamCard = styled(Card)(({ theme }) => ({
  background: 'white',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}));

const TeamImage = styled('img')({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  display: 'block'
});

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(6)
}));

const TeamSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography 
            component="span" 
            sx={{ 
              color: 'primary.main',
              fontSize: '1rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: 2
            }}
          >
            OUR TEAM MEMBER
          </Typography>
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              fontWeight: 600,
              marginBottom: 3,
              color: '#2B2D42'
            }}
          >
            Our Experienced Team
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8
            }}
          >
            EHR systems centralize patient information, allowing secure access and sharing of
            medical records. They enhance caremedical records. They enhance care
          </Typography>
        </Container>
      </HeroSection>

      {/* Team Cards */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TeamCard elevation={0}>
                <TeamImage
                  src={member.image}
                  alt={member.name}
                />
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                      fontWeight: 600,
                      marginBottom: 1,
                      color: '#2B2D42'
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="subtitle2"
                    sx={{ 
                      color: 'text.secondary',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {member.role}
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;