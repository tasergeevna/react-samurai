import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Dialogues() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} style={{paddingTop: '0px'}}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" textAlign="center">
        Messages
      </Typography>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Maria Gorevaya" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Maria Gorevaya"
          secondary={
            <React.Fragment>
              {"I'll be in your neighborhood doing errands this"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tatsiana Yasiuchenia" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Tatsiana Yasiuchenia"
          secondary={
            <React.Fragment>
              {"Wish I could come, but I'm out of town this"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Maria Gorevaya" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Maria Gorevaya"
          secondary={
            <React.Fragment>
              {'Do you have Paris recommendations? Have you ever'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}