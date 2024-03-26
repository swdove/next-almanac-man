import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import { Metadata } from 'next'
import vinyl from '../public/terrain-vinyl.jpg'

export const metadata: Metadata = {
    title: 'Almanac Man',
  }

export default function Page() {
    return (
        <div className="container">
          <Header />
    
          <main>
            <Image src={vinyl} width={300} height={300} alt="band logo" />
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