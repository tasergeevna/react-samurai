import React from "react";

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useContext } from "react";
import {StateContext} from "../redux/state";

export default function Profile(props) {
  const state = useContext(StateContext);

  return (
    <Card sx={{ minWidth: 200 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20px"}}>
      <Avatar alt="User avatar" src= {state.user.pic} />
      <CardContent >
        <Typography textAlign="center"
            variant="h6"
            Wrap
            color="black"
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
         {state.user.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
        {state.user.info}
        </Typography>
        <Typography variant="body2">
          {state.user.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show More</Button>
      </CardActions>
    </Card>
  );
}

