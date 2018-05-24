import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.name}</p>
            <p>Paragraph 2</p>
        </div>
    )
};

export default useroutput;