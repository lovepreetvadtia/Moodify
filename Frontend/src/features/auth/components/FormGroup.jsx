import React from 'react'

const FormGroup = ({label,placeholder,value,onChange}) => {
  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input value={value} onChange={onChange} type={label} placeholder={placeholder} />
    </div>
  )
}

export default FormGroup