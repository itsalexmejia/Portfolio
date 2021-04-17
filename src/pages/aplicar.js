import * as React from "react"
import Layout from "../components/layout"

import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
//assets


// markup
const AplicarPage = () => {
  const [agreed, setAgreed] = useState(false)
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
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" data-netlify="true">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
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
                  autoComplete="family-name"
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
                  placeholder="+52 (55) 4313 9528"
                  required
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
                  autoComplete="perfil"
                  placeholder="https://www.linkedin.com/mi-perfil"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-arena-500 focus:border-arena-500 border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

{/* 
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-arena-500 focus:border-arena-500 border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
             */}

            {/* <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-arena-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arena-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
             */}

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

export default AplicarPage




