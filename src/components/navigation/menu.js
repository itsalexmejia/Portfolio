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
                                                  {/* <ChatAlt2Icon className="h-6 w-6"/> */}
                                                  <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" className="h-8 w-8 fillwhite">
                  <g id="Expand">
                    <rect x="96" y="80" width="16" height="16" />
                    <rect x="128" y="80" width="80" height="16" />
                    <rect x="80" y="112" width="128" height="16" />
                    <rect x="80" y="144" width="104" height="16" />
                    <rect x="320" y="160" width="16" height="16" />
                    <rect x="352" y="160" width="80" height="16" />
                    <rect x="304" y="192" width="128" height="16" />
                    <rect x="304" y="224" width="104" height="16" />
                    <path d="M64.2,223.7c-0.1,2.7-0.2,5.5-0.2,8.3s0.1,5.6,0.2,8.3l16-0.7c-0.1-2.5-0.2-5.1-0.2-7.7s0.1-5.1,0.2-7.7L64.2,223.7z" />
                    <path d="M139.1,384.3l9.7-12.7c-37.2-28.3-61.4-70.3-67.4-116.7L65.6,257C72.1,307.6,98.6,353.4,139.1,384.3z" />
                    <path d="M393.9,98.4c-26.1-27-59.5-45.8-96.2-53.9l-3.5,15.6c33.6,7.5,64.2,24.7,88.1,49.4L393.9,98.4z" />
                    <path d="M410.9,272H456c4.4,0,8-3.6,8-8V136c0-4.4-3.6-8-8-8h-78.5C347.2,92.4,302.8,71.9,256,72c-5.4,0-10.7,0.4-16,0.9V56
		c0-4.4-3.6-8-8-8H56c-4.4,0-8,3.6-8,8v128c0,4.4,3.6,8,8,8h45.1c-19.7,76,18.8,155.1,90.9,186.4v5.6h-8c-4.4,0-8,3.6-8,8v64
		c0,4.4,3.6,8,8,8h8v8c0,13.3,10.7,24,24,24h80c13.3,0,24-10.7,24-24v-8h8c4.4,0,8-3.6,8-8v-64c0-4.4-3.6-8-8-8h-8v-5.6
		C365.1,358.8,398.6,319.6,410.9,272z M448,256h-72c-1.7,0-3.4,0.6-4.8,1.6L352,272v-8c0-4.4-3.6-8-8-8h-56V144h160V256z M272,296
		v88h-32v-88c0-1.2-0.3-2.5-0.8-3.6l-23.9-47.7l38.5,11c1.4,0.4,3,0.4,4.4,0l13.8-3.9V264c0,4.4,3.6,8,8,8h3.1l-10.3,20.4
		C272.3,293.5,272,294.8,272,296z M64,64h160v112h-64c-4.4,0-8,3.6-8,8v8l-19.2-14.4c-1.4-1-3.1-1.6-4.8-1.6H64V64z M203,365.6
		c-69-27.1-106-102.4-85.2-173.6h7.6l29.9,22.4c1.4,1,3.1,1.6,4.8,1.6c4.4,0,8-3.6,8-8v-16h64c4.4,0,8-3.6,8-8V89
		c5.3-0.6,10.7-0.9,16-1c37.1,0,72.8,14.3,99.5,40H280c-4.4,0-8,3.6-8,8v99.1l-16,4.6l-53.8-15.4c-2.4-0.7-5-0.2-7,1.3l-32,24
		l9.6,12.8l24.3-18.2l26.9,53.7V384h-16v-11C208,369.8,206,366.8,203,365.6z M192,400h128v16H192V400z M304,472c0,4.4-3.6,8-8,8h-80
		c-4.4,0-8-3.6-8-8v-8h96V472z M320,448H192v-16h128V448z M288,384v-86.1l12.9-25.9H336v16c0,4.4,3.6,8,8,8c1.7,0,3.4-0.6,4.8-1.6
		l29.9-22.4h15.7c-12.4,42.7-43.9,77.3-85.3,93.6c-3,1.2-5,4.2-5,7.4v11H288z"/>
                  </g>
                </svg>

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

                                                {/* <PresentationChartBarIcon className="h-6 w-6"/> */}
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" className="h-8 w-8 fillwhite">
                  <g id="Outlines">
                    <g>
                      <circle cx="264" cy="320" r="8" />
                      <circle cx="296" cy="320" r="8" />
                      <circle cx="328" cy="320" r="8" />
                      <circle cx="264" cy="256" r="8" />
                      <circle cx="296" cy="256" r="8" />
                      <circle cx="328" cy="256" r="8" />
                      <path d="M176,264h48c4.4,0,8-3.6,8-8s-3.6-8-8-8h-48c-4.4,0-8,3.6-8,8S171.6,264,176,264z" />
                      <circle cx="264" cy="192" r="8" />
                      <circle cx="296" cy="192" r="8" />
                      <circle cx="328" cy="192" r="8" />
                      <path d="M224,184h-48c-4.4,0-8,3.6-8,8s3.6,8,8,8h48c4.4,0,8-3.6,8-8S228.4,184,224,184z" />
                      <path d="M479.9,424.1c0.4-25.6-9.9-58.3-29.3-94.9c26.7-70.8,12.8-150.6-36.4-208.2c-2.9-3.4-7.9-3.8-11.3-0.9s-3.8,7.9-0.9,11.3
			c42.2,49.4,56.5,116.7,38,179c-10.6-17.7-22.1-34.8-34.5-51.3c-2.6-3.5-7.7-4.3-11.2-1.6c-3.5,2.6-4.3,7.7-1.6,11.2c0,0,0,0,0,0
			c14.8,19.6,28.2,40.2,40.2,61.6c-19.6,46.2-56.4,83-102.6,102.6c-36.4-20.8-70.6-45.2-102-73H368c4.4,0,8-3.6,8-8v-9.5
			c12.4-4.3,19-17.9,14.7-30.4c-2.4-6.9-7.8-12.3-14.7-14.7V160c0-4.4-3.6-8-8-8h-60.3c-32.7-30.2-68.3-57-106.3-80
			c39.6-11.8,82-10.5,120.8,3.8c-1.4,3.9-2.1,8.1-2.1,12.2c-0.2,22.3,17.7,40.6,40,40.9s40.6-17.7,40.9-40s-17.7-40.6-40-40.9
			c-11.8-0.1-23,4.9-30.8,13.7c-47.5-18.2-100-18.3-147.6-0.2c-36.2-19.1-69-29.5-94.6-29.3c-13.1-17.7-38.1-21.4-55.8-8.4
			s-21.4,38.1-8.4,55.8c2.4,3.2,5.2,6,8.4,8.4c-0.4,25.8,10,58.6,29.2,94.7c-29.3,77.7-9.5,165.5,50.4,223.1c3.2,3.1,8.3,3,11.3-0.2
			c3.1-3.2,3-8.3-0.2-11.3C71.2,344.5,51.6,270.2,72,201.4c18.8,31.2,40.2,60.7,64,88.2V352c0,4.4,3.6,8,8,8h32c4.4,0,8-3.6,8-8
			s-3.6-8-8-8h-24v-36.4c8.2,9,16.7,18,25.5,26.8c39.8,40.5,84.5,76,132.9,105.6c-33.8,10.1-69.7,10.5-103.7,1.4
			c5.4-21.6-7.7-43.5-29.3-49s-43.5,7.7-49,29.3c-5.4,21.6,7.7,43.5,29.3,49c15.6,3.9,32.1-1.8,41.9-14.7
			c42.7,12.1,88.1,10.2,129.6-5.5c35.6,18.8,68,29.4,93.6,29.4c0.4,0,0.8,0,1.3,0c13.2,17.7,38.1,21.3,55.8,8.1
			c17.7-13.2,21.3-38.1,8.1-55.8C485.8,429.2,483,426.4,479.9,424.1L479.9,424.1z M360,64c13.3,0,24,10.7,24,24s-10.7,24-24,24
			s-24-10.7-24-24S346.7,64,360,64z M210.6,344c-5.6-5.2-11.2-10.5-16.8-16H224c4.4,0,8-3.6,8-8s-3.6-8-8-8h-46
			c-5.1-5.3-10.1-10.6-15-16h197v1.5c-12.4,4.3-19,17.9-14.7,30.4c2.4,6.9,7.8,12.3,14.7,14.7v1.5H210.6z M360,280H152v-48h208V280z
			 M368,328c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S372.4,328,368,328z M56,32c8.4,0,16.2,4.4,20.5,11.7c0,0.1,0.1,0.2,0.2,0.3
			c2.2,3.6,3.3,7.8,3.4,12c0,13.3-10.7,24-24,24c-4.3,0-8.4-1.2-12.1-3.4l-0.2-0.1C32.3,69.7,28.6,55,35.4,43.7
			C39.7,36.4,47.5,32,56,32z M48.2,95.2c21.6,4.4,42.6-9.6,47-31.2c1-5.2,1-10.5,0-15.7c23.9,2.9,47.1,10.2,68.3,21.4
			C122.9,90,89.9,123,69.7,163.7C58.4,142.4,51.1,119.2,48.2,95.2z M181.5,79.1c36.5,20.7,70.7,45.2,102.2,72.9H264
			c-4.4,0-8,3.6-8,8s3.6,8,8,8h96v48H152v-48h80c4.4,0,8-3.6,8-8s-3.6-8-8-8h-88c-4.4,0-8,3.6-8,8v104.5c-21.3-26-40.4-53.7-57-83
			C98.6,135.4,135.3,98.6,181.5,79.1z M168,456c-13.3,0-24-10.7-24-24s10.7-24,24-24s24,10.7,24,24S181.3,456,168,456z M348.2,442.4
			c40.8-20.3,73.8-53.3,94.1-94.1c11.3,21.3,18.5,44.5,21.4,68.5c-21.6-4.3-42.6,9.7-46.9,31.3c-1,5.2-1,10.5,0,15.7
			C392.8,461,369.5,453.8,348.2,442.4z M456,480c-8.4,0-16.1-4.4-20.5-11.6l-0.2-0.3c-2.2-3.6-3.3-7.8-3.4-12.1
			c0-13.3,10.7-24,24-24c4.3,0,8.4,1.2,12.1,3.4l0.2,0.1c11.4,6.8,15.1,21.4,8.3,32.8C472.3,475.6,464.5,480,456,480z"/>
                      <path d="M464,104c13.3,0,24-10.7,24-24s-10.7-24-24-24s-24,10.7-24,24S450.7,104,464,104z M464,72c4.4,0,8,3.6,8,8s-3.6,8-8,8
			s-8-3.6-8-8S459.6,72,464,72z"/>
                      <path d="M56,392c-13.3,0-24,10.7-24,24s10.7,24,24,24s24-10.7,24-24S69.3,392,56,392z M56,424c-4.4,0-8-3.6-8-8s3.6-8,8-8
			s8,3.6,8,8S60.4,424,56,424z"/>
                    </g>
                  </g>
                </svg>


                                                  
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
                                                  {/* <UserGroupIcon className="h-6 w-6"/> */}
                                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 509.4" className="h-8 w-8 fillwhite">
                  <defs>
                  </defs>
                  <g>
                    <path d="M504.5,115.9H455l29.9-53c5.5-9.8,6.9-21.2,3.9-32.1C485.9,20,478.8,11,469,5.4c-20.3-11.4-46-4.3-57.5,16l-6.8,12.1
		c-2,3.6-0.8,8.2,2.8,10.2c3.6,2,8.2,0.8,10.2-2.8l6.8-12.1c7.4-13.1,24-17.7,37-10.3c6.3,3.6,10.9,9.4,12.8,16.4
		c1.9,7,1.1,14.3-2.5,20.7L395.4,191c-4.5,7.9-12.6,13.1-21.7,13.7c-0.7,0-1.3,0.1-2,0.1c-8.3,0-16.4-3.9-21.5-10.5l-58-74.8
		c-9.2-11.8-7-29,4.8-38.1c11.8-9.2,29-7,38.1,4.8l26,33.6c1.5,2,4,3.1,6.5,2.9c2.5-0.2,4.8-1.6,6-3.8L403,67
		c2-3.6,0.8-8.2-2.8-10.2c-3.6-2-8.2-0.8-10.2,2.8l-23.7,42l-19.1-24.7c-14.3-18.4-40.8-21.7-59.2-7.5c-14.5,11.2-19.6,30-14.2,46.5
		l-266.2,0c-4.1,0-7.5,3.4-7.5,7.5v202c0,26.6,21.6,48.3,48.3,48.3c4.1,0,8.1-0.5,12-1.5c1.8,5.7,5,10.8,9.3,15.2
		c7.4,7.4,17.2,11.1,26.9,11.1c5.3,0,10.5-1.1,15.4-3.3c0.4,9.5,4.3,18.4,11.1,25.1c7.4,7.4,17.2,11.1,26.9,11.1
		c7.1,0,14.2-2,20.4-5.9c0.9,8.7,4.7,16.7,10.9,23c7.4,7.4,17.2,11.1,26.9,11.1c9.6,0,19.2-3.6,26.6-10.8
		c1.1,8.2,4.8,15.8,10.8,21.8c5.5,5.5,12.3,9.1,19.7,10.5c1.1,6.8,4.2,13.3,9.4,18.5c6.3,6.3,14.8,9.8,23.7,9.8s17.4-3.5,23.7-9.8
		c7.4-7.4,10.6-17.5,9.6-27.2c1.1,0.1,2.3,0.2,3.5,0.2c9,0,17.4-3.5,23.7-9.8c6.3-6.3,9.8-14.8,9.8-23.7c0-1.2-0.1-2.3-0.2-3.5
		c1.1,0.1,2.3,0.2,3.5,0.2c2.3,0,4.6-0.2,6.7-0.7c4.1-0.9,6.6-4.8,5.8-8.9c-0.9-4.1-4.8-6.6-8.9-5.8c-1.2,0.2-2.4,0.4-3.7,0.4
		c-5,0-9.6-1.9-13.1-5.4l-22.1-22c-7.2-7.2-7.2-19,0-26.2c3.5-3.5,8.2-5.4,13.1-5.4c4.9,0,9.6,1.9,13.1,5.4l22.1,22.1c0,0,0,0,0,0
		c4.4,4.4,6.2,10.7,5,16.8c-0.8,4.1,1.8,8,5.9,8.8c4.1,0.8,8-1.8,8.8-5.9c0.7-3.4,0.8-6.8,0.5-10.2c1.2,0.1,2.3,0.2,3.5,0.2
		c8.6,0,17.2-3.3,23.7-9.8c5.7-5.7,8.9-13,9.7-20.5c6.5,3.2,13.8,5.1,21.5,5.1c26.6,0,48.3-21.6,48.3-48.3v-202
		C512,119.3,508.6,115.9,504.5,115.9L504.5,115.9z M15,325.4V130.9h66.5v63.1c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.4,7.5-7.5v-63.1
		h119.8c9.7,0,18.8,3.8,25.6,10.6l77.2,77.2c6.1,6.1,9.4,14.1,9.4,22.7s-3.3,16.6-9.4,22.7c-6.1,6.1-14.1,9.4-22.7,9.4
		c-8.6,0-16.6-3.3-22.7-9.4L211.7,202c-1.4-1.4-3.3-2.2-5.3-2.2c-2,0-3.9,0.8-5.3,2.2L96.5,306.5v-82.5c0-4.1-3.4-7.5-7.5-7.5
		c-4.1,0-7.5,3.4-7.5,7.5v97.5l-11.9,11.9c-6.4,6.4-10.2,14.6-11,23.5c-3.3,1.1-6.8,1.6-10.3,1.6C29.9,358.7,15,343.7,15,325.4
		L15,325.4z M311.5,489c-3.5,3.5-8.2,5.4-13.1,5.4s-9.6-1.9-13.1-5.4c-7.2-7.2-7.2-19,0-26.2c3.6-3.6,8.4-5.4,13.1-5.4
		s9.5,1.8,13.1,5.4C318.8,470,318.8,481.7,311.5,489z M348.4,452.1c-3.5,3.5-8.2,5.4-13.1,5.4s-9.6-1.9-13.1-5.4l-10-10
		c-3.5-3.5-5.4-8.2-5.4-13.1s1.9-9.6,5.4-13.1s8.2-5.4,13.1-5.4c4.9,0,9.6,1.9,13.1,5.4l10,10c3.5,3.5,5.4,8.2,5.4,13.1
		C353.8,444,351.9,448.6,348.4,452.1L348.4,452.1z M350,346.6c-9,0-17.4,3.5-23.7,9.8c-10.7,10.7-12.6,26.8-5.9,39.5
		c-7.1,1-13.7,4.3-18.8,9.5c-6.3,6.3-9.8,14.8-9.8,23.7c0,4.7,1,9.3,2.8,13.5c-7.3,0.8-14.3,4-19.9,9.6c-4,4-6.8,8.7-8.3,13.8
		c-3.8-1-7.3-3-10.2-5.9c-4.4-4.4-6.8-10.2-6.8-16.3c0-6.1,2.4-11.9,6.7-16.3l52.2-52.2c2.9-2.9,2.9-7.7,0-10.6
		c-2.9-2.9-7.7-2.9-10.6,0l-73.2,73.2c-9,9-23.6,9-32.6,0c-4.4-4.4-6.8-10.1-6.8-16.3s2.4-12,6.8-16.3l55.4-55.4
		c2.9-2.9,2.9-7.7,0-10.6s-7.7-2.9-10.6,0l-70.4,70.4c-9,9-23.6,9-32.6,0c-4.4-4.4-6.8-10.1-6.8-16.3s2.4-12,6.8-16.3l55.7-55.7
		c2.9-2.9,2.9-7.7,0-10.6c-2.9-2.9-7.7-2.9-10.6,0l-66,66c-9,9-23.6,9-32.6,0c-4.4-4.4-6.8-10.1-6.8-16.3s2.4-12,6.8-16.3
		l126.2-126.2l56.8,56.8c8.9,8.9,20.7,13.8,33.3,13.8c12.6,0,24.4-4.9,33.3-13.8c8.9-8.9,13.8-20.7,13.8-33.3
		c0-12.6-4.9-24.4-13.8-33.3l-77.2-77.2l0,0h29.7l56.2,72.5c7.9,10.2,20.4,16.3,33.3,16.3c1,0,2,0,3.1-0.1c14.1-1,26.7-9,33.7-21.3
		l7-12.3v139.4c0,0.3,0,0.6,0,0.9c-5-2.8-10.7-4.4-16.6-4.4c-9,0-17.4,3.5-23.7,9.8c-5.2,5.2-8.4,11.7-9.5,18.8
		C361,348,355.6,346.6,350,346.6L350,346.6z M422,378.5c-7.2,7.2-18.9,7.2-26.2,0c0,0,0,0,0,0l-10-10c-3.5-3.5-5.4-8.1-5.4-13.1
		c0-5,1.9-9.6,5.4-13.1c3.5-3.5,8.2-5.4,13.1-5.4c5,0,9.6,1.9,13.1,5.4l10,10C429.2,359.5,429.2,371.3,422,378.5L422,378.5z
		 M497,325.4c0,18.3-14.9,33.3-33.3,33.3c-18.3,0-33.3-14.9-33.3-33.3v-166l16.1-28.5H497L497,325.4z"/>
                    <path d="M438,174.7c0,14.4,11.7,26.1,26.1,26.1c14.4,0,26.1-11.7,26.1-26.1c0-14.4-11.7-26.1-26.1-26.1
		C449.7,148.6,438,160.3,438,174.7L438,174.7z M475.2,174.7c0,6.1-5,11.1-11.1,11.1s-11.1-5-11.1-11.1c0-6.1,5-11.1,11.1-11.1
		S475.2,168.6,475.2,174.7z"/>
                    <path d="M74.4,174.7c0-14.4-11.7-26.1-26.1-26.1s-26.1,11.7-26.1,26.1c0,14.4,11.7,26.1,26.1,26.1S74.4,189.1,74.4,174.7z
		 M37.2,174.7c0-6.1,5-11.1,11.1-11.1s11.1,5,11.1,11.1c0,6.1-5,11.1-11.1,11.1S37.2,180.8,37.2,174.7z"/>
                  </g>
                </svg>

                                                  
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
                                      {/* <OfficeBuildingIcon className="block flex-shrink-0 h-6 w-6 text-arena-600 xl:hidden" /> */}

                                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" className="flex-shrink-0 h-6 w-6 text-arena-600 fillarena xl:block">
                                          <defs>
                                          </defs>
                                          <g>
                                              <path d="M370.9,467.9c-35,19-74.8,29.1-114.9,29.1c-64.4,0-124.9-25.1-170.4-70.6S15,320.4,15,256c0-63.7,24.6-123.7,69.3-169.1
		L73.6,76.4C26.1,124.6,0,188.4,0,256c0,68.4,26.6,132.7,75,181c48.4,48.4,112.6,75,181,75c42,0,83.5-10.4,120.4-30h23.1v-15h-26.9
		L370.9,467.9z"/>
                                              <path d="M414.5,467h15v15h-15V467z" />
                                              <path d="M437,75C388.7,26.6,324.4,0,256,0C192.6,0,131.8,23.3,84.8,65.7l10,11.1C139.1,37,196.4,15,256,15
		c64.4,0,124.9,25.1,170.4,70.6c45.5,45.5,70.6,106,70.6,170.4c0,40.1-10.1,79.9-29.1,114.9l-0.9,1.7V467h-22.5v15H482V376.4
		c19.6-36.8,30-78.4,30-120.4C512,187.6,485.4,123.3,437,75z"/>
                                              <path d="M368.5,67.5h15v15h-15V67.5z" />
                                              <path d="M338.5,52.5h15v15h-15V52.5z" />
                                              <path d="M282.2,121c0-20.7-16.8-37.5-37.5-37.5s-37.5,16.8-37.5,37.5c0,20.7,16.8,37.5,37.5,37.5
		C265.4,158.5,282.2,141.7,282.2,121z M222.3,121c0-12.4,10.1-22.5,22.5-22.5c12.4,0,22.5,10.1,22.5,22.5s-10.1,22.5-22.5,22.5
		C232.3,143.5,222.3,133.4,222.3,121z"/>
                                              <path d="M203.5,368.5v60h105v-60H286v-195h-82.5v60H226v135H203.5z M218.5,218.5v-30H271v195h22.5v30h-75v-30H241v-165H218.5z" />
                                          </g>
                                      </svg>

                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Sobre Nosotros</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/liderazgo/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                      {/* <UserGroupIcon className="block flex-shrink-0 h-6 w-6 text-arena-600 xl:hidden"/> */}
                                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 402.6" className="flex-shrink-0 h-6 w-6 text-arena-600 fillarena xl:block">
                                          <defs>
                                          </defs>
                                          <g>
                                              <path d="M158.6,151.2c7.2,2.9,13.5,6.5,18.6,10.7v-25.6c0-9.4,4.3-17.9,11.9-25.2c5.5-5.2,12.8-9.8,21.3-13.3
		c-2.9-6.4-4.6-13.4-4.6-20.9V31.3c0-8.6,3.5-16.4,9.2-22.1c5.7-5.7,13.5-9.2,22.1-9.2h37.5c8.6,0,16.4,3.5,22.1,9.2
		c5.7,5.7,9.2,13.5,9.2,22.1V77c0,7.4-1.6,14.5-4.6,20.9c8.5,3.5,15.7,8,21.2,13.1c7.7,7.3,12.1,15.9,12.1,25.3V162
		c5.1-4.2,11.5-7.8,18.7-10.8c-2.9-6.4-4.6-13.4-4.6-20.8V84.8c0-8.6,3.5-16.4,9.2-22.1c5.7-5.7,13.5-9.2,22.1-9.2h37.5
		c8.6,0,16.5,3.5,22.1,9.2c5.7,5.7,9.2,13.5,9.2,22.1v45.6c0,7.4-1.6,14.5-4.5,20.8c8.7,3.6,16.1,8.2,21.7,13.5
		c7.6,7.2,11.9,15.8,11.9,25.1v55.1h26.3c4.1,0,7.5,3.4,7.5,7.5c0,1.8-0.6,3.4-1.7,4.7l-27.5,40l27.8,40.5c2.4,3.4,1.5,8.1-1.9,10.4
		c-1.2,0.9-2.8,1.3-4.3,1.3H340.3l2.8,35.7c0.3,4.5-1.2,8.7-3.9,11.9c-4.8,5.6-12.8,7.3-19.5,4.1L256,374.7l-64.5,26.6
		c-6.8,2.8-14.6,0.7-19.1-5c-2.5-3.2-3.7-7.3-3.5-11.3l2.8-35.7h-53.7c-4.1,0-7.5-3.3-7.5-7.5c0-4.1,3.3-7.5,7.5-7.5h54.8l1.5-19
		l-44.9-52.7c-0.8-0.8-1.5-1.9-2.1-2.8H21.7l22.6,32.9c1.8,2.5,1.9,5.9,0.1,8.6l-22.7,33h62.4c4.1,0,7.5,3.4,7.5,7.5
		c0,4.1-3.3,7.5-7.5,7.5H7.5c-4.1,0-7.5-3.3-7.5-7.5c0-1.8,0.6-3.4,1.7-4.7l27.5-40L1.4,256.6c-3.6-5.2,0.3-11.8,6.4-11.8H34v-38.1
		c0-4.1,3.3-7.5,7.5-7.5s7.5,3.4,7.5,7.5v38.1h77.7c0.9-2,2.9-4.7,4.8-6.1c2.1-1.6,4.6-2.6,7.1-3.2l38.6-9.3v-36.5
		c0-5-2.7-10-7.4-14.4c-4.8-4.5-11.5-8.4-19.7-11.4c-9.5,10.5-22.9,16.5-37,16.5s-27.6-6-37.1-16.5c-8.1,2.9-17.2,7.7-22.6,14.6
		c-2.6,3.2-7.3,3.7-10.5,1.1c-3.2-2.6-3.7-7.3-1.2-10.5c6.6-8.2,16.2-14,25.9-18c-2.9-6.4-4.6-13.4-4.6-20.8V98.5V84.8
		c0-8.6,3.5-16.4,9.2-22.1c5.7-5.7,13.5-9.2,22.1-9.2h61.3c4.1,0,7.5,3.4,7.5,7.5v37.6v31.9C163.2,137.8,161.5,144.9,158.6,151.2
		L158.6,151.2z M434.1,118.1l-42.4-14.3l-27.8,13.6v13c0,9.6,3.9,18.4,10.3,24.7c6.4,6.4,15.1,10.3,24.8,10.3
		c9.6,0,18.4-3.9,24.7-10.3c6.4-6.4,10.3-15.1,10.3-24.7L434.1,118.1L434.1,118.1z M363.9,100.8l23.6-11.5c1.8-1,4-1.3,6.1-0.6
		l40.5,13.7V84.8c0-4.5-1.8-8.6-4.8-11.5c-3-3-7.1-4.8-11.5-4.8h-37.5c-4.5,0-8.6,1.8-11.5,4.8c-3,2.9-4.8,7-4.8,11.5L363.9,100.8
		L363.9,100.8z M78,91h70.2V68.4H94.4c-4.5,0-8.6,1.8-11.5,4.8c-3,2.9-4.8,7-4.8,11.5L78,91z M148.2,106H78v24.4
		c0,9.6,4,18.4,10.3,24.7c6.4,6.4,15.1,10.3,24.8,10.3s18.4-3.9,24.7-10.3c6.4-6.4,10.3-15.1,10.3-24.7L148.2,106L148.2,106z
		 M291.1,63.5c-11.3,1.7-30,1.7-45.5-12.1c-5.4,3.2-14.1,6.8-24.6,5.8V77c0,9.6,4,18.4,10.3,24.7c6.4,6.4,15.1,10.3,24.8,10.3
		c9.6,0,18.4-3.9,24.7-10.3c6.4-6.4,10.3-15.1,10.3-24.7L291.1,63.5L291.1,63.5z M220.9,42.2c7.2,1.1,15.2-1.3,20.6-6.2
		c3.1-2.7,7.8-2.4,10.5,0.8c12.7,14.7,30.4,13.4,39,11.6V31.3c0-4.5-1.8-8.6-4.8-11.5c-2.9-3-7-4.8-11.5-4.8h-37.5
		c-4.5,0-8.6,1.8-11.5,4.8c-3,2.9-4.8,7-4.8,11.5V42.2z M361.9,164c-8.3,3-15.2,7.1-20.1,11.7c-4.5,4.3-7.1,9.2-7.1,14.1v36.5
		l39.5,9.6c4.4,1,7.9,3.8,10.1,7.4c0.3,0.5,0.7,1.1,0.9,1.7h77.9v-55.1c0-5-2.6-9.9-7.3-14.3c-4.8-4.6-11.6-8.5-19.9-11.5
		c-0.5,0.6-1.1,1.2-1.7,1.8c-9.1,9.1-21.6,14.7-35.4,14.7s-26.3-5.6-35.4-14.7C363,165.2,362.5,164.6,361.9,164L361.9,164z
		 M219,110.6c-8.1,3-14.8,6.9-19.5,11.4c-4.6,4.4-7.3,9.3-7.3,14.3v53.4v32.9l13.3-3.2l36.5-59.5c2.4-3.9,6.1-6.4,10.2-7.4
		c6.9-1.6,14.2,1.4,17.8,7.5l36.5,59.4l13.2,3.2v-32.9v-53.4c0-5.1-2.7-10-7.4-14.4c-4.7-4.5-11.4-8.3-19.4-11.3
		c-9.5,10.5-22.8,16.4-37,16.4C241.9,127,228.5,121,219,110.6L219,110.6z M384.6,259.8c-0.5,0.9-1.1,1.7-1.8,2.4l-12.6,14.8
		c-2.7,3.1-7.4,3.5-10.5,0.8c-3.1-2.7-3.5-7.4-0.8-10.5l12.6-14.8c0.3-0.4,0.4-0.9,0.3-1.4c-0.1-0.5-0.5-0.8-1-0.9
		c-23.4-5.6-46.8-11.3-70.2-17c-2.1-0.3-4-1.5-5.2-3.5l-38.1-62c-0.3-0.5-0.6-0.8-1.2-0.8c-0.5,0-0.9,0.2-1.2,0.7l-38.2,62.1
		c-1,1.6-2.6,2.9-4.6,3.3c-23.3,5.6-46.6,11.2-69.9,16.9c-0.7,0.2-1.4,0.2-1.8,0.9c-0.3,0.5-0.2,1.1,0.2,1.5l47,55.1
		c1.4,1.5,2.2,3.5,2,5.7c-1.9,24.2-3.7,48.4-5.6,72.7c0,0.4,0.2,0.9,0.5,1.2c0.4,0.3,1,0.4,1.4,0.2l67.4-27.8c1.8-0.7,3.8-0.8,5.7,0
		l66.5,27.5c1.1,0.4,2.9,0.9,2.7-1c-1.9-24.2-3.8-48.5-5.6-72.7c-0.1-1.9,0.5-3.9,1.8-5.4l12.6-14.8c2.7-3.1,7.4-3.5,10.5-0.8
		c3.1,2.7,3.5,7.4,0.8,10.5l-10.6,12.4l1.4,19h151.1l-22.6-32.9c-1.8-2.5-1.9-5.9-0.1-8.6l22.7-33L384.6,259.8z"/>
                                          </g>
                                      </svg>

                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Liderazgo</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/responsabilidad/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 xl:hidden">
                                      {/* <GlobeIcon className="block flex-shrink-0 h-6 w-6 text-arena-600 xl:hidden" /> */}

                                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 510.8" className="flex-shrink-0 h-6 w-6 text-arena-600 fillarena">
