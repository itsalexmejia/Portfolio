import React from "react"
import FooterNavigation from "./navigation/footer"
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.ico' 

//components
import MenuTop from "./navigation/menu"

import ReactGA from 'react-ga';
ReactGA.initialize('UA-189714880-1');

ReactGA.pageview('/');
ReactGA.pageview('/servicios/consultoria');
ReactGA.pageview('/servicios/consultoria/consumo');
ReactGA.pageview('/servicios/consultoria/retail');
ReactGA.pageview('/servicios/consultoria/b2b');
ReactGA.pageview('/servicios/analytics');
ReactGA.pageview('/servicios/partners');
ReactGA.pageview('/careers');
ReactGA.pageview('/aplicar');
ReactGA.pageview('/exito');
ReactGA.pageview('/nosotros/que-hacemos');
ReactGA.pageview('/nosotros/liderazgo');
ReactGA.pageview('/nosotros/responsabilidad');
ReactGA.pageview('/contacto');

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="icon" href={favicon} />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale = 1.0, user-scalable = no, viewport-fit = cover" />
        <meta name="theme-color" content="#601b4d" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#601b4d" media="(prefers-color-scheme: dark)" />
        <title>Arena Analytics</title>
      </Helmet>
      <MenuTop />
      <main>
        <div className="pt-lay-mob sm:pt-lay">{children}</div>
      </main>
      <FooterNavigation />
    </div>
  )
}