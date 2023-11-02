import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({character}: any) {
  const image = character.url_image;
  const path_image = `/${image}`;
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={path_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.nombre} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.especies}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}