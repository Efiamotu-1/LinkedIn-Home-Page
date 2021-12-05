import React from 'react'
import './inputOption.css'

function InputOption({Icon, title, color, backgroundColor}) {
    return (
        <div className="input-option-flex">
        <Icon  style={{color:color, backgroundColor:backgroundColor}}/>
        <p>{title}</p>
        </div>
    )
}
export default InputOption;