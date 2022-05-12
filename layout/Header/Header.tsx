import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Header({ ...props }: HeaderProps) {
  return <header {...props}>header</header>
}

export default Header
