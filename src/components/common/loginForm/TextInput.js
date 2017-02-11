import React, {PropTypes} from 'react';
import '../../../styles/textInput.css';

const TextInput = ({name, label, placeholder, onChange}) => {
    return (
        <div className="login-field">
            <input 
                type="text"
                name={name}
                placeholder={placeholder} 
                onChange={onChange}/>
                
        </div>
    )
};

export default TextInput;