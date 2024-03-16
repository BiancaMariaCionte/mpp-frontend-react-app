





// function Profile()
// {
//     const user = {
//         name: "Kuromi",
//         imageUrl: 'src/images/8c4623da192acf6673b7dc56ed58cb01.jpg',
//         imageSize: 150
//     };

//     const products = [
//         {title: 'Cabbage', isFruit: false, id: 1},
//         {title: 'Apple', isFruit: true, id: 2},
//         {title: 'Garlic', isFruit: false, id: 3}
//     ];

//     const listItems = products.map(product =>
//         <li key={product.id}
//         className="fruits"
//         style={{
//             color:product.isFruit?'purple':'pink'
//         }}>
//             {product.title}
//             </li>
//         );

//     return(
//         <>
//         <h1>{user.name}</h1>
//         <img 
//             className="avatar" /* here we giv ethe photo a name that we use in the css file to style the photo */
//             src={user.imageUrl} /* here we put the actual photo */
//             alt={'Photo of ' + user.name } /* alternativ ename, in case the photo is not available */
//             style={{        /* the size of the image*/
//                 width: user.imageSize,
//                 height:user.imageSize
//             }}
//             />
//             <ul>{listItems}</ul>
           
//         </>
//     );

// }

// export default Profile