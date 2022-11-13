import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Searching from './searching.js';


const SearchBar = () => {

    const [userInputText, setUserInput] = React.useState('');

    return (
        <div>
            <label>
                Name:
                <input type="text" id="userInput" onChange={e => setUserInput(e.target.value)}
                //userInput={userInput} 
                />
            </label>
            <Searching userInput={{ userInputText }} />
        </div>

    );
}

export default SearchBar;