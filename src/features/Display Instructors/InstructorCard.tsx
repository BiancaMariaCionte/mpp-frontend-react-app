import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, CardMedia, Button, Typography, Grid, Avatar } from '@mui/material';
import { InstructorCardPropsType } from '../../types/InstructorCardPropsType.types';

export function InstructorCard({ instructor, age, experience, description, photoUrl }: InstructorCardPropsType) {
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(() => {
        // Fetch instructor thumbnail URL (replace with actual logic to fetch image)
        const thumbnailUrl = ''; // Add logic to fetch image based on instructor
        setThumbnailUrl(thumbnailUrl);
    }, []); // Empty dependency array to run the effect only once

    return (
        <Card sx={{ width: '150%', marginBottom: '16px' }}>
            <CardContent  sx={{ paddingRight: '40px' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={3}>
                        <Avatar
                            alt={instructor}
                            src={photoUrl}
                            sx={{ width: 130, height: 130 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography gutterBottom variant="h5" component="div">
                            {instructor}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Age:</b> {age}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Years of Experience:</b> {experience}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Description:</b> {description}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                {/* Add any actions here if needed */}
            </CardActions>
        </Card>
    );
}