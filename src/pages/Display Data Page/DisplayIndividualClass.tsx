import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UsersContext } from '../../contexts/UsersContext';
import { Layout } from '../../components/layout/Layout';
import { MoveClass } from '../../models/MoveClass';
import { Avatar, Divider, Typography } from '@mui/material';

export function DisplayIndividualMovesPage() {
    document.title = 'Move Class Details';

    const navigate = useNavigate();
    const usersContext = useContext(UsersContext)!;

    const { userId } = useParams();
    if (!userId) {
        navigate('/');
        return;
    }

    const givenUser = usersContext.moveClasses.find((user: MoveClass) => user.getId() === parseInt(userId));

    if (!givenUser) {
        return <Typography variant="h6" style={{ color: 'white' }}>Move class not found.</Typography>;
    }

    return (
        <Layout>
            <div className='main-page-container'>
                <div className='user-form'>
                    <Typography variant="h4" gutterBottom style={{ color: 'white' }}>Move Class Details</Typography>
                    <Divider />
                    <div>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: 'white' }}>ID:</Typography>
                        <Typography style={{ color: 'white' }}>{givenUser.getId()}</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: 'white' }}>Instructor Name:</Typography>
                        <Typography style={{ color: 'white' }}>{givenUser.getInstructorName()}</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: 'white' }}>Type:</Typography>
                        <Typography style={{ color: 'white' }}>{givenUser.getType()}</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: 'white' }}>YouTube URL:</Typography>
                        <Typography style={{ color: 'white' }}>{givenUser.getYoutubeUrl()}</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: 'white' }}>Difficulty:</Typography>
                        <Typography style={{ color: 'white' }}>{givenUser.getDificulty()}</Typography>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
