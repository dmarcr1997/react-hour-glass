import React from 'react';

export const Timer = (props) => {
    return(
        <div>
            <ul>
                <h2>{props.name}</h2>
                <li>{}</li>
                <button onClick={startTimer()}>Start</button>
            </ul>
        </div>
    )
}


