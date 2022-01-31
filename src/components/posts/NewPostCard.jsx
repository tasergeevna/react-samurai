import * as React from 'react';

import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function NewPostCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card sx={{ maxWidth: 300 }}  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
           <IconButton color="primary" aria-label="upload new post" component="span" size="large" onClick={handleOpen}>
                <AddIcon fontSize="large" />
            </IconButton>
            <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Card sx={style}>
                <TextField id="outlined-basic" label="Title" defaultValue="Place for title" /> 
                <TextField id="outlined-basic" label="Post" variant="outlined" defaultValue="Write a post" sx={{ mt: 2 }} />
                <Button variant="contained">Post</Button>
            </Card>
            </Modal>
        </Card>
    )
}
