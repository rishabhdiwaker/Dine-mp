import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card>
            <CardMedia sx={{height:345}} image='https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600' />

            <CardContent>
                <Typography variant='h5'>
                    Indian Fast Food
                </Typography>
                <Typography variant='body2'>
                    50% off on your first order
                </Typography>
                <Typography variant='py-2 space-y-2'>
                    <p>{"Mumbai"}</p>
                    <p className='text-sm text-blue-500'>Jan 05, 2025 12:00 AM</p>
                    <p className='text-sm text-red-500'>Jan 15, 2025 12:00 AM</p>
                </Typography>
            </CardContent>
           {false && <CardActions>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </CardActions> }
        </Card>
      
    </div>
  )
}

export default EventCard
