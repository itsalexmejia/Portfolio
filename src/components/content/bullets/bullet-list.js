import * as React from "react"
import { CheckIcon } from '@heroicons/react/solid'

//assets

const results = [
    {
      name: 'ROI +10 a 1',
      description: 'Nuestros proyectos tienen un ROI +10 a 1 con resultados tangibles y medibles. ',
    },
    { name: 'Empoderamiento de las organizaciones', description: 'Las organizaciones siguen madurando una vez acabado el proyecto. ' },
    { name: 'Esfuerzo continuo', description: 'Acompañamiento constante para asegurar la alineación del equipo y facilitar la adopción al cambio.' },
  ]

// markup
const BulletList = props => {
  return (

    <div className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="font-arena text-base font-semibold text-arena-600 uppercase tracking-wide">Conoce más</h2>
          <p className="font-arena mt-2 text-3xl font-extrabold text-gray-900">¿Qué resultados hemos tenido?</p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {results.map((result) => (
              <div key={result.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-arena-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{result.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{result.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    
  )
}

export default BulletList




