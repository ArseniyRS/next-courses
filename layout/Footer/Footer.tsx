import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { format } from 'date-fns'
import Link from 'next/link'
import styles from './Footer.module.scss'

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={`${className} ${styles.footer}`} {...props}>
      <div>{`OwlTop © 2020 - ${format(new Date(), 'yyyy')}  Все права защищены`}</div>
      <Link href="/kek" target="_blank">
        Пользовательское соглашение
      </Link>
      <Link href="/kek" target="_blank">
        Политика конфиденциальности
      </Link>
    </footer>
  )
}

export default Footer
