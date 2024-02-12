import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardFunction({data}) {
 
  return (
    <Link to={`/product/${data._id}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <div style={{ maxHeight: '60px', overflow: 'hidden' }}>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}