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
                      <h3 className="font-arena mt-6 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Cómo desarrollamos a la gente</h3>
                      <p className="mt-3 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.</p>
                      <dl className="mt-10 space-y-10">
                          <div className="relative">
                              <dt>
                                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-arena-500 text-white">
                                      {/* <!-- Heroicon name: outline/annotation --> */}
                                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                      </svg>
                                  </div>
                                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Exposure con C-levels</p>
                              </dt>
                              <dd className="mt-2 ml-16 text-base text-gray-600">Generamos interacciones con líderes, empoderando a nuestro equipo a demostrar todo su potencial y a dejar huella en cada conversación.  </dd>
                          </div>

                          <div className="relative">
                              <dt>
                                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-arena-500 text-white">
                                      {/* <!-- Heroicon name: outline/mail --> */}
                                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                      </svg>
                                  </div>
                                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Proyectos en empresas líderes en México</p>
                              </dt>
                              <dd className="mt-2 ml-16 text-base text-gray-600">Colaboramos con empresas que conoces y cuyos productos consumes en tu día a día. Empresas que son líderes en México y con presencia internacional, enfocadas principalmente en las industrias de retail, consumo y manufactura.</dd>
                          </div>
                      </dl>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ImageLeftBullet




