import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';

import {StateContext} from "../../redux/state";
import { useContext } from 'react';


export default function Contacts(props) {
  const dense = React.useState(false);
  const secondary = React.useState(false);
  const state = useContext(StateContext);

  return (
    <Box >
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" textAlign="center">
        Friends
        </Typography>
        <List dense={dense}>
          {state.friends.map((friend, key) =>
             <ListItem 
             key={key}
             secondaryAction={
             <IconButton edge="end" aria-label="delete">
                 <DeleteIcon />
             </IconButton>
             }
         >
             <ListItemAvatar>
             <Avatar alt={friend.name} src="/static/images/avatar/1.jpg"  />
             </ListItemAvatar>
             <NavLink to={`/messages/${friend.link}`}>
              <ListItemText
              primary={friend.name}
              secondary={secondary ? friend.status : null}
              />
             </NavLink>
         </ListItem>
          )}</List> 
    </Box>
  );
}