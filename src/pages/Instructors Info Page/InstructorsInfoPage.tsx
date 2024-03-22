import React, { useContext } from 'react';
import { Layout } from '../../components/layout/Layout';
import { UsersContext } from '../../contexts/UsersContext';
import { InstructorCard } from '../../features/Display Instructors/InstructorCard';
import { Grid } from '@mui/material';
import instructorsData from '../../models/instructorData';

export function InstructorsInfoPage() {
    document.title = 'ChoreoVerse';

    // const usersContext = useContext(UsersContext)!;

    // // Get the array of MoveClass instances from the context
    // const usersArray = usersContext.moveClasses;

    // // Extract unique instructors based on their names
    // const uniqueInstructors = Array.from(new Set(usersArray.map(user => user.getInstructorName())));

    // // Generate InstructorCard components for each unique instructor
    // const instructorCards = uniqueInstructors.map(instructorName => {
    //     // Find the first MoveClass instance with the instructor name
    //     const user = usersArray.find(user => user.getInstructorName() === instructorName);

    //     // Retrieve instructor details
    //     const { age, experience, description, photoUrl } = user || { age: '', experience: '', description: '', photoUrl: '' };

    //     // Render the InstructorCard with the instructor details
    //     return (
    //         <InstructorCard
    //             key={instructorName} // Use instructor name as key since it's unique
    //             instructor={instructorName}
    //             age={age}
    //             experience={experience}
    //             description={description}
    //             photoUrl={photoUrl}
    //         />
    //     );
    // });

    return (
        <Layout>
             <Grid container spacing={2}>
      {instructorsData.map((instructor) => (
        <Grid item key={instructor.id} xs={12} md={8}>
          <InstructorCard
            instructor={instructor.name}
            age={instructor.age}
            experience={instructor.experience}
            description={instructor.description}
            photoUrl={instructor.photoUrl}
          />
        </Grid>
      ))}
    </Grid>
            {/* <div className='main-page-instructors-container'>
                <div className='instructors-list' data-testid='instructors-list'>
                    {instructorCards}
                </div>
            </div> */}
        </Layout>
    );
}
