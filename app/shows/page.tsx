import React from "react";
import Footer from "../../components/Footer";
import Image from 'next/image'
import logo from '../../public/LOGO-with-distress.png'

const shows = [
  { 
    key: 'SAT 3.30.24',
    location: 'Mutiny Information Cafe - Denver, CO',
    with: 'Ed Hochuli',
    link: 'https://www.facebook.com/events/299657423135663?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22event_aggregate%22%2C%22action_history%22%3A%22null%22%7D&notif_id=1711370485280508&notif_t=event_aggregate&ref=notif'
  },
  {
    key: 'FRI 4.19.24',
    location: 'Skylark Lounge - Denver CO',
    with: 'Traindodge (OK) | Self Evident (MN)',
    link: 'https://www.facebook.com/events/299657423135663?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22event_aggregate%22%2C%22action_history%22%3A%22null%22%7D&notif_id=1711370485280508&notif_t=event_aggregate&ref=notif'
  },
  { 
    key: 'THU 5.16.24',
    location: 'RELEASE SHOW @ 7th Circle Music Collective - Denver CO',
    with: 'Museum Of Light (WA) | Voideater | Abandons',
    link: ''
  },
  { 
    key: 'SUN 5.26.24',
    location: "CATERWAUL FEST - Palmer's Bar - Minneapolis, MN",
    with: 'J. Robbins | GASWAR + more',
    link: 'https://www.ticketstripe.com/caterwaul2023'
  }
]

const showMap = shows.map(show => (
  <tr>
    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{show.key}</td>
    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{show.location}</td>
    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">w/{show.with}</td>
  </tr>
));

export default function Shows() {
    return (
        <div className="container">
          <main>
          <a href="/">
                <Image src={logo} width={500} height={200} alt="band logo" />
            </a>
            <h1 className="text-3xl">SHOWS</h1>
            <table className="table-auto">
              {/* <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>With</th>
                  <th>Link</th>
                </tr>
              </thead> */}
              <tbody>
              {showMap}
              </tbody>
            </table>
            {/* <ul className="list-disc">
              <li>3.30.24 @ Mutiny Information Cafe w/Ed Hochuli</li>
              <li>4.19.24 @ Skylark Lounge w/Traindodge + Self Evident</li>
              <li>5.16.24 @ 7th Circle w/Museum Of Light + Voideater + Abandons</li>
            </ul> */}
            
          </main>
    
          <Footer />
        </div>
      )
  }