import React from 'react';

const userinput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return (
        <input style={inputStyle}
               type="text"
               onChange={props.changedName}
               value={props.currentName}/>
    )
};

export default userinput;
