import React from 'react';
import '../component-css/header.css';

export default function Header (){

    return(
        <div>
            <header>
                <div className='one'><em>A place to store recipes passed down through generations...</em></div>
                <h1 className='header'>Ingredient Inheritance</h1>
                <div className='two'><em>for the sake of food and family.</em></div>

            </header>
        </div>
    )
}