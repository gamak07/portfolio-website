import React from 'react'

interface props{
    type?: string;
    placeholder?: string;
    value?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({className, type, placeholder, value, onChange}: props) {
  return (
    <div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
