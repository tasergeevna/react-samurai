import React from "react";

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Profile = () => {
  return (
    <div className = "profile">
      <Avatar alt="Tatsiana Yasiuchenia" src="https://pbs.twimg.com/profile_images/1454384556212117508/HiRo9oxK_400x400.jpg" />
      <Typography
            textAlign="center"
            variant="h6"
            Wrap
            color="white"
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Tatsiana Yasiuchenia
          </Typography>
      <div>
        <p className="status">Здесь кипят химикаты</p>
        <p>Блабла блаблабла блаблаблабла блаблабалабла</p>
      </div>
    </div>
  )
}

export default Profile;