<defs>
</defs>
<g>
	<g>
		<path d="M510.3,156.1c-6.5-47.8-31.3-90.2-69.8-119.3c-64.8-49.2-155.1-48.9-219.6,0.6c-4.4,3.4-5.2,9.6-1.8,14
			c3.4,4.4,9.6,5.2,14,1.8c57.3-44,137.7-44.2,195.4-0.5c34.2,25.9,56.3,63.6,62.1,106.1c5.8,42.5-5.3,84.6-31.3,118.8
			c-53.7,70.5-154.8,84.2-225.4,30.7c-57.7-43.7-79-121-51.9-187.9c2.1-5.1-0.4-10.9-5.5-13c-5.1-2.1-10.9,0.4-13,5.5
			c-30.5,75.2-6.5,162.2,58.3,211.3c32.6,24.7,71.1,36.7,109.2,36.7c54.6,0,108.7-24.6,144.2-71.2
			C504.3,251.3,516.8,203.8,510.3,156.1L510.3,156.1z"/>
		<path d="M355.9,390.3L273,411.9c-0.2-2.7-0.6-5.4-1.5-8.1c-2.7-8.9-8.8-16.3-17-20.6l-30.7-16.4c-21.1-11.3-46.9-17.4-72.5-17.4
			c-0.2,0-0.5,0-0.8,0c-25.6,0.1-50.9,6.4-74.1,18.2c-3.3-8.6-11.7-14.7-21.4-14.7H23c-12.7,0-23,10.3-23,23v100.4
			c0,12.6,10.3,22.9,23,22.9H55c11.1,0,20.5-8,22.5-18.5l126.3,28.9c3.9,0.9,7.7,1.3,11.5,1.3c12.4,0,24.5-4.1,35-8.4l123.4-50.6
			c16.2-6.7,29.7-23.8,22.9-42.5C390.8,392.8,374.8,385.4,355.9,390.3L355.9,390.3z M58,476.2c0,1.6-1.4,2.9-3,2.9H23
			c-1.6,0-3-1.3-3-2.9V375.8c0-1.6,1.4-3,3-3H55c1.6,0,3,1.4,3,3L58,476.2L58,476.2z M366.2,433.2l-123.4,50.6
			c-15.6,6.4-25.6,8.2-34.5,6.2L78,460.2v-70.8c51.3-29.9,105.2-21.6,136.4-5l30.7,16.4c3.5,1.9,6.1,5,7.2,8.8
			c1.2,3.8,0.8,7.8-1.1,11.2c-3.8,7.2-12.9,10-20.2,6.1l-50.7-26.7c-4.9-2.6-10.9-0.7-13.5,4.2c-2.6,4.9-0.7,10.9,4.2,13.5
			l50.6,26.7c5.2,2.8,10.8,4.1,16.3,4.1c11,0,21.7-5.2,28.4-14.5l94.5-24.6c8.9-2.3,14.6-0.2,17,6.5
			C380.4,422.7,373.8,430.1,366.2,433.2z"/>
		<path d="M217.9,230.7h46.6v28.4c0,5.5,4.5,10,10,10h113.2c5.5,0,10-4.5,10-10v-28.4h46.6c5.5,0,10-4.5,10-10l0-30.7
			c0-25-12.6-38.2-25.6-46c3.2-6.3,5-13.3,5-20.8c0-25.4-20.7-46-46.1-46c-23.3,0-42.5,17.3-45.6,39.7c-3.5-0.9-7.2-1.3-11-1.3
			c-3.8,0-7.5,0.5-11,1.3c-3.1-22.4-22.4-39.7-45.6-39.7c-25.4,0-46.1,20.6-46.1,46c0,7.5,1.8,14.6,5,20.8
			c-12.9,7.8-25.5,20.9-25.5,46v30.7C207.9,226.2,212.4,230.7,217.9,230.7L217.9,230.7z M377.7,249.1h-93.2v-20.7
			c0-2.3,0.1-4.5,0.4-6.5c0,0,0-0.1,0-0.1c1.8-12,8.4-18.6,18.1-23.7c7.8,6,17.5,9.5,28,9.5c10.5,0,20.2-3.6,28-9.5
			c9.7,5.1,16.4,11.8,18.1,23.7c0,0,0,0.1,0,0.1c0.3,2,0.4,4.2,0.4,6.5V249.1z M434.3,210.7h-39.1c-4.3-14-13.6-22.6-23.1-28.3
			c2.3-4.5,3.9-9.4,4.6-14.6c3.6,0.9,7.2,1.3,11,1.3c10.5,0,20.2-3.6,28-9.5c11.4,5.9,18.6,14.1,18.6,30.3L434.3,210.7z
			 M361.6,123.2c0-14.3,11.7-26,26.1-26s26.1,11.7,26.1,26s-11.7,26-26.1,26c-4.8,0-9.4-1.3-13.5-3.8c-2.6-6.9-6.8-13-12.2-17.9
			C361.8,126,361.6,124.6,361.6,123.2z M357.2,161.5c0,14.3-11.7,26-26.1,26s-26.1-11.7-26.1-26s11.7-26,26.1-26
			S357.2,147.2,357.2,161.5z M274.5,97.2c14.4,0,26.1,11.7,26.1,26c0,1.5-0.1,2.9-0.4,4.3c-5.4,4.9-9.6,11-12.2,17.8
			c-4.1,2.5-8.7,3.8-13.5,3.8c-14.4,0-26.1-11.7-26.1-26S260.2,97.2,274.5,97.2L274.5,97.2z M227.9,190c0-16.2,7.2-24.4,18.6-30.3
			c7.8,6,17.5,9.5,28,9.5c3.8,0,7.4-0.4,11-1.3c0.7,5.2,2.3,10.1,4.6,14.6c-9.5,5.7-18.8,14.3-23.1,28.3h-39.1L227.9,190z"/>
		<path d="M195.1,87.3c2.6,0,5.1-1,7.1-2.9l0,0c3.9-3.9,3.9-10.2,0-14.1c-3.9-3.9-10.2-3.9-14.2,0c-3.9,3.9-3.9,10.2,0,14.1
			C189.9,86.3,192.5,87.3,195.1,87.3L195.1,87.3z"/>
	</g>
