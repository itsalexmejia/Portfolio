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
              <div className="px-8 py-12">
                  <img className="h-10" src={logoArena} alt="logo arena" />
                  <img className="mt-6 rounded-lg shadow-xl" src={bannerBackground} alt="buildings" />
                  <h1 className="mt-6 text-2xl font-bold text-gray-900">{edge.node.title} <span className="text-indigo-500">{edge.node.title2} </span></h1>
                  <p className="mt-2 text-gray-600">{edge.node.description}</p>
                  <div className="mt-4"><Link to="" className="inline-block px-5 py-3 shadow-lg bg-indigo-500 text-white rounded-lg uppercase tracking-wider font-semibold text-sm" href="#">{edge.node.url}</Link></div>
              </div>
          </div>
        ))} 
      </div>
  )
}

export default Card




