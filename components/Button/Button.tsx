import React, { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'
import Image from 'next/image'
import styles from './Button.module.scss'

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: 'primary' | 'ghost'
  icon?: string
  iconRotation?: 'mirrorX' | 'mirrorY'
}

function Button({
  color = 'primary',
  className,
  children,
  icon,
  iconRotation,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[color]} ${className}`}
      {...buttonProps}
    >
      {children}
      {icon && <Image className={iconRotation && styles[iconRotation]} src={icon} alt="" />}
    </button>
  )
}

export default Button
