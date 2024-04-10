import React from "react";
import { Metadata } from 'next'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: 'Almanac Man | Shows',
}

const shows = [
  {
    key: 'FRI 4.19.24',
    location: 'Skylark Lounge - Denver, CO',
    with: 'Traindodge (OK) | Self Evident (MN)',
    link: 'https://www.eventbrite.com/e/traindodgeself-evidentalmanac-man-tickets-821755582067?aff=oddtdtcreator'
  },
  { 
    key: 'THU 5.16.24',
    location: 'RELEASE SHOW @ 7th Circle Music Collective - Denver, CO',
    with: 'Museum Of Light (WA) | Voideater | Abandons',
    link: ''
  },
  {
    key: 'FRI 5.24.24',
    location: 'The Burlington - Chicago, IL',
    with: 'Djunah | Electric Hawk | Nonagon',
    link: ''
  },
  {
    key: 'SAT 5.25.24',
    location: "Madison, WI - The Wisco",
    with: 'Corridoré | Daughters of St. Crispin',
    link: ''
  },
  { 
    key: 'SUN 5.26.24',
    location: "CATERWAUL FEST @ Palmer's Bar - Minneapolis, MN",
    with: 'J. Robbins | GASWAR + more',
    link: 'https://ticketstripe.com/2024caterwaul'
  },
  {
    key: 'TUE 5.28.24',
    location: 'Farewell - Kansas City, MO',
    with: 'Nästy Vömmit | Joust',
    link: ''
  },
]

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