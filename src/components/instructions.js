import React from 'react';
import InstructionButton from './instr-button';

export default function Instructions (){
    return(
        <div>
            <h2>Things You Can Do:</h2>
            <ul>
                <li>Create and save your own recipes for people to enjoy</li>
                <li>Do that by:
                    <ol>
                        <li>Click the "+Create New Recipe" button, or just type in the blank form</li>
                        <li>Fill out the form with all your ingredients, a title, and recipe steps</li>
                        <li>Hit the "Save" button at the bottom</li>
                    </ol>
                </li>
                <li>View a list of your created recipes under the "My Family Recipe" section</li>
                <li>Click on a title under "My Family Recipes" to view it in the editor</li>
                <li>Edit your recipe by:
                    <ol>
                        <li>Clicking the title under the "My Family Recipes section</li>
                        <li>Updating whichever fields you would like updated</li>
                        <li>Click the "Save" button</li>
                    </ol>
                </li>
            </ul>
            <InstructionButton/>

        </div>
    )
}