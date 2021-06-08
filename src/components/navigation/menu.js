import * as React from "react"
import { Link } from 'gatsby'

//animate menu
import { useState } from 'react'
import { Transition } from '@headlessui/react'

//assets
import logoArena from '../../images/siteglobal/arenaLogo.svg'
// import bannerBackground from '../../images/mainpage/buildoffices.jpeg'
import { BriefcaseIcon, ChatAlt2Icon, GlobeIcon, OfficeBuildingIcon, PresentationChartBarIcon, UserGroupIcon } from "@heroicons/react/outline"
// import FlyoutMenu from "./flyout"

// markup
const MenuTop = ({data}) => {

    const [openServiciosDesk, setOpenServiciosDesk] = useState(false)
    const [openMoreDesk, setOpenMoreDesk] = useState(false)
    const [openServiciosMob, setOpenServiciosMob] = useState(false)

  return (
      <header>
          <div className="fixed w-screen bg-white z-50">
              <div className="relative z-20 shadow">
                  <div className="container-iphonex max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                      <div>
                          <Link to="/" className="flex" onMouseEnter={() => setOpenMoreDesk(false) & setOpenServiciosDesk(false)}>
                              <span className="sr-only">Arena Analytics</span>
                              <img className="h-8 w-auto sm:h-10" src={logoArena} alt="" />
                          </Link>
                      </div>
                      <div className="-mr-2 -my-2 md:hidden">
                          <button type="button" onClick={() => setOpenServiciosMob(!openServiciosMob)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-arena-500">
                              <span className="sr-only">Abrir menu</span>
                              {/* Heroicon name: outline/menu */}
                              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                          </button>
                      </div>
                      <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                          <nav className="flex space-x-10">
                            
                                
                                <Link to="/" className="px-2 text-base font-medium text-gray-500 hover:text-gray-900" onMouseEnter={() => setOpenMoreDesk(false) & setOpenServiciosDesk(false)}>Inicio</Link>
                              
                                <div className="relative bg-white" onMouseEnter={() => setOpenServiciosDesk(!openServiciosDesk) & setOpenMoreDesk(false)}>
                                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                                  <button type="button" className="group bg-white rounded-lg text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arena-500">
                                      <span>Servicios</span>
                                      {/*
                                        Heroicon name: solid/chevron-down
                                        Item active: "text-gray-600", Item inactive: "text-gray-400"
                                    */}
                                      <svg className="pl-2 h-5 w-7 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                  </button>
                              </div>

                              {/* <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Industrias</Link> */}
                              {/* <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Insights</Link> */}
                              <Link to="/careers/" className="px-2 text-base font-medium text-gray-500 hover:text-gray-900" onMouseEnter={() => setOpenMoreDesk(false) & setOpenServiciosDesk(false)}>Careers</Link>

                              <div className="relative bg-white" onMouseEnter={() => setOpenMoreDesk(!openMoreDesk) & setOpenServiciosDesk(false)}>
                                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                                  <button type="button" className="group bg-white rounded-lg text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arena-500">
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
                              {/* activeClassName="bg-arena-50 rounded-xl text-arena-600 font-semibold" */}
                              <Link to="/nosotros/responsabilidad/" className="hidden px-2 text-base font-medium xl:block text-gray-500 hover:text-gray-900" onMouseEnter={() => setOpenMoreDesk(false) & setOpenServiciosDesk(false)}>Responsabilidad Social</Link>
                          
                          </nav>
                          <div className="flex items-center md:ml-12" onMouseEnter={() => setOpenMoreDesk(false) & setOpenServiciosDesk(false)}>
                              <Link to="/contacto/" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-arena-600 hover:bg-brand-700 active:bg-brand-400" activeClassName="bg-gray-400">Contáctanos</Link>
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
                      <div className="hidden md:block absolute z-10 inset-x-0 transform shadow-lg" onMouseLeave={() => setOpenMoreDesk(false) & setOpenServiciosDesk(false)}>
                          <div className="bg-white">
                              <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-3 lg:gap-10 lg:px-8 lg:py-12 xl:py-16">

                                  <Link to="/servicios/consulting/" className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                                      <div className="flex md:h-full lg:flex-col">
                                          <div className="flex-shrink-0">
                                              <span className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-arena-500 text-white sm:h-12 sm:w-12">
                                                  <ChatAlt2Icon className="h-6 w-6"/>
                                              </span>
                                          </div>
                                          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                              <div>
                                                  <p className="text-base font-medium text-gray-900">Consultoría</p>
                                                  <p className="mt-1 text-sm text-gray-500">Beneficios tangibles y sostenibles a nuestros clientes en rentabilidad y ventas. Eficiencias operativas, flujo de efectivo y servicio.</p>
                                              </div>
                                              <p className="mt-2 text-sm font-medium text-arena-600 lg:mt-4">Conoce más <span aria-hidden="true">&rarr;</span></p>
                                          </div>
                                      </div>
                                  </Link>

                                  <Link to="/servicios/analytics/" className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                                      <div className="flex md:h-full lg:flex-col">
                                          <div className="flex-shrink-0">
                                              <span className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-arena-500 text-white sm:h-12 sm:w-12">

                                                <PresentationChartBarIcon className="h-6 w-6"/>
                                                  
                                              </span>
                                          </div>
                                          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                              <div>
                                                  <p className="text-base font-medium text-gray-900">Ciencia de Datos</p>
                                                  <p className="mt-1 text-sm text-gray-500">Generamos la capacidad de crear valor con la información de nuestros clientes, transformando la manera en la que operan y mejoramos la toma de decisiones.</p>
                                              </div>
                                              <p className="mt-2 text-sm font-medium text-arena-600 lg:mt-4">Conoce más <span aria-hidden="true">&rarr;</span></p>
                                          </div>
                                      </div>
                                  </Link>

                                  <Link to="/servicios/partners/" className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                                      <div className="flex md:h-full lg:flex-col">
                                          <div className="flex-shrink-0">
                                              <span className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-arena-500 text-white sm:h-12 sm:w-12">
                                                  <UserGroupIcon className="h-6 w-6"/>
                                                  
                                              </span>
                                          </div>
                                          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                              <div>
                                                  <p className="text-base font-medium text-gray-900">Nuestros Partners</p>
                                                  <p className="mt-1 text-sm text-gray-500">Soluciones tecnológicas soportadas por Inteligencia Artificial que habilitan la operación para lograr resultados reales.</p>
                                              </div>
                                              <p className="mt-2 text-sm font-medium text-arena-600 lg:mt-4">Conoce más <span aria-hidden="true">&rarr;</span></p>
                                          </div>
                                      </div>
                                  </Link>

                              </div>
                          </div>

                          {/* <div className="bg-gray-50">
                              <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">

                                <div className="flow-root">
                                      <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                          <svg className="flex-shrink-0 h-6 w-6 text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                          </svg>
                                          <span className="ml-3">Contáctanos</span>
                                      </Link>
                                  </div>
                                  
                                  <div className="flow-root">
                                      <Link to="/insights/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                          <svg className="flex-shrink-0 h-6 w-6 text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                          <span className="ml-3">Ver últimos insights</span>
                                      </Link>
                                  </div>

                                
                              </div>
                          </div> */}
                     
                      </div>
            )}
            </Transition>


              {/* About us */}

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
                      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 px-2 w-screen max-w-md sm:px-0" onMouseLeave={() => setOpenMoreDesk(false) & setOpenServiciosDesk(false)}>
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  <Link to="/nosotros/que-hacemos/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                      <OfficeBuildingIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/>
                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Sobre Nosotros</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/liderazgo/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                      <UserGroupIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/>
                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Liderazgo</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/responsabilidad/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 xl:hidden">
                                      <GlobeIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/>
                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Responsabilidad Social</p>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  )}
              </Transition>


              {/* Mobile menu, show/hide based on mobile menu state. */}
                <Transition
                    as={React.Fragment}
                    show={openServiciosMob}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    {(ref) => (
                    <div className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5 border-b border-gray-200 sm:pb-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img className="h-8 w-auto" src={logoArena} alt="arenalogos" />
                                    </div>
                                    <div className="-mr-2">
                                        <button type="button" onClick={() => setOpenServiciosMob(!openServiciosMob)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bluearena-500">
                                            <span className="sr-only">Cerrar menu</span>
                                            {/* Heroicon name: outline/x */}
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-8">
                                <p className="font-arena text-lef mb-4 text-sm font-semibold uppercase text-gray-500 tracking-wide">Servicios</p>
                                    <nav>
                                        <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                                            <Link to="/servicios/consulting/" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-arena-500 text-white sm:h-12 sm:w-12">
                                                    <ChatAlt2Icon className="h-6 w-6"/>
                                                    
                                                </div>
                                                <div className="ml-4 text-base font-medium text-gray-900">Consultoría</div>
                                            </Link>

                                            <Link to="/servicios/analytics/" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-arena-500 text-white sm:h-12 sm:w-12">
                                                    <PresentationChartBarIcon className="h-6 w-6"/>
                                                    
                                                </div>
                                                <div className="ml-4 text-base font-medium text-gray-900">Ciencia de Datos</div>
                                            </Link>

                                            <Link to="/servicios/partners/" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-arena-500 text-white sm:h-12 sm:w-12">
                                                    <UserGroupIcon className="h-6 w-6"/>
                                                </div>
                                                <div className="ml-4 text-base font-medium text-gray-900">Nuestros Partners</div>
                                            </Link>


                                        </div>
                                        {/* <div className="mt-8 text-base">
                                            <Link to="/insights/" className="font-medium text-brand-600 hover:text-bluearena-500">Ver últimos insights <span aria-hidden="true">&rarr;</span></Link>
                                        </div> */}
                                    </nav>
                                </div>
                            </div>
                            <div className="relative grid gap-6 w-full bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                <Link to="/careers/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                      <BriefcaseIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/>
                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Careers</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/que-hacemos/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                      <OfficeBuildingIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/>
                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Sobre Nosotros</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/liderazgo/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                      <UserGroupIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/>
                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Liderazgo</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/responsabilidad/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 xl:hidden">
                                      <GlobeIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/>
                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Responsabilidad Social</p>
                                      </div>
                                  </Link>
                              </div>
                            <div className="py-6 px-6 pt-0 border-t border-gray-200">
                                {/* <div className="grid grid-cols-2 gap-4">
                                    <Link to="/careers/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Careers</Link>
                                    <Link to="/nosotros/que-hacemos/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Nosotros</Link>
                                    <Link to="/nosotros/liderazgo/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Liderazgo</Link>
                                    <Link to="/nosotros/responsabilidad/" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">Responsabilidad Social</Link>
                                </div> */}
                                <div className="mt-6">
                                    <Link to="/contacto/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-arena-600 hover:bg-brand-700" activeClassName="bg-gray-400">Contáctanos</Link>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </Transition>
          </div>


      </header>
  )
}

export default MenuTop




