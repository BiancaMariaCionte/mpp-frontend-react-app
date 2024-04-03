import './App.css';

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { MoveClass } from './models/MoveClass';
import { UsersContextProvider } from './contexts/UsersContext';
//import { DisplayMovesPage } from './pages/Display Data Page/DisplayMovePage';
//import { AddUserPage } from './pages/Add User Page/AddUserPage';
//import { EditUserPage } from './pages/Edit User Page/EditUserPage';
import { Layout } from './components/layout/Layout';
import { InstructorsInfoPage } from './pages/Instructors Info Page/InstructorsInfoPage';
import { DisplayIndividualMovesPage } from './pages/Display Data Page/DisplayIndividualClass';
import React from 'react';

import LoadingPage from './pages/Loading Page/LoadingPage';
import ChartPage from './pages/Chart Page/ChartPage';
import { PagingContextProvider } from './contexts/PagingContext';


const DisplayUsersPage = React.lazy(() => import('./pages/Display Data Page/DisplayMovePage'));
const AddUserPage = React.lazy(() => import('./pages/Add User Page/AddUserPage'));
const EditUserPage = React.lazy(() => import('./pages/Edit User Page/EditUserPage'));



let demoClass1: MoveClass = new MoveClass(1,'Kathleen Carm','dance class - Bada Lee, Smoker','https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK',7);
let demoClass2: MoveClass = new MoveClass(2, 'LEIA','dance class - NewJeans, Super Shy','https://youtu.be/ChXfwacbkwI?si=NvDiEB0VY75_dzsp', 7);
let demoClass3: MoveClass = new MoveClass(3, 'Ellen','dance class - BlackPink, Shut Down','https://youtu.be/-Y_n2RxTXyc?si=Edj9QeiDGoEhGgRc', 8);
let demoClass4: MoveClass = new MoveClass(4, 'LEIA','dance class- KAI, Rover','https://youtu.be/tsHebpUKrOA?si=iVLs6Sjj9_IOEY2n', 8);
let demoClass5: MoveClass = new MoveClass(5, 'Aloha','dance class- LESSERAFIM, Easy','https://youtu.be/hG96IxiWnzs?si=OOdEmwAnjpuZqbt9', 6);
let demoClass6: MoveClass = new MoveClass(6, 'Kathleen Carm','dance class- NMIX, Dash','https://youtu.be/1wpE4ZJWQ5Q?si=A0XOzsh7uV93TUxD', 9);
let demoClass7: MoveClass = new MoveClass(7, 'Kathleen Carm','dance class- Stray Kids, LALALALA','https://youtu.be/euaGRK-ZylM?si=ZWkG1b9vEU6IVXwK', 5);
let demoClass8: MoveClass = new MoveClass(8, 'Kathleen Carm','dance class- TXT, Chasing that feeling','https://youtu.be/KpM2r-OYWWQ?si=a_RNIogtcb4MnE56', 5);



const pageSize = 4;

