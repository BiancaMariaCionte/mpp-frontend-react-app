import { json } from 'react-router-dom';
import './Header.css';
import { AppBar, TextField } from '@mui/material';

import * as React from 'react';
import { getPosts } from '../../api/axios';
import {Link, useNavigate} from 'react-router-dom'

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import SearchAppBar from '../SearchAppBar'; 
import { MoveClass } from '../../models/MoveClass';
import { useEffect, useState } from 'react';
//import List from '../List';
import { UsersContext } from '../../contexts/UsersContext';



const pages = [
  { title: 'View classes', path: '/' }, // Add the path for View classes
  { title: 'Add class', path: '/addMoveClass' } // Add the path for Add class
];
const settings = ['Profile', 'Account', 'Logout'];

export function Header({ moveClasses }: { moveClasses: MoveClass[]}) {


  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);



  // useEffect(()=>{
  //   getPosts().then(json => {
  //     setFilteredClasses(json)
  //     return json
  //   }).then(json => {
  //     setSearchText(json)
  //   })

  // },[])



  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const[moveClass, setMoveClasses] =useState<MoveClass[]>(moveClasses);

  // const handleSort = () => {
  //   const sortedClasses = [...moveClasses].sort((a, b) => {
  //     const nameA = a.getInstructorName().toUpperCase();
  //     const nameB = b.getInstructorName().toUpperCase();
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   setMoveClasses(sortedClasses);
  // };



  // useEffect(() => {
  //   setSearchText(moveClasses);
  // }, []);

  //Handler function for updating search text
  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchText(event.target.value);
  //   //handleKeyDown(event);
  // };

  
  // Filter moveClasses based on search text
  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //     // Filter moveClasses based on search text
  //     const filteredMoveClasses = moveClasses.filter((moveClass) =>
  //       Object.values(moveClass).some((value) =>
  //         value.toString().toLowerCase().includes(searchText.toLowerCase())
  //       )
  //     );
  //     // Perform any action with the filteredMoveClasses, for example, updating the UIs
  //     console.log(filteredMoveClasses);
    
  // };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     // Filter moveClasses based on search text
//     const filteredMoveClasses = moveClasses.filter((moveClass) =>
//       Object.values(moveClass).some((value) =>
//         value.toString().toLowerCase().includes(searchText.toLowerCase())
//       )
//     );
//     // Perform any action with the filteredMoveClasses, for example, updating the UI
//     console.log(filteredMoveClasses);
  
// };

// const[sortAscending, updateSortAscending] =useState<boolean>();
// let [moveClassess, setMoveClasses] = useState<MoveClass[]>(moveClasses);

// const sortOnClick = () => {
//   console.log("Ascending " + sortAscending);
//   console.log("Before:")
//   let copy = [...moveClassess];
//   copy.forEach((moveClass: MoveClass) => console.log(moveClass.getInstructorName()));
//   if(sortAscending === true)
//   {
//       copy.sort((n1,n2) => n1.getInstructorName().localeCompare(n2.getInstructorName()));
//       updateSortAscending(false);
//   }
//   else
//   {
//       copy.sort((n1,n2) =>  n1.getInstructorName().localeCompare(n2.getInstructorName()));
//       updateSortAscending(true);
//   }
//   setMoveClasses(copy);
//   console.log("After:")
//   copy.forEach((moveClass: MoveClass) => console.log(moveClass.getInstructorName()));}


// const [inputText, setInputText] = useState("");

//   let inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     //convert input text to lower case
//     var lowerCase = event.target.value.toLowerCase();
//     setInputText(lowerCase);
//   };

const usersContext = React.useContext(UsersContext)!;
//he ! operator asserts that the value returned by useContext(UsersContext) is not null or undefined



  return (    
    <AppBar position='static' sx={{ backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #ccc' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenNavMenu}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">Dance classes</MenuItem>
          <MenuItem onClick={handleCloseNavMenu} component={Link} to="/instructors">Instructors</MenuItem>
          <MenuItem onClick={handleCloseNavMenu} component={Link} to="/chart">Chart</MenuItem>
        </Menu>
          <StarBorderIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link} // Use Link component for navigation
            to="/" // Set the root path for navigation
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '"Helvetica Neue"',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.7rem'
            
            }}
            data-testid="header-test-id"
          >
            CHOREOVERSE
          </Typography>

          {/* <Button
            // onClick={handleSort}
            sx={{ my: 2, color: 'white', display: 'flex', alignItems:'center' }}
          >
            Sort by Instructor
          </Button> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <StarBorderIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link} // Use Link component for navigation
            to="/" // Set the root path for navigation
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: '"Helvetica Neue"',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.7rem'
            }}
          >
            CHOREOVERSE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                component={Link} // Use Link component for navigation
                to={page.path} // Set the path for navigation
                sx={{ my: 2, color: 'white', display: 'flex', alignItems:'center' }}
              >
                {page.title === 'Add class' && <AddIcon sx={{ mr: 1 }} />} {/* Add icon for 'Add class' page */}
                {page.title}
              </Button>
          

            ))}
          </Box>

              <Box>
              <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          // onChange={inputHandler}
        />
        
      {/* <List input={inputText} /> */}
    
              </Box>
              
          {/* <SearchAppBar moveClasses={filteredClasses} onSearch={handleSearchChange} /> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Photo" src="src\images\0700368C-1803-48E7-9A17-E72F4CDAC037.JPG" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <div>
                        <Link to='/chart' className='link'>
                            Chart
                        </Link>
                    </div> */}
          
        </Toolbar>
        
      </Container>
    </AppBar>
 
  )}






// import { Link } from 'react-router-dom';

// import './Header.css';
// import { AppBar } from '@mui/material';
// import MyComponent from '../../styles/styles';

// const Header = () => {
//     return (    
//         <AppBar position='relative'>
//             <div className='header' data-testid='header-test-id'>
//                 <nav className='navbar'>
//                     <MyComponent className='title'>ChoreoVerse</MyComponent>

//                     <div className='links'>
//                         <div>
//                             <Link to='/' className='link'> {/*creates a Link component that navigates to the root route '/' when clicked */}
//                                 List classes
//                             </Link>
//                         </div>

//                         <div>
//                             <Link to='/addMoveClass' className='link'>
//                                 Add class
//                             </Link>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </AppBar>
//     );
// };

// export { Header };