</g>
</svg>


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
                                                    {/* <ChatAlt2Icon className="h-6 w-6"/> */}
                                                    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" className="h-7 w-7 fillwhite">
                  <g id="Expand">
                    <rect x="96" y="80" width="16" height="16" />
                    <rect x="128" y="80" width="80" height="16" />
                    <rect x="80" y="112" width="128" height="16" />
                    <rect x="80" y="144" width="104" height="16" />
                    <rect x="320" y="160" width="16" height="16" />
                    <rect x="352" y="160" width="80" height="16" />
                    <rect x="304" y="192" width="128" height="16" />
                    <rect x="304" y="224" width="104" height="16" />
                    <path d="M64.2,223.7c-0.1,2.7-0.2,5.5-0.2,8.3s0.1,5.6,0.2,8.3l16-0.7c-0.1-2.5-0.2-5.1-0.2-7.7s0.1-5.1,0.2-7.7L64.2,223.7z" />
                    <path d="M139.1,384.3l9.7-12.7c-37.2-28.3-61.4-70.3-67.4-116.7L65.6,257C72.1,307.6,98.6,353.4,139.1,384.3z" />
                    <path d="M393.9,98.4c-26.1-27-59.5-45.8-96.2-53.9l-3.5,15.6c33.6,7.5,64.2,24.7,88.1,49.4L393.9,98.4z" />
                    <path d="M410.9,272H456c4.4,0,8-3.6,8-8V136c0-4.4-3.6-8-8-8h-78.5C347.2,92.4,302.8,71.9,256,72c-5.4,0-10.7,0.4-16,0.9V56
		c0-4.4-3.6-8-8-8H56c-4.4,0-8,3.6-8,8v128c0,4.4,3.6,8,8,8h45.1c-19.7,76,18.8,155.1,90.9,186.4v5.6h-8c-4.4,0-8,3.6-8,8v64
		c0,4.4,3.6,8,8,8h8v8c0,13.3,10.7,24,24,24h80c13.3,0,24-10.7,24-24v-8h8c4.4,0,8-3.6,8-8v-64c0-4.4-3.6-8-8-8h-8v-5.6
		C365.1,358.8,398.6,319.6,410.9,272z M448,256h-72c-1.7,0-3.4,0.6-4.8,1.6L352,272v-8c0-4.4-3.6-8-8-8h-56V144h160V256z M272,296
		v88h-32v-88c0-1.2-0.3-2.5-0.8-3.6l-23.9-47.7l38.5,11c1.4,0.4,3,0.4,4.4,0l13.8-3.9V264c0,4.4,3.6,8,8,8h3.1l-10.3,20.4
		C272.3,293.5,272,294.8,272,296z M64,64h160v112h-64c-4.4,0-8,3.6-8,8v8l-19.2-14.4c-1.4-1-3.1-1.6-4.8-1.6H64V64z M203,365.6
		c-69-27.1-106-102.4-85.2-173.6h7.6l29.9,22.4c1.4,1,3.1,1.6,4.8,1.6c4.4,0,8-3.6,8-8v-16h64c4.4,0,8-3.6,8-8V89
		c5.3-0.6,10.7-0.9,16-1c37.1,0,72.8,14.3,99.5,40H280c-4.4,0-8,3.6-8,8v99.1l-16,4.6l-53.8-15.4c-2.4-0.7-5-0.2-7,1.3l-32,24
		l9.6,12.8l24.3-18.2l26.9,53.7V384h-16v-11C208,369.8,206,366.8,203,365.6z M192,400h128v16H192V400z M304,472c0,4.4-3.6,8-8,8h-80
		c-4.4,0-8-3.6-8-8v-8h96V472z M320,448H192v-16h128V448z M288,384v-86.1l12.9-25.9H336v16c0,4.4,3.6,8,8,8c1.7,0,3.4-0.6,4.8-1.6
		l29.9-22.4h15.7c-12.4,42.7-43.9,77.3-85.3,93.6c-3,1.2-5,4.2-5,7.4v11H288z"/>
                  </g>
                </svg>

                                                    
                                                </div>
                                                <div className="ml-4 text-base font-medium text-gray-900">Consultoría</div>
                                            </Link>

                                            <Link to="/servicios/analytics/" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-arena-500 text-white sm:h-12 sm:w-12">
                                                    {/* <PresentationChartBarIcon className="h-6 w-6"/> */}
                                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" className="h-7 w-7 fillwhite">
                  <g id="Outlines">
                    <g>
                      <circle cx="264" cy="320" r="8" />
                      <circle cx="296" cy="320" r="8" />
                      <circle cx="328" cy="320" r="8" />
                      <circle cx="264" cy="256" r="8" />
                      <circle cx="296" cy="256" r="8" />
                      <circle cx="328" cy="256" r="8" />
                      <path d="M176,264h48c4.4,0,8-3.6,8-8s-3.6-8-8-8h-48c-4.4,0-8,3.6-8,8S171.6,264,176,264z" />
                      <circle cx="264" cy="192" r="8" />
                      <circle cx="296" cy="192" r="8" />
                      <circle cx="328" cy="192" r="8" />
                      <path d="M224,184h-48c-4.4,0-8,3.6-8,8s3.6,8,8,8h48c4.4,0,8-3.6,8-8S228.4,184,224,184z" />
                      <path d="M479.9,424.1c0.4-25.6-9.9-58.3-29.3-94.9c26.7-70.8,12.8-150.6-36.4-208.2c-2.9-3.4-7.9-3.8-11.3-0.9s-3.8,7.9-0.9,11.3
			c42.2,49.4,56.5,116.7,38,179c-10.6-17.7-22.1-34.8-34.5-51.3c-2.6-3.5-7.7-4.3-11.2-1.6c-3.5,2.6-4.3,7.7-1.6,11.2c0,0,0,0,0,0
			c14.8,19.6,28.2,40.2,40.2,61.6c-19.6,46.2-56.4,83-102.6,102.6c-36.4-20.8-70.6-45.2-102-73H368c4.4,0,8-3.6,8-8v-9.5
			c12.4-4.3,19-17.9,14.7-30.4c-2.4-6.9-7.8-12.3-14.7-14.7V160c0-4.4-3.6-8-8-8h-60.3c-32.7-30.2-68.3-57-106.3-80
			c39.6-11.8,82-10.5,120.8,3.8c-1.4,3.9-2.1,8.1-2.1,12.2c-0.2,22.3,17.7,40.6,40,40.9s40.6-17.7,40.9-40s-17.7-40.6-40-40.9
			c-11.8-0.1-23,4.9-30.8,13.7c-47.5-18.2-100-18.3-147.6-0.2c-36.2-19.1-69-29.5-94.6-29.3c-13.1-17.7-38.1-21.4-55.8-8.4
			s-21.4,38.1-8.4,55.8c2.4,3.2,5.2,6,8.4,8.4c-0.4,25.8,10,58.6,29.2,94.7c-29.3,77.7-9.5,165.5,50.4,223.1c3.2,3.1,8.3,3,11.3-0.2
			c3.1-3.2,3-8.3-0.2-11.3C71.2,344.5,51.6,270.2,72,201.4c18.8,31.2,40.2,60.7,64,88.2V352c0,4.4,3.6,8,8,8h32c4.4,0,8-3.6,8-8
			s-3.6-8-8-8h-24v-36.4c8.2,9,16.7,18,25.5,26.8c39.8,40.5,84.5,76,132.9,105.6c-33.8,10.1-69.7,10.5-103.7,1.4
			c5.4-21.6-7.7-43.5-29.3-49s-43.5,7.7-49,29.3c-5.4,21.6,7.7,43.5,29.3,49c15.6,3.9,32.1-1.8,41.9-14.7
			c42.7,12.1,88.1,10.2,129.6-5.5c35.6,18.8,68,29.4,93.6,29.4c0.4,0,0.8,0,1.3,0c13.2,17.7,38.1,21.3,55.8,8.1
			c17.7-13.2,21.3-38.1,8.1-55.8C485.8,429.2,483,426.4,479.9,424.1L479.9,424.1z M360,64c13.3,0,24,10.7,24,24s-10.7,24-24,24
			s-24-10.7-24-24S346.7,64,360,64z M210.6,344c-5.6-5.2-11.2-10.5-16.8-16H224c4.4,0,8-3.6,8-8s-3.6-8-8-8h-46
			c-5.1-5.3-10.1-10.6-15-16h197v1.5c-12.4,4.3-19,17.9-14.7,30.4c2.4,6.9,7.8,12.3,14.7,14.7v1.5H210.6z M360,280H152v-48h208V280z
			 M368,328c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S372.4,328,368,328z M56,32c8.4,0,16.2,4.4,20.5,11.7c0,0.1,0.1,0.2,0.2,0.3
			c2.2,3.6,3.3,7.8,3.4,12c0,13.3-10.7,24-24,24c-4.3,0-8.4-1.2-12.1-3.4l-0.2-0.1C32.3,69.7,28.6,55,35.4,43.7
			C39.7,36.4,47.5,32,56,32z M48.2,95.2c21.6,4.4,42.6-9.6,47-31.2c1-5.2,1-10.5,0-15.7c23.9,2.9,47.1,10.2,68.3,21.4
			C122.9,90,89.9,123,69.7,163.7C58.4,142.4,51.1,119.2,48.2,95.2z M181.5,79.1c36.5,20.7,70.7,45.2,102.2,72.9H264
			c-4.4,0-8,3.6-8,8s3.6,8,8,8h96v48H152v-48h80c4.4,0,8-3.6,8-8s-3.6-8-8-8h-88c-4.4,0-8,3.6-8,8v104.5c-21.3-26-40.4-53.7-57-83
			C98.6,135.4,135.3,98.6,181.5,79.1z M168,456c-13.3,0-24-10.7-24-24s10.7-24,24-24s24,10.7,24,24S181.3,456,168,456z M348.2,442.4
			c40.8-20.3,73.8-53.3,94.1-94.1c11.3,21.3,18.5,44.5,21.4,68.5c-21.6-4.3-42.6,9.7-46.9,31.3c-1,5.2-1,10.5,0,15.7
			C392.8,461,369.5,453.8,348.2,442.4z M456,480c-8.4,0-16.1-4.4-20.5-11.6l-0.2-0.3c-2.2-3.6-3.3-7.8-3.4-12.1
			c0-13.3,10.7-24,24-24c4.3,0,8.4,1.2,12.1,3.4l0.2,0.1c11.4,6.8,15.1,21.4,8.3,32.8C472.3,475.6,464.5,480,456,480z"/>
                      <path d="M464,104c13.3,0,24-10.7,24-24s-10.7-24-24-24s-24,10.7-24,24S450.7,104,464,104z M464,72c4.4,0,8,3.6,8,8s-3.6,8-8,8
			s-8-3.6-8-8S459.6,72,464,72z"/>
                      <path d="M56,392c-13.3,0-24,10.7-24,24s10.7,24,24,24s24-10.7,24-24S69.3,392,56,392z M56,424c-4.4,0-8-3.6-8-8s3.6-8,8-8
			s8,3.6,8,8S60.4,424,56,424z"/>
                    </g>
                  </g>
                </svg>

                                                    
                                                </div>
                                                <div className="ml-4 text-base font-medium text-gray-900">Ciencia de Datos</div>
                                            </Link>

                                            <Link to="/servicios/partners/" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-arena-500 text-white sm:h-12 sm:w-12">
                                                    {/* <UserGroupIcon className="h-6 w-6"/> */}
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 509.4" className="h-7 w-7 fillwhite">
                  <defs>
                  </defs>
                  <g>
                    <path d="M504.5,115.9H455l29.9-53c5.5-9.8,6.9-21.2,3.9-32.1C485.9,20,478.8,11,469,5.4c-20.3-11.4-46-4.3-57.5,16l-6.8,12.1
		c-2,3.6-0.8,8.2,2.8,10.2c3.6,2,8.2,0.8,10.2-2.8l6.8-12.1c7.4-13.1,24-17.7,37-10.3c6.3,3.6,10.9,9.4,12.8,16.4
		c1.9,7,1.1,14.3-2.5,20.7L395.4,191c-4.5,7.9-12.6,13.1-21.7,13.7c-0.7,0-1.3,0.1-2,0.1c-8.3,0-16.4-3.9-21.5-10.5l-58-74.8
		c-9.2-11.8-7-29,4.8-38.1c11.8-9.2,29-7,38.1,4.8l26,33.6c1.5,2,4,3.1,6.5,2.9c2.5-0.2,4.8-1.6,6-3.8L403,67
		c2-3.6,0.8-8.2-2.8-10.2c-3.6-2-8.2-0.8-10.2,2.8l-23.7,42l-19.1-24.7c-14.3-18.4-40.8-21.7-59.2-7.5c-14.5,11.2-19.6,30-14.2,46.5
		l-266.2,0c-4.1,0-7.5,3.4-7.5,7.5v202c0,26.6,21.6,48.3,48.3,48.3c4.1,0,8.1-0.5,12-1.5c1.8,5.7,5,10.8,9.3,15.2
		c7.4,7.4,17.2,11.1,26.9,11.1c5.3,0,10.5-1.1,15.4-3.3c0.4,9.5,4.3,18.4,11.1,25.1c7.4,7.4,17.2,11.1,26.9,11.1
		c7.1,0,14.2-2,20.4-5.9c0.9,8.7,4.7,16.7,10.9,23c7.4,7.4,17.2,11.1,26.9,11.1c9.6,0,19.2-3.6,26.6-10.8
		c1.1,8.2,4.8,15.8,10.8,21.8c5.5,5.5,12.3,9.1,19.7,10.5c1.1,6.8,4.2,13.3,9.4,18.5c6.3,6.3,14.8,9.8,23.7,9.8s17.4-3.5,23.7-9.8
		c7.4-7.4,10.6-17.5,9.6-27.2c1.1,0.1,2.3,0.2,3.5,0.2c9,0,17.4-3.5,23.7-9.8c6.3-6.3,9.8-14.8,9.8-23.7c0-1.2-0.1-2.3-0.2-3.5
		c1.1,0.1,2.3,0.2,3.5,0.2c2.3,0,4.6-0.2,6.7-0.7c4.1-0.9,6.6-4.8,5.8-8.9c-0.9-4.1-4.8-6.6-8.9-5.8c-1.2,0.2-2.4,0.4-3.7,0.4
		c-5,0-9.6-1.9-13.1-5.4l-22.1-22c-7.2-7.2-7.2-19,0-26.2c3.5-3.5,8.2-5.4,13.1-5.4c4.9,0,9.6,1.9,13.1,5.4l22.1,22.1c0,0,0,0,0,0
		c4.4,4.4,6.2,10.7,5,16.8c-0.8,4.1,1.8,8,5.9,8.8c4.1,0.8,8-1.8,8.8-5.9c0.7-3.4,0.8-6.8,0.5-10.2c1.2,0.1,2.3,0.2,3.5,0.2
		c8.6,0,17.2-3.3,23.7-9.8c5.7-5.7,8.9-13,9.7-20.5c6.5,3.2,13.8,5.1,21.5,5.1c26.6,0,48.3-21.6,48.3-48.3v-202
		C512,119.3,508.6,115.9,504.5,115.9L504.5,115.9z M15,325.4V130.9h66.5v63.1c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.4,7.5-7.5v-63.1
		h119.8c9.7,0,18.8,3.8,25.6,10.6l77.2,77.2c6.1,6.1,9.4,14.1,9.4,22.7s-3.3,16.6-9.4,22.7c-6.1,6.1-14.1,9.4-22.7,9.4
		c-8.6,0-16.6-3.3-22.7-9.4L211.7,202c-1.4-1.4-3.3-2.2-5.3-2.2c-2,0-3.9,0.8-5.3,2.2L96.5,306.5v-82.5c0-4.1-3.4-7.5-7.5-7.5
		c-4.1,0-7.5,3.4-7.5,7.5v97.5l-11.9,11.9c-6.4,6.4-10.2,14.6-11,23.5c-3.3,1.1-6.8,1.6-10.3,1.6C29.9,358.7,15,343.7,15,325.4
		L15,325.4z M311.5,489c-3.5,3.5-8.2,5.4-13.1,5.4s-9.6-1.9-13.1-5.4c-7.2-7.2-7.2-19,0-26.2c3.6-3.6,8.4-5.4,13.1-5.4
		s9.5,1.8,13.1,5.4C318.8,470,318.8,481.7,311.5,489z M348.4,452.1c-3.5,3.5-8.2,5.4-13.1,5.4s-9.6-1.9-13.1-5.4l-10-10
		c-3.5-3.5-5.4-8.2-5.4-13.1s1.9-9.6,5.4-13.1s8.2-5.4,13.1-5.4c4.9,0,9.6,1.9,13.1,5.4l10,10c3.5,3.5,5.4,8.2,5.4,13.1
		C353.8,444,351.9,448.6,348.4,452.1L348.4,452.1z M350,346.6c-9,0-17.4,3.5-23.7,9.8c-10.7,10.7-12.6,26.8-5.9,39.5
		c-7.1,1-13.7,4.3-18.8,9.5c-6.3,6.3-9.8,14.8-9.8,23.7c0,4.7,1,9.3,2.8,13.5c-7.3,0.8-14.3,4-19.9,9.6c-4,4-6.8,8.7-8.3,13.8
		c-3.8-1-7.3-3-10.2-5.9c-4.4-4.4-6.8-10.2-6.8-16.3c0-6.1,2.4-11.9,6.7-16.3l52.2-52.2c2.9-2.9,2.9-7.7,0-10.6
		c-2.9-2.9-7.7-2.9-10.6,0l-73.2,73.2c-9,9-23.6,9-32.6,0c-4.4-4.4-6.8-10.1-6.8-16.3s2.4-12,6.8-16.3l55.4-55.4
		c2.9-2.9,2.9-7.7,0-10.6s-7.7-2.9-10.6,0l-70.4,70.4c-9,9-23.6,9-32.6,0c-4.4-4.4-6.8-10.1-6.8-16.3s2.4-12,6.8-16.3l55.7-55.7
		c2.9-2.9,2.9-7.7,0-10.6c-2.9-2.9-7.7-2.9-10.6,0l-66,66c-9,9-23.6,9-32.6,0c-4.4-4.4-6.8-10.1-6.8-16.3s2.4-12,6.8-16.3
		l126.2-126.2l56.8,56.8c8.9,8.9,20.7,13.8,33.3,13.8c12.6,0,24.4-4.9,33.3-13.8c8.9-8.9,13.8-20.7,13.8-33.3
		c0-12.6-4.9-24.4-13.8-33.3l-77.2-77.2l0,0h29.7l56.2,72.5c7.9,10.2,20.4,16.3,33.3,16.3c1,0,2,0,3.1-0.1c14.1-1,26.7-9,33.7-21.3
		l7-12.3v139.4c0,0.3,0,0.6,0,0.9c-5-2.8-10.7-4.4-16.6-4.4c-9,0-17.4,3.5-23.7,9.8c-5.2,5.2-8.4,11.7-9.5,18.8
		C361,348,355.6,346.6,350,346.6L350,346.6z M422,378.5c-7.2,7.2-18.9,7.2-26.2,0c0,0,0,0,0,0l-10-10c-3.5-3.5-5.4-8.1-5.4-13.1
		c0-5,1.9-9.6,5.4-13.1c3.5-3.5,8.2-5.4,13.1-5.4c5,0,9.6,1.9,13.1,5.4l10,10C429.2,359.5,429.2,371.3,422,378.5L422,378.5z
		 M497,325.4c0,18.3-14.9,33.3-33.3,33.3c-18.3,0-33.3-14.9-33.3-33.3v-166l16.1-28.5H497L497,325.4z"/>
                    <path d="M438,174.7c0,14.4,11.7,26.1,26.1,26.1c14.4,0,26.1-11.7,26.1-26.1c0-14.4-11.7-26.1-26.1-26.1
		C449.7,148.6,438,160.3,438,174.7L438,174.7z M475.2,174.7c0,6.1-5,11.1-11.1,11.1s-11.1-5-11.1-11.1c0-6.1,5-11.1,11.1-11.1
		S475.2,168.6,475.2,174.7z"/>
                    <path d="M74.4,174.7c0-14.4-11.7-26.1-26.1-26.1s-26.1,11.7-26.1,26.1c0,14.4,11.7,26.1,26.1,26.1S74.4,189.1,74.4,174.7z
		 M37.2,174.7c0-6.1,5-11.1,11.1-11.1s11.1,5,11.1,11.1c0,6.1-5,11.1-11.1,11.1S37.2,180.8,37.2,174.7z"/>
                  </g>
                </svg>

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
                                      {/* <BriefcaseIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/> */}
                                      
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 511.9" className="flex-shrink-0 h-6 w-6 text-arena-600 fillarena">
<defs>
</defs>
<path d="M496.7,422.4l-123-123c-4.8-4.8-12.7-4.8-17.5,0l-2.5,2.5L319.8,268c14.9-23.2,24.3-49.8,27-77.5
	c3.8-39.5-6.1-79.3-27.8-112.2c-2.3-3.5-6.9-4.4-10.4-2.1c-3.5,2.3-4.4,6.9-2.1,10.4c19.8,30.1,28.8,66.5,25.4,102.6
	c-3.5,36.5-19.8,71-45.8,97c-12.3,12.3-26,22.1-40.7,29.5v-27.4c8.5-5.3,16.5-11.6,23.8-19c25.5-25.5,39.5-59.4,39.5-95.4
	s-14-69.9-39.5-95.4c-25.5-25.5-59.4-39.5-95.4-39.5s-69.9,14-95.4,39.5c-25.5,25.5-39.5,59.4-39.5,95.4s14,69.9,39.5,95.4
	c7.4,7.4,15.4,13.7,23.8,19v27.4c-14.7-7.4-28.5-17.2-40.7-29.5c-61.9-61.9-61.9-162.7,0-224.6C91.3,31.6,131,15.1,173.2,15
	c0.2,0,0.3,0,0.5,0c42,0,81.6,16.2,111.5,45.7c2.9,2.9,7.7,2.9,10.6-0.1c2.9-2.9,2.9-7.7-0.1-10.6C263,17.8,219.7,0,173.7,0
	c-0.2,0-0.4,0-0.6,0C127,0.2,83.5,18.2,50.8,50.9c-67.8,67.8-67.8,178,0,245.8c15.3,15.3,32.7,27.1,51.3,35.5v21.1
	c0,5.5,2.7,10.7,7.3,13.8s10.4,3.8,15.5,1.9l7.6-2.9c3.9-1.5,5.8-5.8,4.3-9.7c-1.5-3.9-5.8-5.8-9.7-4.3l-7.6,2.9
	c-0.7,0.3-1.3,0-1.7-0.2c-0.4-0.2-0.8-0.7-0.8-1.5v-93.3c16.3,10.7,35.7,17,56.6,17s40.3-6.2,56.6-17v93.3c0,0.8-0.4,1.2-0.8,1.5
	c-0.4,0.2-0.9,0.5-1.7,0.2l-48.2-18.4c-3.9-1.5-8.1-1.5-12,0l-8.4,3.2c-3.9,1.5-5.8,5.8-4.3,9.7c1.5,3.9,5.8,5.8,9.7,4.3l8.4-3.2
	c0.4-0.2,0.9-0.2,1.3,0l48.2,18.4c1.9,0.7,4,1.1,6,1.1c3.4,0,6.7-1,9.5-3c4.6-3.1,7.3-8.3,7.3-13.8v-21.1
	c7.8-3.5,15.5-7.7,22.8-12.4l33.8,33.8l-2.5,2.5c-2.3,2.3-3.6,5.4-3.6,8.8s1.3,6.4,3.6,8.8l123,123c10.2,10.2,23.7,15.3,37.1,15.3
	c13.4,0,26.9-5.1,37.1-15.3C517.1,476.1,517.1,442.8,496.7,422.4L496.7,422.4z M102.1,270c-4.6-3.4-9.1-7.2-13.2-11.4
	c-22.7-22.7-35.1-52.8-35.1-84.8S66.3,111.6,88.9,89c22.7-22.7,52.8-35.1,84.8-35.1s62.2,12.5,84.8,35.1
	c22.7,22.7,35.1,52.8,35.1,84.8s-12.5,62.2-35.1,84.8c-4.2,4.2-8.6,8-13.2,11.4v-22.1c19.4-18.8,31.5-45,31.5-74.1
	c0-56.8-46.2-103.1-103.1-103.1S70.6,117,70.6,173.8c0,29.1,12.1,55.3,31.5,74.1L102.1,270z M173.7,261.9
	c-48.6,0-88.1-39.5-88.1-88.1c0-48.6,39.5-88.1,88.1-88.1s88.1,39.5,88.1,88.1C261.8,222.4,222.3,261.9,173.7,261.9L173.7,261.9z
	 M312.5,343l-32-32c5.6-4.4,11-9.1,16.1-14.2c5.1-5.1,9.9-10.6,14.4-16.3l32,32L327,328.5L312.5,343z M486.1,486
	c-14.6,14.6-38.4,14.6-53,0L311.9,364.8l53-53L486.1,433C500.7,447.6,500.7,471.4,486.1,486L486.1,486z"/>
