import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';

export default function TestpointCard({logo, brand, body, onclick}) {

  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: '#2dd4bf' }}>
      <CardActionArea>
        <CardMedia
          onClick={onclick}
          component="img"
          height="140"
          image={logo}
          alt="Check your internet connection"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {brand}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}