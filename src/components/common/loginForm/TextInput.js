import React, {PropTypes} from 'react';

const TextInput = ({name, label, placeholder, onChange}) => {
    return (
        <div>
            <input 
                type="text"
                name={name}
                placeholder={placeholder} 
                onChange={onChange}/>
                
        </div>
    )
};

export default TextInput;