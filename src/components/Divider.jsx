import React from 'react'

export default function Divider({className=''}){
  return (
    <div className={`my-12 ${className}`} aria-hidden>
      <svg viewBox="0 0 800 40" className="w-full h-10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20 C100 5 200 35 300 20 C400 5 500 35 600 20 C700 5 800 35 800 35" fill="none" stroke="rgba(34,32,29,0.08)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
