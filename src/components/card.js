import * as React from "react"
import { Link } from 'gatsby'

//assets
import logoArena from '../images/siteglobal/arenaLogo.svg'
import bannerBackground from '../images/mainpage/buildoffices.jpeg'


// markup
const Card = ({data}) => {
  return (
      <div>
        {data.allContentfulTestConnection.edges.map(edge => (
          <div key={edge.node.title} className="bg-gray-200">
            <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
              <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
                <div className="xl:max-w-xl">
                  <img className="h-10" src={logoArena} alt="logo arena" />
                  <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={bannerBackground} alt="buildings" />
                  <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl">{edge.node.title} <br className="hidden lg:inline"></br><span className="text-indigo-500">{edge.node.title2} </span></h1>
                  <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">{edge.node.description}</p>
                  <div className="mt-4 space-x-2 sm:mt-6">
                    <Link to="/" className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition">{edge.node.url}</Link>
                    <Link to="/" className="btn btn-seconday">Learn more</Link>
                  </div>
                </div>
              </div>
              <div className="hidden relative lg:block 2xl:col-span-3">
                <img className="hidden absolute inset-0 w-full h-full object-cover object-center lg:block" src={bannerBackground} alt="buildings" />
              </div>
            </div>
          </div>
        ))} 
      </div>
  )
}

export default Card




