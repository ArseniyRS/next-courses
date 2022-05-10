import React, { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react'
import styles from './Ptag.module.scss'

interface PtagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 'small' | 'medium' | 'large'
}

function Ptag({ size = 'medium', className, children, ...props }: PtagProps) {
  return (
    <p className={`${styles[size]} ${className}`} {...props}>
      {children}
    </p>
  )
}

export default Ptag
