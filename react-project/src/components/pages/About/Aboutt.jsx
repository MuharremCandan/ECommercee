import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        FIRAT ÜNİVERSİTESİ YAZILIM MÜHENDİSLİĞİ
      </Typography>
      <Typography variant="h5" component="div">
        E-TİCARET SİTESİ EKİBİMİZ
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        ELAZIĞ
      </Typography>
      <Typography variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href='/Contact'>İLETİŞİM</Button>
    </CardActions>
  </React.Fragment>
);

export default function About() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}