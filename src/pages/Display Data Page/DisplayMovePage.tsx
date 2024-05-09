import {useContext, useEffect, useState} from 'react';
import {Button} from '../../components/button/Button';
import {Layout} from '../../components/layout/Layout';
import {PagingContext} from '../../contexts/PagingContext';
import {UsersContext} from '../../contexts/UsersContext';
import {UserCard} from '../../features/Display Users/UserCard';
import './DisplayMovePage.css';

export function DisplayMovesPage() {
    document.title = 'ChoreoVerse';

    let [isAscending, setIsAscending] = useState<boolean>(true);
    let [showNext, setShowNext] = useState<boolean>(true);
    let [usersCount, setUsersCount] = useState<number>(0);
    let [isLoading, setIsLoading] = useState<boolean>(true);

    const usersContext = useContext(UsersContext)!;
    const pagingContext = useContext(PagingContext)!;
    const moveClassesArray: any[] = usersContext.moveClasses;
    const removeMethod = usersContext.removeMoveClass;
    const {
        currentUsers,
        setCurrentPage,
        setCurrentUsers,
        currentPage,
        pageSize,
    } = pagingContext;

    // // Sorting logic
    // useEffect(() => {
    //     const sortedUsers = [...moveClassesArray];
    //     sortedUsers.sort(
    //         (firstUser, secondUser) =>
    //             firstUser.getDificulty() - secondUser.getDificulty(),
    //     );
    //     if (!isAscending) sortedUsers.reverse();
    //     setCurrentUsers(sortedUsers.slice(0, currentPage * pageSize)); // Update current users after sorting
    // }, [isAscending, moveClassesArray, currentPage, pageSize]);

    // Sorting logic
    useEffect(() => {
        const sortedMoves = [...moveClassesArray];
        console.log('sorted moves', sortedMoves);

        sortedMoves.sort((firstMove, secondMove) => {
            // Assuming 'difficulty' is the property to sort by
            return isAscending
                ? firstMove.difficulty - secondMove.difficulty
                : secondMove.difficulty - firstMove.difficulty;
        });
        setCurrentUsers(sortedMoves.slice(0, currentPage * pageSize)); // Update current users after sorting
    }, [isAscending, moveClassesArray, currentPage, pageSize]);

    // Pagination logic
    useEffect(() => {
        if (currentPage * pageSize >= moveClassesArray.length) {
            setShowNext(false);
        } else {
            setShowNext(true);
        }
    }, [currentPage, moveClassesArray, pageSize]);

    const handleOnClick = () => {
        const nextPage = moveClassesArray.slice(
            currentPage * pageSize,
            (currentPage + 1) * pageSize,
        );
        setCurrentUsers([...currentUsers, ...nextPage]);
        setCurrentPage(currentPage + 1);
    };

    return (
        <Layout>
            <div className='main-page-container'>
                <Button
                    type='button'
                    onClick={() => setIsAscending(!isAscending)}
                    buttonMessage={'Ascending/Descending'}
                />
                <div className='users-list' data-testid='users-list'>
                    {currentUsers.map((moveClss) => (
                        <UserCard
                            givenUser={moveClss}
                            removeMethod={removeMethod}
                            key={moveClss._id}
                        />
                    ))}
                </div>

                {showNext ? (
                    <>
                        <div>
                            {currentPage * pageSize} out of{' '}
                            {moveClassesArray?.length}
                        </div>
                        <Button
                            onClick={handleOnClick}
                            type='button'
                            buttonMessage='Show more'
                        />
                    </>
                ) : (
                    <div>
                        {moveClassesArray?.length} out of{' '}
                        {moveClassesArray?.length}
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default DisplayMovesPage;

// // import React, { useContext, useEffect, useState } from 'react';
// // import { MoveClass } from '../../models/MoveClass';
// // import { UserCard } from '../../features/Display Users/UserCard';
// // import { Layout } from '../../components/layout/Layout';
// // import { UsersContext } from '../../contexts/UsersContext';
// // import { PagingContext } from '../../contexts/PagingContext';
// // import { Button } from '../../components/button/Button';

// // function DisplayMovesPage() {
// //     const usersContext = useContext(UsersContext)!;
// //     const pagingContext = useContext(PagingContext)!;

// //     const moveClassesArray: MoveClass[] = usersContext.moveClasses;
// //     const removeMethod = usersContext.removeMoveClass;

// //     const { currentUsers, setCurrentPage, setCurrentUsers, currentPage, pageSize } = pagingContext;

// //     const [showNext, setShowNext] = useState<boolean>(true);

// //     // Sorting logic
// //     const [isAscending, setIsAscending] = useState<boolean>(true);

// //     useEffect(() => {
// //         const sortedUsers = [...currentUsers];
// //         sortedUsers.sort((firstUser, secondUser) => firstUser.getDificulty() - secondUser.getDificulty());
// //         if (!isAscending) sortedUsers.reverse();
// //         setCurrentUsers(sortedUsers);
// //     }, [isAscending]);

// //     // Pagination logic
// //     useEffect(() => {
// //         if (currentPage * pageSize >= moveClassesArray.length) {
// //             setShowNext(false);
// //         } else {
// //             setShowNext(true);
// //         }
// //     }, [currentPage, moveClassesArray.length, pageSize]);

// //     const handleOnClick = () => {
// //         const nextPage = moveClassesArray.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
// //         setCurrentUsers([...currentUsers, ...nextPage]);
// //         setCurrentPage(currentPage + 1);
// //     };

// //     return (
// //         <Layout>
// //             <div className='main-page-container'>
// //                 <Button type='button' onClick={() => setIsAscending(!isAscending)} buttonMessage={'Ascending/Descending'} />
// //                 <div className='users-list' data-testid='users-list'>
// //                     {currentUsers.map((moveClass) => (
// //                         <UserCard givenUser={moveClass} removeMethod={removeMethod} key={moveClass.getId()} />
// //                     ))}
// //                 </div>
// //                 {showNext ? (
// //                     <>
// //                         <div>
// //                             {currentPage * pageSize} out of {moveClassesArray.length}
// //                         </div>
// //                         <Button onClick={handleOnClick} type='button' buttonMessage='Show more' />
// //                     </>
// //                 ) : (
// //                     <div>
// //                         {moveClassesArray.length} out of {moveClassesArray.length}
// //                     </div>
// //                 )}
// //             </div>
// //         </Layout>
// //     );
// // }

// // export default DisplayMovesPage;

// import { useContext, useEffect, useState } from 'react';

// import { MoveClass } from '../../models/MoveClass';
// import { UserCard } from '../../features/Display Users/UserCard';
// import { Layout } from '../../components/layout/Layout';
// import { UsersContext } from '../../contexts/UsersContext';

// import './DisplayMovePage.css';
// import { useLocation } from 'react-router-dom';
// import { PagingContext } from '../../contexts/PagingContext';
// import { Button } from '../../components/button/Button';

// export function DisplayMovesPage() {
//     document.title = 'ChoreoVerse';

//     const usersContext = useContext(UsersContext)!;
//     const pagingContext = useContext(PagingContext)!;

//     const moveClassesArray: MoveClass[] = usersContext.moveClasses;

//     const removeMethod = usersContext.removeMoveClass;

//     const { currentUsers, setCurrentPage, setCurrentUsers, currentPage, pageSize } = pagingContext;

//     const [isAscending, setIsAscending] = useState<boolean>(true);
//     const [showNext, setShowNext] = useState<boolean>(true);

//     //he ! operator asserts that the value returned by useContext(UsersContext) is not null or undefined

//     // let currentUsers: MoveClass[] = pagingContext.currentUsers;
//     // let setCurrentPage = pagingContext.setCurrentPage;
//     // let setCurrentUsers = pagingContext.setCurrentUsers;
//     // let currentPage = pagingContext.currentPage;
//     // let pageSize = pagingContext.pageSize;

//      // sorting
//      useEffect(() => {
//        console.log("Before sorting:", currentUsers);
//         const sortedUsers = [...currentUsers]; // Create a copy of currentUsers array
//         currentUsers.sort((firstUser, secondUser) => firstUser.getDificulty() - secondUser.getDificulty());

//         if (!isAscending) sortedUsers.reverse();
//         console.log("After sorting:", sortedUsers);
//         setCurrentUsers(sortedUsers);
//     }, [isAscending]);

//       //  initial setup of current users
//     // useEffect(() => {
//     //     setCurrentUsers(moveClassesArray.slice(0, pageSize));
//     //     setCurrentPage(currentPage + 1);
//     // }, []);

//     // useEffect(() => {
//     //     console.log('Component rerendered');
//     // }, [rerender]);

//     // const handleOnClick = () => {
//     //     console.log(currentPage * pageSize, (currentPage + 1) * pageSize);
//     //     const nextPage = moveClassesArray.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

//     //     setCurrentUsers([...currentUsers, ...nextPage]);
//     //     setCurrentPage(currentPage + 1);
//     // };

//     const handleOnClick = () => {
//         const nextPage = moveClassesArray.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
//         setCurrentUsers([...currentUsers, ...nextPage]);
//         setCurrentPage(currentPage + 1);
//     };

//     // useEffect(() => {
//     //     if (currentPage * pageSize >= moveClassesArray.length) {
//     //         setShowNext(false);
//     //         return;
//     //     }
//     // }, [currentPage]);

//      // Pagination logic
//      useEffect(() => {
//         if (currentPage * pageSize >= moveClassesArray.length) {
//             setShowNext(false);
//         } else {
//             setShowNext(true);
//         }
//     }, [currentPage, moveClassesArray.length, pageSize]);

//     return (
//         <Layout>
//             <div className='main-page-container'>
//             <Button type='button' onClick={() => setIsAscending(!isAscending)} buttonMessage={'Ascending/Descending'} />
//                 <div className='users-list' data-testid='users-list'>
//                     {currentUsers.map((moveClss) => (
//                         <UserCard givenUser={moveClss} removeMethod={removeMethod} key={moveClss.getId()} />
//                     ))}
//                 </div>

//             {showNext ? (
//                     <>
//                         <div>
//                             {currentPage * pageSize} out of {moveClassesArray.length}
//                         </div>

//                         <Button onClick={handleOnClick} type='button' buttonMessage='Show more' />
//                     </>
//                 ) : (
//                     <div>
//                         {moveClassesArray.length} out of {moveClassesArray.length}
//                     </div>
//                 )}
//             </div>
//         </Layout>
//     );
// }

// export default DisplayMovesPage
