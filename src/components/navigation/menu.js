import * as React from "react"
import { Link } from 'gatsby'

//animate menu
import { useState } from 'react'
import { Transition } from '@headlessui/react'

//assets
import logoArena from '../../images/siteglobal/arenaLogo.svg'
import bannerBackground from '../../images/mainpage/buildoffices.jpeg'

// markup
const MenuTop = () => {

    const [openServiciosDesk, setOpenServiciosDesk] = useState(false)
    const [openMoreDesk, setOpenMoreDesk] = useState(false)

  return (
      <header>
          <div className="relative bg-white">
              <div className="relative z-20 shadow">
                  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                      <div>
                          <Link to="/" className="flex">
                              <span className="sr-only">Arena Analytics</span>
                              <img className="h-8 w-auto sm:h-10" src={logoArena} alt="" />
                          </Link>
                      </div>
                      <div className="-mr-2 -my-2 md:hidden">
                          <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Open menu</span>
                              {/* Heroicon name: outline/menu */}
                              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                          </button>
                      </div>
                      <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                          <nav className="flex space-x-10">
                              <div className="relative">
                                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                                  <button type="button" onClick={() => setOpenServiciosDesk(!openServiciosDesk) & setOpenMoreDesk(false)} className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      <span>Servicios</span>
                                      {/*
                        Heroicon name: solid/chevron-down

                        Item active: "text-gray-600", Item inactive: "text-gray-400"
                    */}
                                      <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                  </button>
                              </div>

                              <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Industrias</Link>
                              {/* <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Insights</Link> */}
                              <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Trabaja en Arena</Link>

                              <div className="relative">
                                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                                  <button type="button" onClick={() => setOpenMoreDesk(!openMoreDesk) & setOpenServiciosDesk(false)} className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      <span>Nosotros</span>
                                      {/*
                        Heroicon name: solid/chevron-down

                        Item active: "text-gray-600", Item inactive: "text-gray-400"
                    */}
                                      <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                  </button>
                              </div>
                          </nav>
                          <div className="flex items-center md:ml-12">
                              {/* <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Sign in</Link> */}
                              <Link to="/" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-indigo-700">Contáctanos</Link>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Solutions menu */}
            

            <Transition
              as={React.Fragment}
              show={openServiciosDesk}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              {(ref) => (
                      <div className="hidden md:block absolute z-10 inset-x-0 transform shadow-lg">
                          <div className="bg-white">
                              <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">

                                  <Link to="/" className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                                      <div className="flex md:h-full lg:flex-col">
                                          <div className="flex-shrink-0">
                                              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-arena-500 text-white sm:h-12 sm:w-12">
                                                  {/* Heroicon name: outline/cursor-click */}
                                                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                                  </svg>
                                              </span>
                                          </div>
                                          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                              <div>
                                                  <p className="text-base font-medium text-gray-900">Engagement</p>
                                                  <p className="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
                                              </div>
                                              <p className="mt-2 text-sm font-medium text-brand-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                                          </div>
                                      </div>
                                  </Link>

                                  <Link to="/" className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                                      <div className="flex md:h-full lg:flex-col">
                                          <div className="flex-shrink-0">
                                              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-arena-500 text-white sm:h-12 sm:w-12">
                                                  {/* Heroicon name: outline/chart-bar */}
                                                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                  </svg>
                                              </span>
                                          </div>
                                          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                              <div>
                                                  <p className="text-base font-medium text-gray-900">Analytics</p>
                                                  <p className="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from</p>
                                              </div>
                                              <p className="mt-2 text-sm font-medium text-brand-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                                          </div>
                                      </div>
                                  </Link>

                                  <Link to="/" className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                                      <div className="flex md:h-full lg:flex-col">
                                          <div className="flex-shrink-0">
                                              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-arena-500 text-white sm:h-12 sm:w-12">
                                                  {/* Heroicon name: outline/shield-check */}
                                                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                  </svg>
                                              </span>
                                          </div>
                                          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                              <div>
                                                  <p className="text-base font-medium text-gray-900">Security</p>
                                                  <p className="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
                                              </div>
                                              <p className="mt-2 text-sm font-medium text-brand-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                                          </div>
                                      </div>
                                  </Link>

                                  <Link to="/" className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                                      <div className="flex md:h-full lg:flex-col">
                                          <div className="flex-shrink-0">
                                              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-arena-500 text-white sm:h-12 sm:w-12">
                                                  {/* Heroicon name: outline/view-grid */}
                                                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                                  </svg>
                                              </span>
                                          </div>
                                          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                              <div>
                                                  <p className="text-base font-medium text-gray-900">Integrations</p>
                                                  <p className="mt-1 text-sm text-gray-500">Connect with third-party tools that you&#039;re already using.</p>
                                              </div>
                                              <p className="mt-2 text-sm font-medium text-brand-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                                          </div>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                          <div className="bg-gray-50">
                              <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                  <div className="flow-root">
                                      <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                          {/* Heroicon name: outline/play */}
                                          <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                          <span className="ml-3">Watch Demo</span>
                                      </Link>
                                  </div>

                                  <div className="flow-root">
                                      <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                          {/* Heroicon name: outline/check-circle */}
                                          <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                          <span className="ml-3">View All Products</span>
                                      </Link>
                                  </div>

                                  <div className="flow-root">
                                      <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                          {/* Heroicon name: outline/phone */}
                                          <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                          </svg>
                                          <span className="ml-3">Contact Sales</span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
            )}
            </Transition>


              {/* More menu */}

            <Transition
              as={React.Fragment}
              show={openMoreDesk}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              {(ref) => (
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
                                              <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                  {/* Heroicon name: outline/newspaper */}
                                                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                  </svg>
                                                  <span className="ml-4">Gente &amp; Liderazgo</span>
                                              </Link>
                                          </li>

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
                                      <Link to="/" className="text-arena-600 hover:text-indigo-500"> Ver todos los insights <span aria-hidden="true">&rarr;</span></Link>
                                  </div>
                              </div>
                          </div>
                      </div>
            )}
            </Transition>


              {/*
            Mobile menu, show/hide based on mobile menu state.

            Entering: "duration-200 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        */}
              <div className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                      <div className="pt-5 pb-6 px-5 sm:pb-8">
                          <div className="flex items-center justify-between">
                              <div>
                                  <img className="h-8 w-auto" src={logoArena} alt="Workflow" />
                              </div>
                              <div className="-mr-2">
                                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                      <span className="sr-only">Close menu</span>
                                      {/* Heroicon name: outline/x */}
                                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                  </button>
                              </div>
                          </div>
                          <div className="mt-6 sm:mt-8">
                              <nav>
                                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                                      <Link to="/" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                              {/* Heroicon name: outline/chart-bar */}
                                              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                              </svg>
                                          </div>
                                          <div className="ml-4 text-base font-medium text-gray-900">
                                              Analytics
                        </div>
                                      </Link>

                                      <Link to="/" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                              {/* Heroicon name: outline/cursor-click */}
                                              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                              </svg>
                                          </div>
                                          <div className="ml-4 text-base font-medium text-gray-900">
                                              Engagement
                        </div>
                                      </Link>

                                      <Link to="/" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                              {/* Heroicon name: outline/shield-check */}
                                              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                              </svg>
                                          </div>
                                          <div className="ml-4 text-base font-medium text-gray-900">
                                              Security
                        </div>
                                      </Link>

                                      <Link to="/" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                              {/* Heroicon name: outline/view-grid */}
                                              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                              </svg>
                                          </div>
                                          <div className="ml-4 text-base font-medium text-gray-900">
                                              Integrations
                        </div>
                                      </Link>
                                  </div>
                                  <div className="mt-8 text-base">
                                      <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500"> View all products <span aria-hidden="true">&rarr;</span></Link>
                                  </div>
                              </nav>
                          </div>
                      </div>
                      <div className="py-6 px-5">
                          <div className="grid grid-cols-2 gap-4">
                              <Link to="/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Pricing</Link>
                              <Link to="/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Docs</Link>
                              <Link to="/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Company</Link>
                              <Link to="/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Resources</Link>
                              <Link to="/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Blog</Link>
                              <Link to="/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Contact Sales</Link>
                          </div>
                          <div className="mt-6">
                              <Link to="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Sign up</Link>
                              <p className="mt-6 text-center text-base font-medium text-gray-500">
                                  Existing customer?
                                  <Link to="/" className="text-indigo-600 hover:text-indigo-500">Sign in</Link>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


      </header>
  )
}

export default MenuTop




