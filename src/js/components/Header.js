import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/policies'>Policies</Link></li>
                <li><Link to='/news'>News & Updates</Link></li>
                <li><Link to='/advantage'>The Broadway Advantage</Link></li>
                <li><Link to='/faculty'>Faculty</Link></li>
                <li><Link to='/calendar'>Calendar</Link></li>
                <li><Link to='/curriculum'>Curriculum</Link></li>
                <li><Link to='/summer'>Summer Programs</Link></li>
                <li><Link to='/nutcracker'>Nutcracker Ballet</Link></li>
                <li><Link to='/companies'>Dance Companies</Link></li>
                <li><Link to='/musicals'>Musical Theater</Link></li>
                <li><Link to='/scholarship'>Angel Scholarship</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </nav>
    </header>
}

export default Header;