<path d="M219.7,142.2l-21.3-3.1l-9.5-19.3c-2.9-5.8-8.7-9.5-15.2-9.5s-12.4,3.6-15.2,9.5l-9.5,19.3l-21.3,3.1
	c-6.4,0.9-11.7,5.4-13.7,11.6c-2,6.2-0.4,12.9,4.3,17.4l15.4,15l-3.6,21.2c-1.1,6.4,1.5,12.8,6.8,16.6c5.3,3.8,12.1,4.3,17.9,1.3
	l19-10l19,10c2.5,1.3,5.2,2,7.9,2c3.5,0,7-1.1,10-3.3c5.3-3.8,7.9-10.2,6.8-16.6l-3.6-21.2l15.4-15c4.7-4.5,6.3-11.2,4.3-17.4
	C231.4,147.6,226.2,143.1,219.7,142.2L219.7,142.2z M218.7,160.4l-16.5,16.1c-2.9,2.8-4.1,6.8-3.5,10.7l3.9,22.7
	c0.2,1-0.3,1.6-0.8,2c-0.5,0.3-1.2,0.6-2.1,0.2l-20.4-10.7c-1.8-0.9-3.7-1.4-5.6-1.4c-1.9,0-3.9,0.5-5.6,1.4L147.7,212
	c-0.9,0.5-1.7,0.2-2.1-0.2c-0.5-0.3-1-0.9-0.8-2l3.9-22.7c0.7-3.9-0.6-7.9-3.5-10.7l-16.5-16.1c-0.7-0.7-0.7-1.5-0.5-2.1
	c0.2-0.5,0.6-1.2,1.6-1.4l22.8-3.3c3.9-0.6,7.3-3,9.1-6.6l10.2-20.6c0.5-0.9,1.2-1.1,1.8-1.1s1.3,0.2,1.8,1.1v0l10.2,20.6
	c1.8,3.6,5.2,6,9.1,6.6l22.8,3.3c1,0.1,1.4,0.8,1.6,1.4C219.4,158.9,219.4,159.7,218.7,160.4L218.7,160.4z"/>
