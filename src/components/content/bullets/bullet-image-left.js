import { PuzzleIcon, SparklesIcon } from '@heroicons/react/outline'
import * as React from 'react'

// markup
const ImageLeftBullet = props => {
  return (
      <div className="relative bg-white">
          <div className="h-56 bg-brand-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80" alt="Support team" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
              <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
                  <div className="lg:col-start-2">
                      <h3 className="font-arena mt-6 text-2xl font-extrabold text-brand-900 tracking-tight sm:text-3xl">¿Cómo nuestros proyectos impactan en tu desarrollo?</h3>
                      {/* <p className="mt-3 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.</p> */}
                      <dl className="mt-10 space-y-10">
                          <div className="relative">
                              <dt>
                                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500 text-white">
                                      <SparklesIcon className="h-6 w-6"/>                                   
                                  </div>
                                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Exposure con C-levels</p>
                              </dt>
                              <dd className="mt-2 ml-16 text-base text-gray-600 leading-relaxed">Generamos interacciones con líderes, empoderando a nuestro equipo a demostrar todo su potencial y a dejar huella en cada conversación. Desde el inicio de tu carrera, trabajarás con tomadores de decisiones de empresas con gran reconocimiento, generando valor en toda la organización.   </dd>
                          </div>

                          <div className="relative">
                              <dt>
                                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500 text-white">
                                      <PuzzleIcon className="h-6 w-6"/>
                                  </div>
                                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Proyectos en empresas líderes en México</p>
                              </dt>
                              <dd className="mt-2 ml-16 text-base text-gray-600 leading-relaxed">Colaboramos con empresas que conoces y cuyos productos consumes en tu día a día. Empresas que son líderes en México y con presencia internacional, enfocadas principalmente en las industrias de retail, consumo y manufactura, ofreciendo soluciones personalizadas, ¡por eso nos prefieren!</dd>
                          </div>
                      </dl>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ImageLeftBullet




