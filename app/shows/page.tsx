import React from "react";
import { Metadata } from 'next'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: 'Almanac Man | Shows',
}

const shows = [
  {
    key: 'WED 09.03.25',
    location: `Hi-Dive - Denver, CO`,
    with: 'Young Widows + Moon Pussy',
    link: 'https://dice.fm/event/ry5pvq-young-widows-moon-pussy-almanac-man-3rd-sep-hi-dive-denver-tickets?lng=en-US'
  },
  {
    key: 'SAT 09.27.25',
    location: 'Tour Kickoff: Mutiny Information Cafe - Englewood, CO',
    with: 'TBD',
    link: ''
  },
  {
    key: 'WED 10.01.25',
    location: `John Henry's - Eugene, OR`,
    with: 'Tiny Dino',
    link: ''
  },
  {
    key: 'THU 10.02.25',
    location: 'Slice Of Life Pizza - Tacoma, WA',
    link: ''
  },
  {
    key: 'FRI 10.03.25',
    location: 'The Kraken Bar & Lounge - Seattle, WA',
    with: 'Yellfire + Museum Of Light',
    link: ''
  },
  {
    key: 'SAT 10.04.25',
    location: 'The Alleyway - Portland, OR',
    with: 'Ils + Local Fauna',
    link: ''
  }
]


// const shows = [
//   {
//     key: 'FRI 4.19.24',
//     location: 'Skylark Lounge - Denver, CO',
//     with: 'Traindodge (OK) | Self Evident (MN)',
//     link: 'https://www.eventbrite.com/e/traindodgeself-evidentalmanac-man-tickets-821755582067?aff=oddtdtcreator'
//   },
//   { 
//     key: 'THU 5.16.24',
//     location: 'RELEASE SHOW @ 7th Circle Music Collective - Denver, CO',
//     with: 'Museum Of Light (WA) | Voideater | Abandons',
//     link: ''
//   },
//   {
//     key: 'FRI 5.24.24',
//     location: 'The Burlington - Chicago, IL',
//     with: 'Djunah | Electric Hawk | Nonagon',
//     link: ''
//   },
//   {
//     key: 'SAT 5.25.24',
//     location: "Madison, WI - The Wisco",
//     with: 'Corridoré | Daughters of St. Crispin',
//     link: ''
//   },
//   { 
//     key: 'SUN 5.26.24',
//     location: "CATERWAUL FEST @ Palmer's Bar - Minneapolis, MN",
//     with: 'J. Robbins | GASWAR + more',
//     link: 'https://ticketstripe.com/2024caterwaul'
//   },
//   {
//     key: 'TUE 5.28.24',
//     location: 'Farewell - Kansas City, MO',
//     with: 'Nästy Vömmit | Joust',
//     link: ''
//   },
// {
//   key: 'FRI 5.23.25',
//   location: 'Skylark Lounge - Denver, CO',
//   with: 'Elephant Rifle | Gaythiest | Chew Thru',
//   link: 'https://dice.fm/event/pyqkyl-elephant-riflegaytheistalmanac-manchew-thru-23rd-may-skylark-lounge-denver-tickets?pid=3b6c903d'
// },
// {
//   key: 'SAT 6.28.25',
//   location: 'Afternoon show @ Mutiny Information Cafe - Englewood, CO',
//   with: 'The Nervous',
//   link: ''
// },
// {    
//   key: 'FRI 8.8.25',
//   location: 'Triple Nickel Tavern - Colorado Springs, CO',
//   with: 'Burning Sister',
//   link: ''
// },
// {    
//   key: 'SAT 8.9.25',
//   location: 'Goathead Collective - Taos, NM',
//   with: 'Burning Sister',
//   link: ''
// },
// {
//   key: '8.22 - 8.24.25',
//   location: 'GHOST CANYON FEST: Skylark Lounge & Hi-Dive - Denver, CO',
//   with: 'Glassing | Black Eyes | Cloakroom and many more',
//   link: 'https://dice.fm/event/l826bb-ghost-canyon-festival-aug-23-24-23rd-aug-hi-dive-denver-tickets'
// }
// ]

const showMap = shows.map(show => (
  <tr>
    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{show.key}</td>
    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{show.location}</td>
    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{show.with ? `w/${show.with}` : ''}</td>
    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{show.link ? <a href={show.link} target="_blank"><button>Link</button></a> : ''}</td>
  </tr>
));

export default function Shows() {
  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="text-3xl">SHOWS</h1>
        <table className="table-auto">
          <tbody>
            {showMap}
          </tbody>
        </table>
      </main>

      <Footer />
    </div>
  )
}