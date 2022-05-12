import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Sidebar({ ...props }: SidebarProps) {
  return <div {...props}>sidebar</div>
}

export default Sidebar
