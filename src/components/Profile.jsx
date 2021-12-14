import React from "react";

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


export default function Profile() {
  return (
    <Card sx={{ minWidth: 200 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20px"}}>
      <Avatar alt="User avatar" src="https://pbs.twimg.com/profile_images/1454384556212117508/HiRo9oxK_400x400.jpg" />
      <CardContent >
        <Typography textAlign="center"
            variant="h6"
            Wrap
            color="black"
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          Tatsiana Yasiuchenia
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
          33 y. o., Minsk
        </Typography>
        <Typography variant="body2">
          Блабла блаблабла блаблаблабла блаблабалабла
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show More</Button>
      </CardActions>
    </Card>
  );
}

