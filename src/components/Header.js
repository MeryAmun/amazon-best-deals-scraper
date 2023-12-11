import React from 'react'

const Header = () => {
  const today = new Date().toString().slice(0,15)
  return (
    <header className='header'>
      <div className="app-header">
        <h2>DealFinder</h2>
        <p>{today}</p>
      </div>
    </header>
  )
}

export default Header