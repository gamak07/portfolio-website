import React, { ReactNode } from 'react'

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
className?:string;
children:ReactNode
}

export default function Button({className, children, ...rest}:props) {
  return (
    <button className={className} {...rest}>{children}</button>
  )
}
