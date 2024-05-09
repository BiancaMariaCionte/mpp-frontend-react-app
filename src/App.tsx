import './App.css';

import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import {Suspense, useEffect, useState} from 'react';
import {MoveClass} from './models/MoveClass';
import {UsersContextProvider} from './contexts/UsersContext';
//import { DisplayMovesPage } from './pages/Display Data Page/DisplayMovePage';
//import { AddUserPage } from './pages/Add User Page/AddUserPage';
//import { EditUserPage } from './pages/Edit User Page/EditUserPage';
import {Layout} from './components/layout/Layout';
import {InstructorsInfoPage} from './pages/Instructors Info Page/InstructorsInfoPage';
import {DisplayIndividualMovesPage} from './pages/Display Data Page/DisplayIndividualClass';
import React from 'react';

import LoadingPage from './pages/Loading Page/LoadingPage';
import ChartPage from './pages/Chart Page/ChartPage';
import {PagingContextProvider} from './contexts/PagingContext';
import {getAllMoveClasses} from './services/MoveClassService';

const DisplayUsersPage = React.lazy(
    () => import('./pages/Display Data Page/DisplayMovePage'),
);
const AddUserPage = React.lazy(
    () => import('./pages/Add User Page/AddUserPage'),
);
const EditUserPage = React.lazy(
    () => import('./pages/Edit User Page/EditUserPage'),
);

const pageSize = 4;

function App() {
    const [moveClasses, setMoveClasses] = useState<MoveClass[]>([]);
    let [currentUsers, setCurrentUsers] = useState<MoveClass[]>([]);
    let [currentPage, setCurrentPage] = useState<number>(1);

    const [backendData, setBackendData] = useState([{}]);

    // const [moveClassesItems, setMoveClassesItems] = useState<MoveClass[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/moves');
            const data = await res.json();
            console.log('BE response', data);
            setMoveClasses(data);
        };
        fetchData();
    }, []);

    // useEffect(() => {
    //     fetch('/api/moveClasses')
    //         .then((response) => {
    //             console.log(response); // Log the entire response
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data); // Log the parsed JSON data
    //             setBackendData(data.moveClasses);
    //             setCurrentUsers(data.moveClasses.slice(0, pageSize));
    //         })
    //         .catch((error) =>
    //             console.error('Error fetching moveClasses:', error),
    //         );
    // }, []);

    useEffect(() => {
        // getAllMoveClasses().then((res) => {
        //     setBackendData(res);
        //     setCurrentUsers(res.slice(0, pageSize));
        // });
        // fetch('/api/moveClasses')
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data); // Log the parsed JSON data
        //         setBackendData(data); // Set the backendData state with the fetched data
        //         setCurrentUsers(data.slice(0, pageSize)); // Set the currentUsers state with the fetched data
        //     })
        //     .catch((error) =>
        //         console.error('Error fetching moveClasses:', error),
        //     );
    }, []);

    // useEffect(() => {
    //     fetch('/api/moveClasses')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data); // Log the received data
    //             if (Array.isArray(data.moveClasses)) {
    //                 setMoveClasses(data.moveClasses);
    //             } else {
    //                 console.error(
    //                     'Invalid response format: moveClasses array not found',
    //                 );
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching moveClasses:', error);
    //         });
    // }, []);

    const addMoveClass = (newMoveClass: MoveClass) => {
        setMoveClasses((prevState: MoveClass[]) => [
            ...prevState,
            newMoveClass,
        ]);
        setCurrentUsers((prevCurrentUsers) => [
            ...prevCurrentUsers,
            newMoveClass,
        ]);
        // The function spreads the prevState into a new array using the spread operator (...prevState)
        // This creates a shallow copy of the previous state array
        // newUser parameter is then appended to the end of this new array using array concatenation
        // setUsers function is called to update the state variable "users"
    };

    // !! By passing a function to setUsers, React ensures that the state update is based on the most up-to-date state value.
    //    This helps especially in scenarios where multiple state updates may occur in rapid succession.

    // !!  setUsers function is used to update the state in an "immutable" way by creating a new array with the added user

    const removeMoveClass = (userId: number) => {
        setMoveClasses((prevState: MoveClass[]) =>
            prevState.filter((user) => user.getId() !== userId),
        );
        setCurrentUsers((prevCurrentUsers) =>
            prevCurrentUsers.filter(
                (moveClass) => moveClass.getId() !== userId,
            ),
        );
        // prevState.filter() is used to create a new array containing only the elements of the prevState array that meet the specified condition
        // the state is updated immutably by returning a new array that contains only the users that were not removed
        // This ensures that the original users array remains unchanged
    };

    // useEffect(() => {
    //     console.log(moveClasses);
    // });

    useEffect(() => {
        console.log(moveClasses);
    }, []);

    return (
        <UsersContextProvider
            userContext={{moveClasses, addMoveClass, removeMoveClass}}
        >
            <PagingContextProvider
                pagingContext={{
                    currentUsers,
                    setCurrentUsers,
                    currentPage,
                    setCurrentPage,
                    pageSize: pageSize,
                }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path='/loading' element={<LoadingPage />} />
                        <Route
                            path='/'
                            element={
                                <Suspense fallback={<LoadingPage />}>
                                    <DisplayUsersPage />
                                </Suspense>
                            }
                        ></Route>

                        <Route
                            path='/instructors'
                            element={<InstructorsInfoPage />}
                        />

                        <Route
                            path='/moveClass/:userId'
                            element={<DisplayIndividualMovesPage />}
                        />
                        <Route
                            path='/addMoveClass'
                            element={
                                <Suspense fallback={<LoadingPage />}>
                                    <AddUserPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path='/editMoveClass/:userId'
                            element={
                                <Suspense fallback={<LoadingPage />}>
                                    <EditUserPage />
                                </Suspense>
                            }
                        />
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
