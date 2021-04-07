import * as React from 'react'
import { Link } from 'gatsby'

// markup
const CardimageAction = props => {
  return (



  <div className="bg-white relative">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gray-100"></div>
    <div className="relative z-10 max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 transition-all ease-in-out sm:hover:shadow-2xl">
        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center">
            <h2 className="font-arena text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Carreras.</span>
              <span className="block">Arena &amp; Tú</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-bluearena-100">En Arena Analytics nos interesan las personas ansiosas por generar valor y con ganas de innovar.</p>
            <Link to="/careers/" className="mt-8 bg-white border border-transparent rounded-3xl shadow px-5 py-3 inline-flex items-center text-base font-semibold text-arena-600 hover:bg-bluearena-50">Comienza aquí</Link>
          </div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img className="transform translate-x-6 translate-y-6 rounded-xl object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="App screenshot"/>
        </div>
      </div>
    </div>
  </div>
  
  
    
     
  )
}

export default CardimageAction




