import * as React from 'react'
import { Link } from 'gatsby'

// markup
const CardimageAction = props => {
  return (



  <div className="bg-white relative">
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
    <div className="relative z-10 max-w-7xl mx-auto sm:pt-10 sm:px-6 lg:px-8">
      <div className="bg-brand-700 overflow-hidden sm:rounded-lg sm:shadow-xl lg:grid lg:grid-cols-2 lg:gap-4 transition-all ease-in-out sm:hover:shadow-2xl">
        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center">
            <h2 className="font-arena text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">{props.title}</span>
              <span className="block">{props.intro}</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-bluearena-100">{props.description}</p>
            <Link to="/careers/" className="mt-8 bg-white border border-transparent rounded-lg shadow px-5 py-3 inline-flex items-center text-base font-semibold text-arena-600 hover:bg-bluearena-50">Comienza aquí</Link>
          </div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img className="transform translate-x-6 translate-y-6 rounded-xl object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src={props.image} alt="image of people"/>
        </div>
      </div>
    </div>
  </div>
  
  
    
     
  )
}

export default CardimageAction




