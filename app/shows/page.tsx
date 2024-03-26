import React from "react";
import Footer from "../../components/Footer";
import Image from 'next/image'
import logo from '../../public/LOGO-with-distress.png'

export default function Shows() {
    return (
        <div className="container">
          <main>
          <a href="/">
                <Image src={logo} width={500} height={200} alt="band logo" />
            </a>
            <h1 className="text-3xl">SHOWS</h1>
            
          </main>
    
          <Footer />
        </div>
      )
  }