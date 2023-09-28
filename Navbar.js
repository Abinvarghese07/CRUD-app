import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div >
          
            <nav>
                <div className='container'>
                <h4>Full stack</h4>
                <Link to='/adduser'>add user</Link>

                </div>
            </nav>

        </div>
    );
};

export default Navbar;
