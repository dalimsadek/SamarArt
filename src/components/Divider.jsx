import React from 'react'

export default function Divider({ className = '' }) {
  return (
    <div
      className={`wave-divider ${className}`}
      aria-hidden
      style={{ overflow: 'hidden', lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1200 40"
        className="w-full"
        style={{ height: '40px', display: 'block' }}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20 C150 8 300 32 450 20 C600 8 750 32 900 20 C1050 8 1150 28 1200 20"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