</svg>

                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Careers</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/que-hacemos/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                      {/* <OfficeBuildingIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/> */}
                                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" className="flex-shrink-0 h-6 w-6 text-arena-600 fillarena">
                                          <defs>
                                          </defs>
                                          <g>
                                              <path d="M370.9,467.9c-35,19-74.8,29.1-114.9,29.1c-64.4,0-124.9-25.1-170.4-70.6S15,320.4,15,256c0-63.7,24.6-123.7,69.3-169.1
		L73.6,76.4C26.1,124.6,0,188.4,0,256c0,68.4,26.6,132.7,75,181c48.4,48.4,112.6,75,181,75c42,0,83.5-10.4,120.4-30h23.1v-15h-26.9
		L370.9,467.9z"/>
                                              <path d="M414.5,467h15v15h-15V467z" />
                                              <path d="M437,75C388.7,26.6,324.4,0,256,0C192.6,0,131.8,23.3,84.8,65.7l10,11.1C139.1,37,196.4,15,256,15
		c64.4,0,124.9,25.1,170.4,70.6c45.5,45.5,70.6,106,70.6,170.4c0,40.1-10.1,79.9-29.1,114.9l-0.9,1.7V467h-22.5v15H482V376.4
		c19.6-36.8,30-78.4,30-120.4C512,187.6,485.4,123.3,437,75z"/>
                                              <path d="M368.5,67.5h15v15h-15V67.5z" />
                                              <path d="M338.5,52.5h15v15h-15V52.5z" />
                                              <path d="M282.2,121c0-20.7-16.8-37.5-37.5-37.5s-37.5,16.8-37.5,37.5c0,20.7,16.8,37.5,37.5,37.5
		C265.4,158.5,282.2,141.7,282.2,121z M222.3,121c0-12.4,10.1-22.5,22.5-22.5c12.4,0,22.5,10.1,22.5,22.5s-10.1,22.5-22.5,22.5
		C232.3,143.5,222.3,133.4,222.3,121z"/>
                                              <path d="M203.5,368.5v60h105v-60H286v-195h-82.5v60H226v135H203.5z M218.5,218.5v-30H271v195h22.5v30h-75v-30H241v-165H218.5z" />
                                          </g>
                                      </svg>

                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Sobre Nosotros</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/liderazgo/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                      {/* <UserGroupIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/> */}
                                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 402.6" className="flex-shrink-0 h-6 w-6 text-arena-600 fillarena">
                                          <defs>
                                          </defs>
                                          <g>
                                              <path d="M158.6,151.2c7.2,2.9,13.5,6.5,18.6,10.7v-25.6c0-9.4,4.3-17.9,11.9-25.2c5.5-5.2,12.8-9.8,21.3-13.3
		c-2.9-6.4-4.6-13.4-4.6-20.9V31.3c0-8.6,3.5-16.4,9.2-22.1c5.7-5.7,13.5-9.2,22.1-9.2h37.5c8.6,0,16.4,3.5,22.1,9.2
		c5.7,5.7,9.2,13.5,9.2,22.1V77c0,7.4-1.6,14.5-4.6,20.9c8.5,3.5,15.7,8,21.2,13.1c7.7,7.3,12.1,15.9,12.1,25.3V162
		c5.1-4.2,11.5-7.8,18.7-10.8c-2.9-6.4-4.6-13.4-4.6-20.8V84.8c0-8.6,3.5-16.4,9.2-22.1c5.7-5.7,13.5-9.2,22.1-9.2h37.5
		c8.6,0,16.5,3.5,22.1,9.2c5.7,5.7,9.2,13.5,9.2,22.1v45.6c0,7.4-1.6,14.5-4.5,20.8c8.7,3.6,16.1,8.2,21.7,13.5
		c7.6,7.2,11.9,15.8,11.9,25.1v55.1h26.3c4.1,0,7.5,3.4,7.5,7.5c0,1.8-0.6,3.4-1.7,4.7l-27.5,40l27.8,40.5c2.4,3.4,1.5,8.1-1.9,10.4
		c-1.2,0.9-2.8,1.3-4.3,1.3H340.3l2.8,35.7c0.3,4.5-1.2,8.7-3.9,11.9c-4.8,5.6-12.8,7.3-19.5,4.1L256,374.7l-64.5,26.6
		c-6.8,2.8-14.6,0.7-19.1-5c-2.5-3.2-3.7-7.3-3.5-11.3l2.8-35.7h-53.7c-4.1,0-7.5-3.3-7.5-7.5c0-4.1,3.3-7.5,7.5-7.5h54.8l1.5-19
		l-44.9-52.7c-0.8-0.8-1.5-1.9-2.1-2.8H21.7l22.6,32.9c1.8,2.5,1.9,5.9,0.1,8.6l-22.7,33h62.4c4.1,0,7.5,3.4,7.5,7.5
		c0,4.1-3.3,7.5-7.5,7.5H7.5c-4.1,0-7.5-3.3-7.5-7.5c0-1.8,0.6-3.4,1.7-4.7l27.5-40L1.4,256.6c-3.6-5.2,0.3-11.8,6.4-11.8H34v-38.1
		c0-4.1,3.3-7.5,7.5-7.5s7.5,3.4,7.5,7.5v38.1h77.7c0.9-2,2.9-4.7,4.8-6.1c2.1-1.6,4.6-2.6,7.1-3.2l38.6-9.3v-36.5
		c0-5-2.7-10-7.4-14.4c-4.8-4.5-11.5-8.4-19.7-11.4c-9.5,10.5-22.9,16.5-37,16.5s-27.6-6-37.1-16.5c-8.1,2.9-17.2,7.7-22.6,14.6
		c-2.6,3.2-7.3,3.7-10.5,1.1c-3.2-2.6-3.7-7.3-1.2-10.5c6.6-8.2,16.2-14,25.9-18c-2.9-6.4-4.6-13.4-4.6-20.8V98.5V84.8
		c0-8.6,3.5-16.4,9.2-22.1c5.7-5.7,13.5-9.2,22.1-9.2h61.3c4.1,0,7.5,3.4,7.5,7.5v37.6v31.9C163.2,137.8,161.5,144.9,158.6,151.2
		L158.6,151.2z M434.1,118.1l-42.4-14.3l-27.8,13.6v13c0,9.6,3.9,18.4,10.3,24.7c6.4,6.4,15.1,10.3,24.8,10.3
		c9.6,0,18.4-3.9,24.7-10.3c6.4-6.4,10.3-15.1,10.3-24.7L434.1,118.1L434.1,118.1z M363.9,100.8l23.6-11.5c1.8-1,4-1.3,6.1-0.6
		l40.5,13.7V84.8c0-4.5-1.8-8.6-4.8-11.5c-3-3-7.1-4.8-11.5-4.8h-37.5c-4.5,0-8.6,1.8-11.5,4.8c-3,2.9-4.8,7-4.8,11.5L363.9,100.8
		L363.9,100.8z M78,91h70.2V68.4H94.4c-4.5,0-8.6,1.8-11.5,4.8c-3,2.9-4.8,7-4.8,11.5L78,91z M148.2,106H78v24.4
		c0,9.6,4,18.4,10.3,24.7c6.4,6.4,15.1,10.3,24.8,10.3s18.4-3.9,24.7-10.3c6.4-6.4,10.3-15.1,10.3-24.7L148.2,106L148.2,106z
		 M291.1,63.5c-11.3,1.7-30,1.7-45.5-12.1c-5.4,3.2-14.1,6.8-24.6,5.8V77c0,9.6,4,18.4,10.3,24.7c6.4,6.4,15.1,10.3,24.8,10.3
		c9.6,0,18.4-3.9,24.7-10.3c6.4-6.4,10.3-15.1,10.3-24.7L291.1,63.5L291.1,63.5z M220.9,42.2c7.2,1.1,15.2-1.3,20.6-6.2
		c3.1-2.7,7.8-2.4,10.5,0.8c12.7,14.7,30.4,13.4,39,11.6V31.3c0-4.5-1.8-8.6-4.8-11.5c-2.9-3-7-4.8-11.5-4.8h-37.5
		c-4.5,0-8.6,1.8-11.5,4.8c-3,2.9-4.8,7-4.8,11.5V42.2z M361.9,164c-8.3,3-15.2,7.1-20.1,11.7c-4.5,4.3-7.1,9.2-7.1,14.1v36.5
		l39.5,9.6c4.4,1,7.9,3.8,10.1,7.4c0.3,0.5,0.7,1.1,0.9,1.7h77.9v-55.1c0-5-2.6-9.9-7.3-14.3c-4.8-4.6-11.6-8.5-19.9-11.5
		c-0.5,0.6-1.1,1.2-1.7,1.8c-9.1,9.1-21.6,14.7-35.4,14.7s-26.3-5.6-35.4-14.7C363,165.2,362.5,164.6,361.9,164L361.9,164z
		 M219,110.6c-8.1,3-14.8,6.9-19.5,11.4c-4.6,4.4-7.3,9.3-7.3,14.3v53.4v32.9l13.3-3.2l36.5-59.5c2.4-3.9,6.1-6.4,10.2-7.4
		c6.9-1.6,14.2,1.4,17.8,7.5l36.5,59.4l13.2,3.2v-32.9v-53.4c0-5.1-2.7-10-7.4-14.4c-4.7-4.5-11.4-8.3-19.4-11.3
		c-9.5,10.5-22.8,16.4-37,16.4C241.9,127,228.5,121,219,110.6L219,110.6z M384.6,259.8c-0.5,0.9-1.1,1.7-1.8,2.4l-12.6,14.8
		c-2.7,3.1-7.4,3.5-10.5,0.8c-3.1-2.7-3.5-7.4-0.8-10.5l12.6-14.8c0.3-0.4,0.4-0.9,0.3-1.4c-0.1-0.5-0.5-0.8-1-0.9
		c-23.4-5.6-46.8-11.3-70.2-17c-2.1-0.3-4-1.5-5.2-3.5l-38.1-62c-0.3-0.5-0.6-0.8-1.2-0.8c-0.5,0-0.9,0.2-1.2,0.7l-38.2,62.1
		c-1,1.6-2.6,2.9-4.6,3.3c-23.3,5.6-46.6,11.2-69.9,16.9c-0.7,0.2-1.4,0.2-1.8,0.9c-0.3,0.5-0.2,1.1,0.2,1.5l47,55.1
		c1.4,1.5,2.2,3.5,2,5.7c-1.9,24.2-3.7,48.4-5.6,72.7c0,0.4,0.2,0.9,0.5,1.2c0.4,0.3,1,0.4,1.4,0.2l67.4-27.8c1.8-0.7,3.8-0.8,5.7,0
		l66.5,27.5c1.1,0.4,2.9,0.9,2.7-1c-1.9-24.2-3.8-48.5-5.6-72.7c-0.1-1.9,0.5-3.9,1.8-5.4l12.6-14.8c2.7-3.1,7.4-3.5,10.5-0.8
		c3.1,2.7,3.5,7.4,0.8,10.5l-10.6,12.4l1.4,19h151.1l-22.6-32.9c-1.8-2.5-1.9-5.9-0.1-8.6l22.7-33L384.6,259.8z"/>
                                          </g>
                                      </svg>

                                      <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">Liderazgo</p>
                                          {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                      </div>
                                  </Link>
                                  <Link to="/nosotros/responsabilidad/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150 xl:hidden">
                                      {/* <GlobeIcon className="flex-shrink-0 h-6 w-6 text-arena-600"/> */}

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 510.8" className="flex-shrink-0 h-6 w-6 text-arena-600 fillarena">
<defs>
</defs>
<g>
	<g>
		<path d="M510.3,156.1c-6.5-47.8-31.3-90.2-69.8-119.3c-64.8-49.2-155.1-48.9-219.6,0.6c-4.4,3.4-5.2,9.6-1.8,14
			c3.4,4.4,9.6,5.2,14,1.8c57.3-44,137.7-44.2,195.4-0.5c34.2,25.9,56.3,63.6,62.1,106.1c5.8,42.5-5.3,84.6-31.3,118.8
			c-53.7,70.5-154.8,84.2-225.4,30.7c-57.7-43.7-79-121-51.9-187.9c2.1-5.1-0.4-10.9-5.5-13c-5.1-2.1-10.9,0.4-13,5.5
			c-30.5,75.2-6.5,162.2,58.3,211.3c32.6,24.7,71.1,36.7,109.2,36.7c54.6,0,108.7-24.6,144.2-71.2
			C504.3,251.3,516.8,203.8,510.3,156.1L510.3,156.1z"/>
		<path d="M355.9,390.3L273,411.9c-0.2-2.7-0.6-5.4-1.5-8.1c-2.7-8.9-8.8-16.3-17-20.6l-30.7-16.4c-21.1-11.3-46.9-17.4-72.5-17.4
			c-0.2,0-0.5,0-0.8,0c-25.6,0.1-50.9,6.4-74.1,18.2c-3.3-8.6-11.7-14.7-21.4-14.7H23c-12.7,0-23,10.3-23,23v100.4
			c0,12.6,10.3,22.9,23,22.9H55c11.1,0,20.5-8,22.5-18.5l126.3,28.9c3.9,0.9,7.7,1.3,11.5,1.3c12.4,0,24.5-4.1,35-8.4l123.4-50.6
			c16.2-6.7,29.7-23.8,22.9-42.5C390.8,392.8,374.8,385.4,355.9,390.3L355.9,390.3z M58,476.2c0,1.6-1.4,2.9-3,2.9H23
			c-1.6,0-3-1.3-3-2.9V375.8c0-1.6,1.4-3,3-3H55c1.6,0,3,1.4,3,3L58,476.2L58,476.2z M366.2,433.2l-123.4,50.6
			c-15.6,6.4-25.6,8.2-34.5,6.2L78,460.2v-70.8c51.3-29.9,105.2-21.6,136.4-5l30.7,16.4c3.5,1.9,6.1,5,7.2,8.8
			c1.2,3.8,0.8,7.8-1.1,11.2c-3.8,7.2-12.9,10-20.2,6.1l-50.7-26.7c-4.9-2.6-10.9-0.7-13.5,4.2c-2.6,4.9-0.7,10.9,4.2,13.5
			l50.6,26.7c5.2,2.8,10.8,4.1,16.3,4.1c11,0,21.7-5.2,28.4-14.5l94.5-24.6c8.9-2.3,14.6-0.2,17,6.5
			C380.4,422.7,373.8,430.1,366.2,433.2z"/>
		<path d="M217.9,230.7h46.6v28.4c0,5.5,4.5,10,10,10h113.2c5.5,0,10-4.5,10-10v-28.4h46.6c5.5,0,10-4.5,10-10l0-30.7
			c0-25-12.6-38.2-25.6-46c3.2-6.3,5-13.3,5-20.8c0-25.4-20.7-46-46.1-46c-23.3,0-42.5,17.3-45.6,39.7c-3.5-0.9-7.2-1.3-11-1.3
			c-3.8,0-7.5,0.5-11,1.3c-3.1-22.4-22.4-39.7-45.6-39.7c-25.4,0-46.1,20.6-46.1,46c0,7.5,1.8,14.6,5,20.8
			c-12.9,7.8-25.5,20.9-25.5,46v30.7C207.9,226.2,212.4,230.7,217.9,230.7L217.9,230.7z M377.7,249.1h-93.2v-20.7
			c0-2.3,0.1-4.5,0.4-6.5c0,0,0-0.1,0-0.1c1.8-12,8.4-18.6,18.1-23.7c7.8,6,17.5,9.5,28,9.5c10.5,0,20.2-3.6,28-9.5
			c9.7,5.1,16.4,11.8,18.1,23.7c0,0,0,0.1,0,0.1c0.3,2,0.4,4.2,0.4,6.5V249.1z M434.3,210.7h-39.1c-4.3-14-13.6-22.6-23.1-28.3
			c2.3-4.5,3.9-9.4,4.6-14.6c3.6,0.9,7.2,1.3,11,1.3c10.5,0,20.2-3.6,28-9.5c11.4,5.9,18.6,14.1,18.6,30.3L434.3,210.7z
			 M361.6,123.2c0-14.3,11.7-26,26.1-26s26.1,11.7,26.1,26s-11.7,26-26.1,26c-4.8,0-9.4-1.3-13.5-3.8c-2.6-6.9-6.8-13-12.2-17.9
			C361.8,126,361.6,124.6,361.6,123.2z M357.2,161.5c0,14.3-11.7,26-26.1,26s-26.1-11.7-26.1-26s11.7-26,26.1-26
			S357.2,147.2,357.2,161.5z M274.5,97.2c14.4,0,26.1,11.7,26.1,26c0,1.5-0.1,2.9-0.4,4.3c-5.4,4.9-9.6,11-12.2,17.8
			c-4.1,2.5-8.7,3.8-13.5,3.8c-14.4,0-26.1-11.7-26.1-26S260.2,97.2,274.5,97.2L274.5,97.2z M227.9,190c0-16.2,7.2-24.4,18.6-30.3
			c7.8,6,17.5,9.5,28,9.5c3.8,0,7.4-0.4,11-1.3c0.7,5.2,2.3,10.1,4.6,14.6c-9.5,5.7-18.8,14.3-23.1,28.3h-39.1L227.9,190z"/>
		<path d="M195.1,87.3c2.6,0,5.1-1,7.1-2.9l0,0c3.9-3.9,3.9-10.2,0-14.1c-3.9-3.9-10.2-3.9-14.2,0c-3.9,3.9-3.9,10.2,0,14.1
			C189.9,86.3,192.5,87.3,195.1,87.3L195.1,87.3z"/>
	</g>
</g>
</svg>


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




