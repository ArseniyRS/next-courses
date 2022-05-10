import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react'
import styles from './Raiting.module.scss'
import StarIcon from './star.svg'

interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean
  raiting?: number
  setRaiting?: (raiting: number) => void
}

function Raiting({
  raiting = 0,
  setRaiting,
  isEditable = true,
  className,
  children,
  ...props
}: RaitingProps) {
  const [hoverRaiting, setHoverRaiting] = useState(0)
  const [activeRaiting, setActiveRaiting] = useState(raiting)

  useEffect(() => {
    if (setRaiting) {
      setRaiting(activeRaiting)
    }
  }, [activeRaiting])

  function checkEditable(cb?: any) {
    if (isEditable && !activeRaiting) {
      if (cb) {
        return cb()
      }
      return true
    }
    return false
  }
  const handleEnterRaiting = (key: number) => () => checkEditable(() => setHoverRaiting(key + 1))
  const handleLeaveRaiting = () => setHoverRaiting(0)
  const handleChangeRaiting = (key: number) => () => checkEditable(() => setActiveRaiting(key + 1))

  const raitingElements = new Array(5).fill(null).map((_, index) => (
    <StarIcon
      onMouseEnter={handleEnterRaiting(index)}
      onMouseLeave={handleLeaveRaiting}
      onClick={handleChangeRaiting(index)}
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      className={`
      ${activeRaiting > index ? styles.active : ''} 
      ${hoverRaiting > index ? styles.hover : ''}
      ${checkEditable() ? styles.editable : ''}
      `}
    />
  ))

  return <div {...props}>{raitingElements}</div>
}

export default Raiting
