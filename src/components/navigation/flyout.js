import * as React from "react"
import { Link } from 'gatsby'
import bannerBackground from '../../images/mainpage/buildoffices.jpeg'

//assets

// markup
const FlyoutMenu = () => {
  return (

    <div className="hidden md:block absolute z-10 inset-x-0 transform shadow-lg">
                          <div className="absolute inset-0 flex">
                              <div className="bg-white w-1/2"></div>
                              <div className="bg-gray-50 w-1/2"></div>
                          </div>
                          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                              <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                  <div>
                                      <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Arena Analytics</h3>
                                      <ul className="mt-5 space-y-6">
                                          <li className="flow-root">
                                              <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                  {/* Heroicon name: outline/information-circle */}
                                                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                  </svg>
                                                  <span className="ml-4">Nosotros</span>
                                              </Link>
                                          </li>

                                          <li className="flow-root">
                                              <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                  {/* Heroicon name: outline/office-building */}
                                                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                  </svg>
                                                  <span className="ml-4">Filosofía</span>
                                              </Link>
                                          </li>

                                          <li className="flow-root">
                                              <Link to="/nosotros/gente-y-liderazgo/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                  {/* Heroicon name: outline/newspaper */}
                                                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                  </svg>
                                                  <span className="ml-4">Liderazgo</span>
                                              </Link>
                                          </li>


                                          <li className="flow-root">
                                              <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                  {/* Heroicon name: outline/shield-check */}
                                                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                      <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                  </svg>
                                                  <span className="ml-4">Cultura Arena</span>
                                              </Link>
                                          </li>
                                      </ul>
                                  </div>
                                  <div>
                                      <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Ligas de interes</h3>
                                      <ul className="mt-5 space-y-6">

                                            <li className="flow-root">
                                              <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                  {/* Heroicon name: outline/briefcase */}
                                                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                  </svg>
                                                  <span className="ml-4">Responsabilidad Social</span>
                                              </Link>
                                          </li>

                                          <li className="flow-root">
                                              <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                  {/* Heroicon name: outline/globe-alt */}
                                                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                                  </svg>
                                                  <span className="ml-4">Partners</span>
                                              </Link>
                                          </li>

                                          <li className="flow-root">
                                              <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                  {/* Heroicon name: outline/bookmark-alt */}
                                                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                  </svg>
                                                  <span className="ml-4">Resultados &amp; Premios</span>
                                              </Link>
                                          </li>

                                          <li className="flow-root">
                                              <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                  {/* Heroicon name: outline/user-group */}
                                                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                  <span className="ml-4">Contacto</span>
                                              </Link>
                                          </li>

                                      </ul>
                                  </div>
                              </nav>
                              <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                  <div>
                                      <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Últimos Insights</h3>
                                      <ul className="mt-6 space-y-6">
                                          <li className="flow-root">
                                              <Link to="/" className="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                                                  <div className="hidden sm:block flex-shrink-0">
                                                      <img className="w-32 h-20 object-cover rounded-md" src={bannerBackground} alt="" />
                                                  </div>
                                                  <div className="w-0 flex-1 sm:ml-8">
                                                      <h4 className="text-base font-medium text-gray-900 truncate">Omnicanalidad fortalecida con Machine Learning</h4>
                                                      <p className="mt-1 text-sm text-gray-500">Una estrategia omnicanal llevada con inteligencia, puede ser la ventaja competitiva que tu negocio...</p>
                                                  </div>
                                              </Link>
                                          </li>
                                          <li className="flow-root">
                                              <Link to="/" className="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                                                  <div className="hidden sm:block flex-shrink-0">
                                                      <img className="w-32 h-20 object-cover rounded-md" src={bannerBackground} alt="" />
                                                  </div>
                                                  <div className="w-0 flex-1 sm:ml-8">
                                                      <h4 className="text-base font-medium text-gray-900 truncate">México, el futuro epicentro de la logística en Norteamérica</h4>
                                                      <p className="mt-1 text-sm text-gray-500">Tras el Covid-19, la industria logística ha cambiado drásticamente. Ahora, con las vacunas listas...</p>
                                                  </div>
                                              </Link>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="mt-6 text-sm font-medium">
                                      <Link to="/" className="text-arena-600 hover:text-brand-500"> Ver todos los insights <span aria-hidden="true">&rarr;</span></Link>
                                  </div>
                              </div>
                          </div>
                      </div>

    
    
    
  )
}

export default FlyoutMenu




