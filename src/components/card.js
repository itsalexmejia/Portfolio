import * as React from "react"
import { Link } from 'gatsby'

//assets
import logoArena from '../images/siteglobal/arenaLogo.svg'
import bannerBackground from '../images/mainpage/buildoffices.jpg'


// markup
const Card = ({data}) => {
  return (
      <div>
        {data.allContentfulTestConnection.edges.map(edge => (
          <div className="bg-gray-200">
            <div className="grid lg:grid-cols-2">
              <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24">
                <img className="h-10" src={logoArena} alt="logo arena" />
                <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={bannerBackground} alt="buildings" />
                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl">{edge.node.title} <span className="text-indigo-500">{edge.node.title2} </span></h1>
                <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">{edge.node.description}</p>
                <div className="mt-4 sm:mt-6"><Link to="/" className="inline-block px-5 py-3 shadow-lg bg-indigo-500 text-white rounded-lg uppercase tracking-wider font-semibold text-sm sm:text-base" href="#">{edge.node.url}</Link></div>
              </div>
              <div className="hidden relative lg:block">
                <img className="hidden absolute inset-0 w-full h-full object-cover object-center lg:block" src={bannerBackground} alt="buildings" />
              </div>
            </div>
          </div>
        ))} 
      </div>
  )
}

export default Card




