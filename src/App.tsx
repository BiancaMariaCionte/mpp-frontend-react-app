import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoveClass } from './models/MoveClass';
import { UsersContextProvider } from './contexts/UsersContext';
import { DisplayMovesPage } from './pages/Display Data Page/DisplayMovePage';
import { AddUserPage } from './pages/Add User Page/AddUserPage';
import { EditUserPage } from './pages/Edit User Page/EditUserPage';
import { Layout } from './components/layout/Layout';
import { InstructorsInfoPage } from './pages/Instructors Info Page/InstructorsInfoPage';



let demoClass1: MoveClass = new MoveClass(1,'Kathleen Carm','dance class - Bada Lee, Smoker','https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK','intermediate');
let demoClass2: MoveClass = new MoveClass(2, 'LEIA','dance class - NewJeans, Super Shy','https://youtu.be/ChXfwacbkwI?si=NvDiEB0VY75_dzsp', 'advanced');
let demoClass3: MoveClass = new MoveClass(3, 'Ellen','dance class - BlackPink, Shut Down','https://youtu.be/-Y_n2RxTXyc?si=Edj9QeiDGoEhGgRc', 'intermediate');
let demoClass4: MoveClass = new MoveClass(4, 'LEIA','dance class- KAI, Rover','https://youtu.be/tsHebpUKrOA?si=iVLs6Sjj9_IOEY2n', 'intermediate');
let demoClass5: MoveClass = new MoveClass(5, 'Aloha','dance class- LESSERAFIM, Easy','https://youtu.be/hG96IxiWnzs?si=OOdEmwAnjpuZqbt9', 'intermediate');
let demoClass6: MoveClass = new MoveClass(6, 'Kathleen Carm','dance class- NMIX, Dash','https://youtu.be/1wpE4ZJWQ5Q?si=A0XOzsh7uV93TUxD', 'advanced');
let demoClass7: MoveClass = new MoveClass(7, 'Kathleen Carm','dance class- Stray Kids, LALALALA','https://youtu.be/euaGRK-ZylM?si=ZWkG1b9vEU6IVXwK', 'intermediate');
let demoClass8: MoveClass = new MoveClass(8, 'Kathleen Carm','dance class- TXT, Chasing that feeling','https://youtu.be/KpM2r-OYWWQ?si=a_RNIogtcb4MnE56', 'intermediate');


function App() {
    let [moveClasses, setMoveClasses] = useState<MoveClass[]>([demoClass1,demoClass2,demoClass3,demoClass4,demoClass5,demoClass6,demoClass7,demoClass8]);

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

    useEffect(() => { //useEffect hook <- logs the current state of users to the console whenever the component re-renders
        console.log(moveClasses);
    });

    return (
        <UsersContextProvider userContext={{ moveClasses, addMoveClass, removeMoveClass }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DisplayMovesPage />}/>
                    <Route path='/instructors' element={<InstructorsInfoPage/>}/>
                    <Route path='/addMoveClass' element={<AddUserPage />} />
                    <Route path='/editMoveClass/:userId' element={<EditUserPage/>} />
                </Routes>
            </BrowserRouter>
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