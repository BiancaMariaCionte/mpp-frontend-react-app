import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='title'>ChoreoVerse</div>

                <div className='links'>
                    <div>
                        <Link to='/' className='link'> {/*creates a Link component that navigates to the root route '/' when clicked */}
                            List classes
                        </Link>
                    </div>

                    <div>
                        <Link to='/addMoveClass' className='link'>
                            Add class
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export { Header };
