import { useState, useEffect } from 'react'
import './nav.css'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"  alt="Netflix" />
      <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="" />
    </div>
  )
}

export default Nav
