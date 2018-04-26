import React from 'react';
import InstructionButton from './instr-button';

export default function Instructions (){
    return(
        <div>
            <h2>Things You Can Do:</h2>
            <ul>
                <li><strong>Create</strong> and save your own recipes for people to enjoy
                    <ol>
                        <li>Click the "+Create New Recipe" button, or just type in the blank form</li>
                        <li>Fill out the form with all your ingredients, a title, and recipe steps</li>
                        <li>Hit the "Save" button at the bottom</li>
                    </ol>
                </li>
                <li><strong>View a list</strong> of your created recipes under the "My Family Recipe" section</li>
                <li><strong>View/Edit</strong> your recipe by:
                    <ol>
                        <li>Clicking the title under the "My Family Recipes section</li>
                        <li>Updating whichever fields you would like updated</li>
                        <li>Click the "Save" button</li>
                    </ol>
                </li>
                <li>
                   <strong> Delete</strong> an old recipe by clicking the "X" button next to the recipe you'd like to delete
                </li>
                <li>
                    <strong>*WARNING: At this time, hitting the "X" button will PERMANENTLY DELETE your recipe</strong>
                </li>
            </ul>
            <InstructionButton/>

        </div>
    )
}