import { useState } from 'react'
import arrow from '../assets/arrow.svg'
import './Collapse.scss'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={isOpen ? 'collapse collapse--open' : 'collapse'}>
      <button
        className="collapse__header"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img className="collapse__arrow" src={arrow} alt="" />
      </button>
      <div className="collapse__content">
        <div className="collapse__text">{children}</div>
      </div>
    </div>
  )
}

export default Collapse
