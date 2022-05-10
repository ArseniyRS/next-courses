import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Tag.module.scss'

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'red' | 'grey' | 'green' | 'ghost'
  href?: string
}

function Tag({
  size = 'medium',
  color = 'primary',
  href,
  className,
  children,
  ...props
}: TagProps) {
  return (
    <div className={`${styles.tag} ${styles[size]} ${styles[color]} ${className}`} {...props}>
      {href ? <a href={href}>{children}</a> : children}
    </div>
  )
}

export default Tag
