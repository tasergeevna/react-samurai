import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Icon from '@mui/material/Icon';

import {StateContext} from "../../redux/state";
import { useContext } from 'react';

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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const NewPost = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Icon baseClassName="fas" className="fa-plus-circle" color="primary" />
    </Card>
  )
}

const Posts = () => {
  const state = useContext(StateContext);
  
  return (
    <div className="posts-container">{state.posts.map((item, index) => 
      <Post item={item} key={index}/>)}
      <NewPost />
    </div>
  )
}

export default Posts;