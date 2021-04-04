import * as React from 'react'
// import { Link } from 'gatsby'

// markup
const BigImageSection = props => {
  return (
    <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-24">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="font-arena text-base font-semibold tracking-wider text-arena-600 uppercase">¿Te gustan los retos?</h2>
          <p className="font-arena mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">¡Sé uno más de nosotros!</p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">Nos gusta sentirnos satisfechos con cada día que trabajamos juntos y con nuestros clientes en sus retos de negocio. Somos responsables de lo que proponemos. Identificamos las necesidades del cliente y logramos generar cambios positivos y de impacto.</p>
          <a href="https://www.linkedin.com/company/arena-analytics/jobs/" className="mt-8 w-full bg-arena-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-brand-700 sm:mt-10 sm:w-auto" target="_blank">Ve nuestras vacantes</a>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80 lg:h-screen">
          <img className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt=""/>
        </div>
      </div>
    </div>       
  )
}

export default BigImageSection




