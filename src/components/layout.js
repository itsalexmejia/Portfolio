import React from "react"
import FooterNavigation from "./navigation/footer"
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.ico' 

//components
import MenuTop from "./navigation/menu"

import ReactGA from 'react-ga';
ReactGA.initialize('UA-189714880-1');

ReactGA.pageview('/');
ReactGA.pageview('/nosotros/que-hacemos');

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="icon" href={favicon} />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale = 1.0, user-scalable = no, viewport-fit = cover" />
        <meta name="theme-color" content="#601b4d" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#601b4d" media="(prefers-color-scheme: dark)" />
      </Helmet>
      <MenuTop />
      <main>
        <div className="pt-lay-mob sm:pt-lay">{children}</div>
      </main>
      <FooterNavigation />
    </div>
  )
}