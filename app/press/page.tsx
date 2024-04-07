import React from "react";
import { Metadata } from 'next'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from 'next/image'
import { Gallery } from "react-grid-gallery";
import ImageGallery from "react-image-gallery";
import logoDistressed from '../../public/LOGO-with-distress.png'
import logoUndistressed from '../../public/LOGO-without-distress.png'
import img1 from '../../public/almanac2.jpg'
import img2 from '../../public/IMG_2711.png'
import img3 from '../../public/IMG_2721.png'
import img4 from '../../public/IMG_3054.png'

export const metadata: Metadata = {
  title: 'Almanac Man | Press Kit',
}

const images = [
  {
     src: {img1},
     width: 768,
     height: 768,
     isSelected: true,
     caption: "test",
  },
  {
     src: {img2},
     width: 1648,
     height: 1236,
     alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
     src: {img3},
     width: 320,
     height: 212,
     alt: "test 2"
  },
];

export default function Press() {
    return (
        <div className="container">
          <Header />
          <main>
            <h1 className="text-3xl pb-10">Press Kit</h1>

            <a href="https://drive.google.com/uc?export=download&id=1lb8leqqrapIwc4JoVtDwtn6DurfagmrR">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Promo Asset ZIP Download</button>
            </a>

            <h2 className="text-2xl pt-20 pb-10 text-slate-500 dark:text-slate-400">Logo PNGs</h2>
            <div className="columns-2">
              <Image src={logoDistressed} width={250} height={100} alt="band logo distressed" />
              <Image src={logoUndistressed} width={250} height={100} alt="band logo undistressed" />
            </div>

            <h2 className="text-2xl pb-10 text-slate-500 dark:text-slate-400">Press</h2>
            <a href="https://ghettoblastermagazine.com/features/song-premiere/almanac-man-lotusland-and-arrakis/">
              Ghettoblaster Magazine Song Premiere: Almanac Man, "Lotusland" and "Arrakis"
            </a>

            <h2 className="text-2xl pt-20 pb-10 text-slate-500 dark:text-slate-400">Quotes</h2>
            <p className="w-3/5 text-center text-balance text-slate-500 dark:text-slate-400">
              "Almanac Man is load-bearing, twin vocal, double-shot espresso post 
              noise from Denver. Is that it? Is that all? Not really. Born out of 
              the metal crunch of Laurium and fused with an acute sense of 
              precision, Almanac Man has blistered Denver audiences for the 
              last two years. Unlike other bands working trudging in the 
              same well-mined soundzone, Almanac Man do away with pretension 
              without doing away with a relationship to melodies. This ain’t 
              no Don Delillo shit. This is Saul Bellow without the rank 
              Conservatism. Enjoy the headache."
              </p>
              <span className="text-white italic pt-5 pb-10"> - Jeremy Brashaw, Ghost Canyon Fest</span>
              <p className="w-3/5 text-center text-balance text-slate-500 dark:text-slate-400">
                "How did I hear about Denver’s Almanac Man? Well, as you will read in many future 
                installments, many of No Coast’s bands reach out directly. These fellas, in 
                particular, reached out on the heels of a recommendation by Moon Pussy. 
                I get lots of emails from bands asking to play the fest and I listen to all 
                the bands, every single one. I didn’t find out I till after a deep listen to 
                For Your Cause (This Ghost Is Clear) that the drummer is in Bear Claw. Which lended 
                a bit of context to the familiarity of their sound. They’ll whack you in the face 
                with some 90’s references but keep those early 2000’s Chicago rhythms around to 
                propel the guitar whenever it’s at its most melodic (for the record, the bass tone 
                is about as modern as you get). I dig this band and you should check out 
                'inco-habitant' for some pummeling desperation"</p>
                <span className="text-white italic pt-5"> - Jeff Helland, No Coast Fest</span>
            <h2 className="text-2xl pt-20 pb-10 text-slate-500 dark:text-slate-400">Bio</h2>
            <p className="w-3/5 text-center text-balance text-slate-500 dark:text-slate-400">
              Almanac Man formed in 2020 when Denver, CO post-hardcore heroes Laurium folded, prompting guitarist Brian Dooley (ex-Tigon) and bassist Nick Holtz to team up with drummer and recent Chicago ex-pat Scott Picco (ex-Bear Claw), forming a noise rock trio that fused their former band's detuned abrasion with twin vocals and odd meters. Sidelined from live performance by a world-historic pandemic, they put their heads down and recorded their debut LP - 2022's FOR YOUR CAUSE, 27 minutes of raw-wound intensity. Once recording wrapped, Holtz departed and the band added Sean Dove on bass. This new iteration supported the record with fierce live shows and a tour to Denton, TX's illustrious No Coast Fest in 2022, performing alongside such bands as Protomarytr, Metz, Chat Pile, Young Widows and Ken Mode. In 2023, Almanac Man played the inaugural Ghost Canyon Fest in their hometown, joining Big | Brave, Pile’s Rick Maguire and many others. 2024 brings the release of their second full-length on The Ghost Is Clear, TERRAIN, a meditation on loss, futility and avarice. Recorded in Ft. Collins, CO at the famous Blasting Room by Felipe Patino of Green Door Recordings and mixed by Anti-Sleep's Scott Evans (Kowloon Walled City), TERRAIN brings more melody and experimentation into the pummeling chaos. Prepare your ears.
            </p>
            <h2 className="text-2xl pt-20 pb-10 text-slate-500 dark:text-slate-400">Images</h2>
            <Image src={img1} width={300} height={300} alt="Almanac Man live @ Hi-Dive" />
            <div className="columns-2">
            <Image src={img3} width={300} height={300} alt="Almanac Man live @ Hi-Dive" />
            <Image src={img4} width={300} height={300} alt="Casual promo shot" />
            </div>
            <h2 className="text-2xl pt-20 pb-10 text-slate-500 dark:text-slate-400">Live Video</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eDLyUmN3hkA?si=wyF3ebx5iMqD1jXL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h2 className="text-2xl pt-20 pb-10 text-slate-500 dark:text-slate-400">Streaming</h2>
            <iframe width="350" height="470" src="https://bandcamp.com/EmbeddedPlayer/album=3364382116/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/" seamless><a href="https://almanacman.bandcamp.com/album/terrain">Terrain by Almanac Man</a></iframe>
            <iframe className="pt-20" src="https://open.spotify.com/embed/album/7zZ2hSL5MAfawDWR0puO73?utm_source=generator&theme=0" width="50%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </main>
    
          <Footer />
        </div>
      )
  }