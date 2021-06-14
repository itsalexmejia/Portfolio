import * as React from 'react'
// import Particles from 'react-particles-js';
import { Link } from 'gatsby'
import { MailIcon } from '@heroicons/react/outline'
import ParticlesAnimation from '../../particles-bg'

// markup
const ActionBackground = props => {
  return (
      <div className="relative bg-radial overflow-hidden">
          <ParticlesAnimation/>
          <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-center font-arena">
                  <span className="block text-base font-semibold text-arena-50 tracking-wide uppercase">Trabajemos juntos.</span>
                  <span className="mt-4 block text-3xl font-extrabold text-white sm:text-5xl">Descubre cómo podemos ayudarte.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-bluearena-100">¿Deseas obtener más información sobre nuestros servicios?</p>
              <Link to="/contacto/" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-arena-600 bg-white hover:bg-bluearena-50 sm:w-auto">
                  {/* <MailIcon className="mr-3 -ml-1 h-5 w-5 text-arena-400" /> */}

                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 346" className="mr-3 -ml-1 h-5 w-5 text-arena-400 fillarena">
                      <defs>
                      </defs>
                      <g>
                          <g>
                              <path d="M137.5,0h-0.1c-5.5,0-10,4.5-10,10s4.5,10,10,10h0.1c5.5,0,10-4.5,10-10S143,0,137.5,0z" />
                          </g>
                      </g>
                      <g>
                          <g>
                              <path d="M472,0H182.1c-5.5,0-10,4.5-10,10s4.5,10,10,10H472c0.5,0,1,0,1.5,0.1L445.6,48H315.1c-5.5,0-10,4.5-10,10s4.5,10,10,10
			h110.4L286.2,207.4c-16.7,16.7-43.8,16.7-60.4,0L38.5,20.1c0.5,0,1-0.1,1.5-0.1h53c5.5,0,10-4.5,10-10S98.5,0,93,0H40
			C17.9,0,0,17.9,0,40v266c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V40C512,17.9,494.1,0,472,0z M20,306V40
			c0-3,0.7-5.8,1.8-8.3L161,170.9L20.7,311.2C20.3,309.6,20,307.8,20,306z M472,326H40c-1.8,0-3.5-0.3-5.2-0.7L175.1,185l36.5,36.5
			c12.2,12.2,28.3,18.3,44.3,18.3s32.1-6.1,44.3-18.3l36.5-36.5l140.3,140.3C475.5,325.8,473.8,326,472,326z M492,306
			c0,1.8-0.3,3.5-0.7,5.2L351,170.9L490.2,31.7c1.2,2.5,1.8,5.3,1.8,8.3V306z"/>
                          </g>
                      </g>
                      <g>
                          <g>
                              <path d="M273.3,48h-0.1c-5.5,0-10,4.5-10,10s4.5,10,10,10h0.1c5.5,0,10-4.5,10-10S278.8,48,273.3,48z" />
                          </g>
                      </g>
                  </svg>

                  Contáctanos
              </Link>
          </div>
      </div>
  )
}

export default ActionBackground




