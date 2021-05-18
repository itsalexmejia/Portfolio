import * as React from 'react'
import { EmojiHappyIcon, StarIcon, UserGroupIcon } from '@heroicons/react/outline'

const features = [
    {
      name: 'Nos gusta trabajar en equipo',
      description:
        'Te integramos rápidamente para que desde el primer día te sientas parte de la familia.',
      icon: UserGroupIcon,
    },
    {
      name: 'Nos gusta confiar en nuestra gente',
      description:
        'Te damos autonomía para que tomes tus propias decisiones. Escuchamos tus recomendaciones y las llevamos a la práctica.',
      icon: StarIcon,
    },
    {
      name: 'Nos gusta que sea un camino de aprendizaje',
      description:
        'Te ayudamos a aprender, crecer y demostrar tu mayor potencial, pero sobro todo a que disfrutes el recorrido y seas tú mismo.',
      icon: EmojiHappyIcon,
    },
  ]

// markup
const GridThreeBg = props => {
  return (


    <div className="relative py-16 bg-arena-900 -mt-1 z-10">
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">A better way to send money.</h2>
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        {features.map((feature) => (
          <div key={feature.name}>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white bg-opacity-10 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-white">{feature.name}</p>
            </dt>
            <dd className="mt-2 text-base text-white opacity-70">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
    
     
  )
}

export default GridThreeBg




