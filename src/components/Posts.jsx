import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import posts from "./Data";

function Post(props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.item.pic}
        alt={props.item.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Show More</Button>
      </CardActions>
    </Card>
  );
}

const Posts = () => {
  return (
    <div className="posts-container">{posts.map((item, index) => 
      <Post item={item} key={index}/>)}</div>
  )
}

export default Posts;