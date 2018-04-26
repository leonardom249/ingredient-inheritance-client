import React from 'react';
import '../component-css/header.css';

export default function Header (){

    return(
        <div>
            <header>
                <span className='header'><em>A place to store recipes passed down through generations...</em></span>
                <h1 className='header'>Ingredient Inheritance</h1>
                <span className='header'><em>for the sake of food and family.</em></span>

            </header>
        </div>
    )
}