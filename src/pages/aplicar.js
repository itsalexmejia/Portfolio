import * as React from "react"
import Layout from "../components/layout"

// import { useState } from 'react'
// import { Switch } from '@headlessui/react'


//assets


// markup
const ApplyPage = () => {
  // const [agreed, setAgreed] = useState(false)
  return (
    <Layout>
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="font-arena text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">¡Incorpórate a nuestro equipo!</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Nos gusta sentirnos satisfechos con cada día que trabajamos juntos y con nuestros clientes en sus retos de negocio.
          </p>
          </div>
          <div className="mt-12">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" method="post" netlify-honeypot="bot-field" data-netlify="true" name="aplicaArenaNew" action="/exito/">
            {/* <form name="apply_position_form" action="/exito/" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" data-netlify="true"> */}
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  Nombre
              </label>
              
                <div className="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    // autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-arena-500 focus:border-arena-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Apellido Paterno
              </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    // autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-arena-500 focus:border-arena-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>


              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
              </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-arena-500 focus:border-arena-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                  Teléfono
              </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  {/* <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    País
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-arena-500 focus:border-arena-500 rounded-md"
                  >
                    <option>MX</option>
                    <option>EU</option>
                    <option>CA</option>
                  </select>
                </div>
                 */}
                
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full focus:ring-arena-500 focus:border-arena-500 border-gray-300 rounded-md"
                    // placeholder="+52 (55) 4313 9528"
                    defaultValue="+52 "
                    // required
                  />
                </div>
              </div>


              <div className="sm:col-span-2">
                <label htmlFor="perfil" className="block text-sm font-medium text-gray-700">
                  Perfil de LinkedIn
              </label>
                <div className="mt-1">
                  <input
                    id="perfil"
                    name="perfil"
                    type="text"
                    // autoComplete="perfil"
                    placeholder="https://www.linkedin.com/mi-perfil"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-arena-500 focus:border-arena-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="cv_attach" className="block text-sm font-medium text-gray-700">
                  Adjunta tu CV
              </label>
                <div className="mt-1 py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-md">
                  <input
                    type="file"
                    name="cv_attach"
                    accept="application/pdf"
                    id="cv_attach"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div data-netlify-recaptcha="true"></div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-arena-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arena-500"
                >
                  Subir mi información
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ApplyPage




