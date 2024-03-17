import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCardPropsType } from '../../types/UserCardProps.types';
import './UserCard.css';

export function UserCard({ givenUser, removeMethod }: UserCardPropsType) {
    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(() => {
        // Fetch YouTube thumbnail URL
        const videoId = extractVideoId(givenUser.getYoutubeUrl());
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; // Medium quality thumbnail
        setThumbnailUrl(thumbnailUrl);
    }, [givenUser.getYoutubeUrl()]);

    const handleCardOnClick = () => {
        navigate('/editMoveClass/' + givenUser.getId());
    };

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
        <div className='card' data-testid='user-card' onClick={handleCardOnClick}>
            <button className='remove-button' 
                    data-testid='remove-button'
                    onClick={handleRemoveButtonClick}>
                X
            </button>

            <div className='card-info'
                    data-testid='card-info'>
                {/* Thumbnail */}
                {thumbnailUrl && (
                    <div className="thumbnail-container">
                        <img src={thumbnailUrl} alt="YouTube Thumbnail" />
                    </div>
                )}

                {/* Display user information */}
                <div className='user-info'>
                    <div className='instructor-name'><b>Instructor's Name:</b> {givenUser.getInstructorName()}</div>
                    <div className='type'><b>Type:</b> {givenUser.getType()}</div>
                    <div className='youtubeUrl'><b>YouTube Link:</b> <a href={givenUser.getYoutubeUrl()} target='_blank' rel='noopener noreferrer'>{givenUser.getYoutubeUrl()}</a></div>
                    <div className='dificulty'><b>Difficulty:</b> {givenUser.getDificulty()}</div>
                </div>
            </div>

            {/* Confirmation modal */}
            {showConfirmation && (
                <div className="confirmation-modal">
                    <p>Are you sure you want to delete this dance class?</p>
                    <button onClick={handleConfirmDelete}>Yes</button>
                    <button onClick={handleCancelDelete}>No</button>
                </div>
            )}
        </div>
    );
}

// Helper function to extract video ID from YouTube URL
function extractVideoId(url: string): string {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : '';
}




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