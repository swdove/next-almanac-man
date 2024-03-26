import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Metadata } from 'next'
import Image from 'next/image'
import logo from '../public/LOGO-with-distress.png'


export const metadata: Metadata = {
    title: 'Almanac Man',
  }

export default function Page() {
    return (
        <div className="container">
    
          <main>
            <a href="/">
                <Image src={logo} width={500} height={200} alt="band logo" />
            </a>
            <p className="description text-slate-500 dark:text-slate-400">
              <a href="https://almanacman.bandcamp.com/"> MUSIC</a> | <a href="/shows">SHOWS</a> | <a href="/press">PRESS</a>
            </p>
            <h1 className="text-3xl pt-20">TERRAIN: 5.14.24</h1>
            <a href="http://www.theghostisclearrecords.com/">
              <p className="description text-slate-500 dark:text-slate-400">VINYL</p>
            </a>
            <a href="https://almanacman.bandcamp.com/album/terrain">
              <p className="description text-slate-500 dark:text-slate-400">DIGITAL</p>
            </a>
          </main>
    
          <Footer />
        </div>
      )
  }