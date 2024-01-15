import React from 'react';
import st from "./MyButton.module.css"

const MyButton = () => {
    return (
        <div>
            <button type="submit" onClick={ (e) => e.preventDefault()}>SEARCH</button>
        </div>
    );
};

export default MyButton;