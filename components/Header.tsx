import React from "react";
import Image from 'next/image'
import logo from '../public/LOGO-with-distress.png'

export default function Header() {
  return (
    <>
      <a href="/">
        <Image src={logo} width={500} height={200} alt="band logo" />
     </a>
     <p className="description text-slate-500 dark:text-slate-400">
        <a href="/">HOME</a> | <a href="https://almanacman.bandcamp.com/"> MUSIC</a> | <a href="/shows">SHOWS</a> | <a href="/press">PRESS</a>
      </p>
    </>
  )
}

