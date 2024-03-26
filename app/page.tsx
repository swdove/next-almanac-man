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
            <Image src={logo} width={500} height={200} alt="band logo" />
            <h1 className="text-3xl font-bold">TERRAIN: 5.17.24</h1>
            <p className="description">
              <a href="https://almanacman.bandcamp.com/"> MUSIC</a> | <a href="/shows">SHOWS</a> | <a href="/press">PRESS</a>
            </p>
            
          </main>
    
          <Footer />
        </div>
      )
  }