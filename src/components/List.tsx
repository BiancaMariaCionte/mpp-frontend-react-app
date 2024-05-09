// import { useContext } from "react";
// import moveClassData from "../models/moveClassData";
// import { MoveClass } from "../models/MoveClass";
// import { UsersContext } from "../contexts/UsersContext";
// import { Layout } from "./layout/Layout";
// import { UserCard } from "../features/Display Users/UserCard";

// interface ListProps{
//     input: string
// }

// function List(props: ListProps) {
//     //create a new array by filtering the original array
   
    
//     const usersContext = useContext(UsersContext)!;
//     //he ! operator asserts that the value returned by useContext(UsersContext) is not null or undefined

//     let usersArray: MoveClass[] = usersContext.moveClasses;

//     const removeMethod = usersContext.removeMoveClass;

//     const filteredData = usersArray.filter((el) => {
//         //if no input the return the original
//         if (props.input === '') {
//             return el;
//         }
//         //return the item which contains the user input
//         else {
//             return el.text.toLowerCase().includes(props.input)
//         }
//     })


//     return (
//         <Layout>
//         <div className='main-page-container'>
//             <div className='users-list' data-testid='users-list'>
//                 {filteredData.map((user) => (
//                     <UserCard givenUser={user} removeMethod={removeMethod} key={user.getId()} />
//                 ))}
//             </div>
//         </div>
//     </Layout>
//     )
// }

// export default List