import React, { useState } from 'react'
import './jump.css'

const Header = ({isAuth, signUserOut}) => {
  const [isJumping, setIsJumping] = useState(false)
  return (
    <header>
        <h1>כותרת כללית נראלי {isAuth && <button onClick={signUserOut}>התנתק/י</button>}</h1>
        <img src="" alt="לוגו זה יהיה נחמד" style={{right:"20px"}} />
        <img onDoubleClick={() => setIsJumping(!isJumping)} className={isJumping ? 'box bounce-7' : ''} src="" alt={isJumping ? 'היי גולגול ♥' : 'הצעות וזה'} style={{left: "20px"}} />
    </header>
  )
}

export default Header