function App() {
    let [moveClasses, setMoveClasses] = useState<MoveClass[]>([demoClass1,demoClass2,demoClass3,demoClass4,demoClass5,demoClass6,demoClass7,demoClass8]);
   // const [filteredMoveClasses, setFilteredMoveClasses] = useState<MoveClass[]>([]);

    let [currentUsers, setCurrentUsers] = useState<MoveClass[]>(moveClasses.slice(0, pageSize));
    let [currentPage, setCurrentPage] = useState<number>(1);

    const addMoveClass = (newMoveClass: MoveClass) => {
        setMoveClasses((prevState: MoveClass[]) => [...prevState, newMoveClass]);
        // The function spreads the prevState into a new array using the spread operator (...prevState)
        // This creates a shallow copy of the previous state array
        // newUser parameter is then appended to the end of this new array using array concatenation
        // setUsers function is called to update the state variable "users"
    };

    // !! By passing a function to setUsers, React ensures that the state update is based on the most up-to-date state value.
    //    This helps especially in scenarios where multiple state updates may occur in rapid succession.

    // !!  setUsers function is used to update the state in an "immutable" way by creating a new array with the added user

    const removeMoveClass = (userId: number) => {
        setMoveClasses((prevState: MoveClass[]) => prevState.filter((user) => user.getId() !== userId));
        // prevState.filter() is used to create a new array containing only the elements of the prevState array that meet the specified condition
        // the state is updated immutably by returning a new array that contains only the users that were not removed
        // This ensures that the original users array remains unchanged
    };



//   const[sortAscending, updateSortAscending] =useState<boolean>();

//   const sortOnClick = () => {
//     console.log("Ascending " + sortAscending);
//     console.log("Before:")
//     let copy = [...moveClasses];
//     copy.forEach((moveClass: MoveClass) => console.log(moveClass.getInstructorName()));
//     if(sortAscending === true)
//     {
//         copy.sort((n1,n2) => n1.getInstructorName().localeCompare(n2.getInstructorName()));
//         updateSortAscending(false);
//     }
//     else
//     {
//         copy.sort((n1,n2) =>  n1.getInstructorName().localeCompare(n2.getInstructorName()));
//         updateSortAscending(true);
//     }
//     setMoveClasses(copy);
//     console.log("After:")
//     copy.forEach((moveClass: MoveClass) => console.log(moveClass.getInstructorName()));}


// const filterMoveClass = (input: string) => {
//     const filteredData = moveClasses.filter((moveClass) => {
//         if (input === '') {
//             return true;
//         } else {
//             return moveClass.getInstructorName().toLowerCase().includes(input.toLowerCase());
//         }
//     });
//     setFilteredMoveClasses(filteredData);
// };

// useEffect(() => {
//     console.log(moveClasses);
// });

useEffect(() => {
    console.log(moveClasses);
}, []);


    return (
        <UsersContextProvider userContext={{ moveClasses, addMoveClass, removeMoveClass }}>
         <PagingContextProvider pagingContext={{ currentUsers, setCurrentUsers, currentPage, setCurrentPage, pageSize: pageSize }}>
            <BrowserRouter>
                <Routes>
                <Route path='/loading' element={<LoadingPage />} />
                    <Route path='/'
                     element={ <Suspense fallback={<LoadingPage />}>
                     <DisplayUsersPage />
                 </Suspense>}> 
                    </Route>
                   
                    <Route path='/instructors' element={<InstructorsInfoPage/>}/>
                
                    <Route path='/moveClass/:userId' element={<DisplayIndividualMovesPage/>}/>
                    <Route path='/addMoveClass'
                     element={ <Suspense fallback={<LoadingPage />}>
                     <AddUserPage />
                 </Suspense>} />
                    <Route path='/editMoveClass/:userId' 
                    element={ <Suspense fallback={<LoadingPage />}>
                    <EditUserPage />
                </Suspense>} />
                <Route path='/chart' element={<ChartPage />} />
                <Route path='*' element={<Navigate to={'/'} />} />
                </Routes>
            </BrowserRouter>
            </PagingContextProvider>
        </UsersContextProvider>
    );
}

export default App;



// import { useState } from 'react';
// import './App.css';
// import MyButton from './components/MyButton';
// import { MoveClass } from './models/MoveClass';
// import { moveClasses } from './models/data';



// function App() {
//     //here we use the Message React component that we created

//     const [count, setCount] = useState(0);
//     // we'll get 2 things from useState: 
//     // - the CURRENT STATE (count)
//     // - the function that lets us UPDATE the state (setCount)

//     // the first time the button is clicked, the count will be 0
//     // because we passed 0 to the useState()
    
//     // when we want to change the state, we call setCount() and pass the new value to it

//     function handleClick()
//     {
//         setCount(count +1);
//         alert('You clicked Kuromi!');
//     }

//     const listClasses = moveClasses.map(move =>
//         <li key={move.id}>
//             <p>
//                 <b>{move.instructorName}:</b>
//                 {' ' + move.type + ' ' + move.dificulty + ' ' }
//                     YoutubeLink: {move.youtubeUrl}
//             </p>
//         </li>);
   
//     return (
//     <div>
//         <h1>Welcome to my app</h1>
//         <ul>{listClasses}</ul>
//         {/*
//         <MyButton count={count} onClick={handleClick}/>
//         <MyButton count={count} onClick={handleClick}/> */}
//       { /* <Profile/>*/}
//     </div>
//     );
   
// }

// export default App;