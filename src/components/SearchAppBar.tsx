import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { MoveClass } from '../models/MoveClass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// export default function SearchAppBar({ moveClasses }: { moveClasses: MoveClass[] })
//  {
//   const [searchText, setSearchText] = useState(''); // State for storing search text

//   // Handler function for updating search text
//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(event.target.value);
//   };

//  // Filter moveClasses based on search text
//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       // Filter moveClasses based on search text
//       const filteredMoveClasses = moveClasses.filter((moveClass) =>
//         Object.values(moveClass).some((value) =>
//           value.toString().toLowerCase().includes(searchText.toLowerCase())
//         )
//       );
//       // Perform any action with the filteredMoveClasses, for example, updating the UI
//       console.log(filteredMoveClasses);
//     }
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Toolbar>
//         <Typography
//           component="div"
//           sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//         >
//         </Typography>
//         <Search>
//           <SearchIconWrapper>
//             <SearchIcon />
//           </SearchIconWrapper>
//           <StyledInputBase
//             placeholder="Search…"
//             inputProps={{ 'aria-label': 'search' }}
//             value={searchText}
//             onChange={handleSearchChange}
//             //onClick={handleKeyDown}
//             onKeyDown={handleKeyDown}
//           />
//         </Search>
//       </Toolbar>
//     </Box>
//   );
// }

interface SearchAppBarProps {
  moveClasses: MoveClass[];
  onSearch: (searchText: string) => void;
}

const SearchAppBar: React.FC<SearchAppBarProps> = ({ moveClasses, onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    onSearch(searchText); // Call the onSearch function passed from the Header
};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearchChange}
          />
        </Search>
      </Toolbar>
    </Box>
  );
};

export default SearchAppBar;

// const SearchAppBar = ({posts, setSearchTest}) =>
// {

//   const handleSubmit = (e) => e.preventDefault()
//   const handleSearchChange = (e) => {
//     if(!e.target.value)
//     return setSearchTest(posts)
//   const resultArray = posts.filter(post => post.title.includes(e.target.value))
//   }

//   return(
//     <header>
//       <form className='search'
//       onSubmit={handleSubmit}>
//         <input className='search__input'
//         type="text"
//         id="search"
//         onChange={handleSearchChange}
//         />
//         <button className='search__button'>
//           <FontAwesomeIcon icon={faMagnifyingGlass}/>
//         </button>

//       </form>
//     </header>

//   )
// }















































// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
// import { useState } from 'react';
// import { MoveClass } from '../models/MoveClass';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function SearchAppBar({ moveClasses }: { moveClasses: MoveClass[] }) {
//     const [searchText, setSearchText] = useState(''); // State for storing search text

//     // Handler function for updating search text
//     const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setSearchText(event.target.value);
//     };
  
//     // Filter moveClasses based on search text
//     const filteredMoveClasses = moveClasses.filter((moveClass) =>
//       Object.values(moveClass).some((value) =>
//         value.toString().toLowerCase().includes(searchText.toLowerCase())
//       )
//     );
//   return (
//     <Box sx={{ flexGrow: 1 }}>
    
//         <Toolbar>
          
//           <Typography
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
        
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         </Toolbar>
      
//     </Box>
//   );
// }