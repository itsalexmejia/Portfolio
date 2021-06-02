import * as React from 'react'
import { ExternalLinkIcon } from "@heroicons/react/outline"
import { Link } from 'gatsby'

// markup
const BigImageSection = props => {
  return (
    <div className="relative bg-gray-100 pt-16 overflow-hidden sm:pt-24 lg:pt-24">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="font-arena text-base font-semibold tracking-wider text-arena-600 uppercase">¿Te gustan los retos?</h2>
          <p className="font-arena mt-2 text-3xl font-extrabold text-brand-900 tracking-tight sm:text-4xl">¡Sé uno de nosotros!</p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">Nos gusta sentirnos satisfechos con cada día que trabajamos juntos y con nuestros clientes en sus retos de negocio. Somos responsables de lo que proponemos y hacemos. Somos flexibles, identificamos las necesidades del cliente y logramos generar cambios positivos y de impacto.</p>
          <Link to="/aplicar/" className="mt-8 w-full bg-arena-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-lg text-white hover:bg-brand-600 sm:mt-10 sm:w-auto" target="_blank" rel="noreferrer">
          Aplica aquí
            <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-white opacity-80"/>
          </Link>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-36">
          <img className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80s" alt=""/>
        </div>
      </div>
    </div>       
  )
}

export default BigImageSection




