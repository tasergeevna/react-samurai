import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import interlocutors from './Interlocutors';

export default function Dialogues(props) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} style={{paddingTop: '0px'}}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" textAlign="center">
        Messages
      </Typography>
      {interlocutors.map((interlocutor, key) =>
        <ListItem alignItems="flex-start" key={key} style={{borderBottom: "1px solid  lightgrey"}}>
          <ListItemAvatar>
            <Avatar alt={interlocutor.name} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={interlocutor.name}
            secondary={
              <React.Fragment>
                {interlocutor.message}
              </React.Fragment>
            }
          />
        </ListItem> 
      )}
      </List>
  );
}