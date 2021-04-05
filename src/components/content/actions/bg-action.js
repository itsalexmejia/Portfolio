import * as React from 'react'
// import Particles from 'react-particles-js';
import { MailIcon } from '@heroicons/react/outline'
import ParticlesAnimation from '../../particles-bg'

// markup
const ActionBackground = props => {
  return (

      <div className="relative bg-radial overflow-hidden">
          <ParticlesAnimation/>
          <div className="relative inset-2 max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Trabajemos juntos.</span>
                  <span className="block">Descubre cómo podemos ayudarte.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-testcolor-100">¿Deseas obtener más información sobre alguna oferta de servicio?</p>
              <a href="mailto:alex@me.com" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-arena-600 bg-white hover:bg-indigo-50 sm:w-auto">
                  <MailIcon className="mr-3 -ml-1 h-5 w-5 text-arena-400" />
                  Contáctanos
              </a>
          </div>
      </div>
    
       
  )
}

export default ActionBackground




