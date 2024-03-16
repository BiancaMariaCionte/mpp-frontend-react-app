import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoveClass } from './models/MoveClass';
import { UsersContextProvider } from './contexts/UsersContext';
import { DisplayUsersPage } from './pages/Display Data Page/DisplayUsersPage';
import { AddUserPage } from './pages/Add User Page/AddUserPage';
import { EditUserPage } from './pages/Edit User Page/EditUserPage';



let demoClass1: MoveClass = new MoveClass(1,'Kathleen Carm','dance class - Bada Lee, Smoker','https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK','intermediate');
let demoClass2: MoveClass = new MoveClass(2, 'LEIA','dance class - Aespa, Drama','https://youtu.be/A_bEGrPlAOo?si=bIksDl1w-5uevLIZ', 'beginner');
let demoClass3: MoveClass = new MoveClass(3, 'Ellen','dance class - BlackPink, Shut Down','https://youtu.be/-Y_n2RxTXyc?si=Edj9QeiDGoEhGgRc', 'intermediate');
let demoClass4: MoveClass = new MoveClass(4, 'LEIA','dance class- LESSERAFIM, Smart','https://youtu.be/v4EI6cNJvTs?si=ltQFVHtCQXOTObbl', 'beginner');
let demoClass5: MoveClass = new MoveClass(5, 'Aloha','dance class- LESSERAFIM, Easy','https://youtu.be/hG96IxiWnzs?si=OOdEmwAnjpuZqbt9', 'intermediate');
let demoClass6: MoveClass = new MoveClass(6, 'Kathleen Carm','dance class- NMIX, Dash','https://youtu.be/1wpE4ZJWQ5Q?si=A0XOzsh7uV93TUxD', 'advanced');



function App() {
    let [users, setUsers] = useState<MoveClass[]>([demoClass1,demoClass2,demoClass3,demoClass4,demoClass5,demoClass6]);

    const addUser = (newUser: MoveClass) => {
        setUsers((prevState: MoveClass[]) => [...prevState, newUser]);
    };

    const removeUser = (userId: number) => {
        setUsers((prevState: MoveClass[]) => prevState.filter((user) => user.getId() !== userId));
    };

    useEffect(() => {
        console.log(users);
    });

    return (
        <UsersContextProvider userContext={{ users, addUser, removeUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DisplayUsersPage />} />
                    <Route path='/addMoveClass' element={<AddUserPage />} />
                    <Route path='/editMoveClass/:userId' element={<EditUserPage />} />
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
