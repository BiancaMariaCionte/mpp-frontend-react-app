import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCardPropsType } from '../../types/UserCardProps.types';
import './UserCard.css';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';

export function UserCard({ givenUser, removeMethod }: UserCardPropsType) {
    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(() => {
        // Fetch YouTube thumbnail URL
        const videoId = extractVideoId(givenUser.getYoutubeUrl());
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
        setThumbnailUrl(thumbnailUrl);
    }, [givenUser.getYoutubeUrl()]);

    // const handleCardOnClick = () => {
    //     navigate('/editMoveClass/' + givenUser.getId());
    // };

    const handleRemoveButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setShowConfirmation(true);
    };

    const handleConfirmDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        removeMethod(givenUser.getId());
        setShowConfirmation(false);
    };

    const handleCancelDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setShowConfirmation(false);
    };

    return (
        <Box sx={{ width: 'calc(50% - 16px)', margin: '8px' }}>
        <Card data-testid="user-card">
        <a href={givenUser.getYoutubeUrl()} target="_blank" rel="noopener noreferrer">
        <CardMedia
            component="img"
            alt="green iguana"
            height="310"
            image={thumbnailUrl || '/static/images/cards/contemplative-reptile.jpg'}
        />
        </a>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {givenUser.getInstructorName()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {givenUser.getType()}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => navigate('/editMoveClass/' + givenUser.getId())}>
                Edit
            </Button>
            <Button size="small" onClick={handleRemoveButtonClick} data-testid="remove-button">
                Delete
            </Button>
        </CardActions>
        {/* Confirmation modal */}
        {showConfirmation && (
            <div className="confirmation-modal" data-testid="confirmation-modal">
                <p>Are you sure you want to delete this dance class?</p>
                <Button size="small" onClick={handleConfirmDelete} style={{ marginRight: '8px' }}>
                    Yes
                </Button>
                <Button size="small" onClick={handleCancelDelete}>No</Button>
            </div>
        )}
    </Card>
    </Box>
    );
}

// Helper function to extract video ID from YouTube URL
function extractVideoId(url: string): string {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : '';
}



// OLD RETURN CONTENT:

 // <div className='card' data-testid='user-card' onClick={handleCardOnClick}>
        //     <MyButtonStyled className='remove-button' 
        //             data-testid='remove-button'
        //             onClick={handleRemoveButtonClick}>
        //         X
        //     </MyButtonStyled>

        //     <div className='card-info'
        //             data-testid='card-info'>
        //         {/* Thumbnail */}
        //         {thumbnailUrl && (
        //             <div className="thumbnail-container">
        //                 <img src={thumbnailUrl} alt="YouTube Thumbnail" />
        //             </div>
        //         )}

        //         {/* Display user information */}
        //         <div className='user-info'>
        //             <div className='instructor-name'><b>Instructor's Name:</b> {givenUser.getInstructorName()}</div>
        //             <div className='type'><b>Type:</b> {givenUser.getType()}</div>
        //             <div className='youtubeUrl'><b>YouTube Link:</b> <a href={givenUser.getYoutubeUrl()} target='_blank' rel='noopener noreferrer'>{givenUser.getYoutubeUrl()}</a></div>
        //             <div className='dificulty'><b>Difficulty:</b> {givenUser.getDificulty()}</div>
        //         </div>
        //     </div>

        //     {/* Confirmation modal */}
        //     {showConfirmation && (
        //         <div className="confirmation-modal">
        //             <p>Are you sure you want to delete this dance class?</p>
        //             <MyButtonStyled onClick={handleConfirmDelete}  style={{ marginRight: '8px' }}>Yes</MyButtonStyled>
        //             <MyButtonStyled onClick={handleCancelDelete}>No</MyButtonStyled>
        //         </div>
        //     )}
        // </div>




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { UserCardPropsType } from '../../types/UserCardProps.types';

// import './UserCard.css';

// export function UserCard({ givenUser, removeMethod }: UserCardPropsType) {
//     const navigate = useNavigate();
//     const [showConfirmation, setShowConfirmation] = useState(false);

//     const handleCardOnClick = () => {
//         navigate('/editMoveClass/' + givenUser.getId());
//     };

//     const handleRemoveButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         e.stopPropagation();
//         setShowConfirmation(true);
//     };

//     const handleConfirmDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         e.stopPropagation();
//         removeMethod(givenUser.getId());
//         setShowConfirmation(false);
//     };

//     const handleCancelDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         e.stopPropagation();
//         setShowConfirmation(false);
//     };

//     return (
//         <div className='card' data-testid='user-card' onClick={handleCardOnClick}>
//             <button className='remove-button' onClick={handleRemoveButtonClick}>
//                 X
//             </button>

//             <div className='card-info'>
//                 {/* Display user information */}
//                 <div className='user-info'>
//                     {/*<div className='user-id'><b>ID:</b> {givenUser.getId()}</div>*/}
//                     <div className='instructor-name'><b>Instructor's Name:</b> {givenUser.getInstructorName()}</div>
//                     <div className='type'><b>Type:</b> {givenUser.getType()}</div>
//                     <div className='youtubeUrl'><b>YouTube Link:</b> <a href={givenUser.getYoutubeUrl()} target='_blank' rel='noopener noreferrer'>{givenUser.getYoutubeUrl()}</a></div>
//                     <div className='dificulty'><b>Difficulty:</b> {givenUser.getDificulty()}</div>
//                 </div>
//             </div>

//             {/* Confirmation modal */}
//             {showConfirmation && (
//                 <div className="confirmation-modal">
//                     <p>Are you sure you want to delete this user?</p>
//                     <button onClick={handleConfirmDelete}>Yes</button>
//                     <button onClick={handleCancelDelete}>No</button>
//                 </div>
//             )}
//         </div>
//     );
// }