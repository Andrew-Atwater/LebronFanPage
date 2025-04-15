import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const achievements = {
  nba: [
    { title: 'NBA Championships', count: '4', years: '2012, 2013, 2016, 2020' },
    { title: 'NBA Finals MVP', count: '4', years: '2012, 2013, 2016, 2020' },
    { title: 'NBA MVP', count: '4', years: '2009, 2010, 2012, 2013' },
    { title: 'All-Star Selections', count: '19', years: '2005-2023' },
    { title: 'All-NBA First Team', count: '13', years: '2006, 2008-2018, 2020' },
  ],
  records: [
    'NBA All-Time Leading Scorer (38,652+ points)',
    'First player to reach 10,000+ points, rebounds, and assists',
    'Most All-NBA Team selections (19)',
    'Only player with 30,000 points, 10,000 rebounds, and 10,000 assists',
    'Youngest player to reach every major scoring milestone',
  ],
  international: [
    { title: 'Olympic Medals', details: '2 Gold (2008, 2012), 1 Bronze (2004)' },
    { title: 'Team USA Career', details: '2004-2012' },
  ]
};

const Achievements: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Career Achievements
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
              <Typography variant="h4" gutterBottom color="primary">
                NBA Achievements
              </Typography>
              <Grid container spacing={2}>
                {achievements.nba.map((achievement, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Paper elevation={2} sx={{ p: 2, backgroundColor: 'rgba(85, 37, 131, 0.05)' }}>
                      <Typography variant="h6" color="primary">
                        {achievement.title}
                      </Typography>
                      <Typography variant="body1">
                        Count: {achievement.count}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Years: {achievement.years}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
              <Typography variant="h4" gutterBottom color="primary">
                NBA Records
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {achievements.records.map((record, index) => (
                  <Typography component="li" variant="body1" key={index} sx={{ mb: 1 }}>
                    {record}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom color="primary">
                International Career
              </Typography>
              <Grid container spacing={2}>
                {achievements.international.map((achievement, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Paper elevation={2} sx={{ p: 2, backgroundColor: 'rgba(253, 185, 39, 0.05)' }}>
                      <Typography variant="h6" color="secondary">
                        {achievement.title}
                      </Typography>
                      <Typography variant="body1">
                        {achievement.details}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Achievements; 