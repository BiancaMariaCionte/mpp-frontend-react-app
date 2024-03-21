import { Link } from 'react-router-dom';
import './Header.css';
import { AppBar } from '@mui/material';

import * as React from 'react';

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

const pages = [
  { title: 'View classes', path: '/' }, // Add the path for View classes
  { title: 'Add class', path: '/addMoveClass' } // Add the path for Add class
];
const settings = ['Profile', 'Account', 'Logout'];

export function Header({ moveClasses }: { moveClasses: MoveClass[] }) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

  return (    
    <AppBar position='static' sx={{ backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #ccc' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
          >
            CHOREOVERSE
          </Typography>

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

          <SearchAppBar  moveClasses={moveClasses}/> 
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

