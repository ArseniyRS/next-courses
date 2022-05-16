import axios from 'axios'
import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import Menu from '../Menu/Menu'

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Sidebar({ ...props }: SidebarProps) {
  return (
    <div {...props}>
      <Menu />
    </div>
  )
}

export default Sidebar
