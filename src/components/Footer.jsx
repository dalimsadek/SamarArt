import React from 'react'
import { FaInstagram, FaPinterest, FaBehance } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-6">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-clay"><FaInstagram/></a>
          <a href="#" className="text-clay"><FaPinterest/></a>
          <a href="#" className="text-clay"><FaBehance/></a>
        </div>
        <p className="mt-4 text-sm text-gray-600">© {new Date().getFullYear()} Decor by Name — All rights reserved.</p>
        <p className="mt-2 signature">crafted by hand ✦</p>
      </div>
    </footer>
  )
}
