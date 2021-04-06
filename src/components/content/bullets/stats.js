import * as React from 'react'

// markup
const StatsHome = props => {
  return (


      <div className="bg-brand-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="font-arena text-3xl font-extrabold text-white sm:text-4xl">Lideramos proyectos de transformación.</h2>
                  <p className="mt-3 text-xl text-bluearena-100 sm:mt-4">Hemos trabajado con diversas empresas líderes en industrias de retail, bienes de consumo y B2B.</p>
              </div>
              <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                  <div className="flex flex-col">
                        <dt className="order-2 antialiased mt-2 text-lg leading-6 font-medium text-bluearena-100">Años de experiencia en consultoría y/o en alta dirección</dt>
                      <dd className="order-1 text-5xl font-extrabold text-white">+20</dd>
                  </div>
                  <div className="flex flex-col mt-10 sm:mt-0">
                      <dt className="order-2 antialiased mt-2 text-lg leading-6 font-medium text-bluearena-100">Proyectos en diferentes industrias a nivel local, regional y global</dt>
                      <dd className="order-1 text-5xl font-extrabold text-white">+100</dd>
                  </div>
                  <div className="flex flex-col mt-10 sm:mt-0">
                      <dt className="order-2 antialiased mt-2 text-lg leading-6 font-medium text-bluearena-100">Clientes en México, Estados Unidos, Colombia, Chile, Brasil, Panamá, Costa Rica</dt>
                      <dd className="order-1 text-5xl font-extrabold text-white">+50</dd>
                  </div>
              </dl>
          </div>
      </div>
    
     
  )
}

export default StatsHome




