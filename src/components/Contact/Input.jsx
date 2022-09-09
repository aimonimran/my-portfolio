import React from 'react';

const Input = ({ name, value, type, placeholder }) => {
    return ( 
        <input name={name} value={value} type={type} placeholder={placeholder} required />
    );
}
 
export default Input;