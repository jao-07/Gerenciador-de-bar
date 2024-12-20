import React from 'react'
import { useState } from 'react'
import {FaUser, FaLock} from 'react-icons/fa'
import './InputLogin.css'

const InputLogin = ({tipo, place, icon, ...rest}) => {

    const icons = {FaUser, FaLock}

    const DynamicIcon = ({ iconName, ...props }) => {
        const Icon = icons[iconName];
        return <Icon {...props} /> ;
    };

    return (
        <div className='input-field'>
            <input type={tipo} placeholder={place} {...rest}/>
            <DynamicIcon iconName={icon} className='icon'/>
        </div>
    )
}

export default InputLogin
