import { ChartPieIcon, GlobeIcon, UsersIcon } from '@heroicons/react/outline'
import * as React from 'react'

const transferFeatures = [
    {
      id: 1,
      name: 'Capital humano',
      description:
        'Buscamos que la transformación ocurra desde el interior de las organizaciones y con su propia gente. Generamos y gestionamos cambios profundos de cultura para lograr objetivos trascendentales.',
      icon: UsersIcon,
    },
    {
      id: 2,
      name: 'Ciencia de datos',
      description:
        'Aprovechamos la información que nuestros clientes ya tienen para generar análisis de valor que habiliten la toma de decisiones. Desarrollamos herramientas personalizadas y amigables para el usuario.',
      icon: ChartPieIcon,
    },
    {
      id: 3,
      name: 'Estrategia y procesos',
      description:
        'Nuestros directores cuentan con más de 20 años de experiencia dirigiendo y transformando exitosamente empresas Latinoamericanas en distintas industrias. Estas transformaciones se han logrado diseñando estrategias e implementando nuevos procesos, herramientas y culturas de trabajo',
      icon: GlobeIcon,
    },
  ]

// markup
const BulletBig = props => {
  return (
    <div className="relative bg-white">
    <div className="lg:absolute lg:inset-0">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80"
          alt=""
        />
      </div>
    </div>
    <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
      <div className="lg:pr-8">
        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
        <h2 className="font-arena text-base font-semibold text-arena-600 tracking-wide uppercase">¿Por qué trabajar con nosotros?</h2>
        <h3 className="font-arena text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">¿Por qué somos diferentes?</h3>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>

        </div>
      </div>
    </div>
  </div>
  )
}

export default BulletBig




