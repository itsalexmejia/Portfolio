import * as React from "react"
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

//css
import '../styles/global.css';

//assets
import logoArena from '../images/siteglobal/arenaLogo.svg'
import bannerBackground from '../images/mainpage/buildoffices.jpg'

//components
import Card from "../components/card"
import HeaderNavigation from "../components/navigation/header"


// markup
const IndexPage = ({data}) => {

  return (

    <div>
      <Helmet
      title={data.site.siteMetadata.title}
      >
        {/* <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"/> */}
        <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale = 1.0, user-scalable = no, viewport-fit = cover"/>
      </Helmet>

      {/* This is a new env */}
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="min-h-screen bg-white">

        <HeaderNavigation/>

        <main>
          <div>
            {/* Hero card */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                  <div className="absolute inset-0">
                    <img className="h-full w-full object-cover" src={bannerBackground} alt="Edificios, Fotografia de las oficinas de area" />
                    {/*<div className="absolute inset-0 bg-indigo-700"></div>*/}
                    {/*style="mix-blend-mode: multiply;"*/}
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Consultoría especializada</span>
                      <span className="block text-indigo-200">en innovación y soluciones</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">Aliados de negocio de nuestros clientes en el desarrollo e implementación de soluciones que ayuden a mejorar y eficientar procesos con el mejor talento disponible, incrementando la rentabilidad.</p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <Link to="/" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">Comenzemos</Link>
                        <Link to="startFile" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">Ver video</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo cloud */}
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Nuestros partners confían en nosotros</p>
                  <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="Transistor" />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="Workcation" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* More main page content here... */}


         
        

        <Card data={data}/> 


        



        </main>
      </div>
    </div>




  )
}

export const query = graphql`
  query ArenaQuery {
    site{
      siteMetadata{
        title
        description
        keywords
      }
    }
    allContentfulTestConnection(
      sort: {fields: [createdAt], order: ASC}
      filter: {node_locale: {eq: "es-MX"}}
    )
      {
      edges{
        node{
          title
          title2
          description
          url
          createdAt
        }
      }
    }
  }
`

export default IndexPage