import React from 'react'

const Header = () => {
  const today = new Date().toString().slice(0,15)
  return (
    <header className='header'>
      <div className="app-header">
        <h1>DealFinder</h1>
        <p>{today}</p>
      </div>
      {/* <div className="header-log">
        <img src="" alt="" />
      </div> */}
    </header>
  )
}

export default Header