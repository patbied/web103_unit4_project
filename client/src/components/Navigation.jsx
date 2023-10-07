import React from 'react'
import '../App.css'
import '../css/Navigation.css'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
         
        <nav>
            <ul>
                <li><strong>Overwatch Character Creator</strong></li>
            </ul>
            <ul>
            <div className='navContainer'>
                <Link role='button' to='/'>Home</Link>
                <Link role='button' to='/create-character'>Create Character</Link>
                </div>
            </ul>
        </nav>
        
    )
}

export default Navigation