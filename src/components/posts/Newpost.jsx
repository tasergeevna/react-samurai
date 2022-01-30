import * as React from 'react';

import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

export default function NewPostCard({toggle}) {
  
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue="Place for title" />
            <TextField id="standard-basic" label="Standard" variant="standard" defaultValue="Write a post" />
        </Box>
    )
}
