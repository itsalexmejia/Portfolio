import * as React from "react"
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Layout from "../components/layout"
// import { Link } from 'gatsby'


// markup
const ContactPage = () => {
  return (
    <Layout>
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80"
            alt="user working at his laptop"
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="font-arena text-arena-900 text-3xl font-extrabold tracking-tight sm:text-4xl">Trabajemos juntos</h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">¡Nos encantaría saber de ti! Envíanos un mensaje o un correo electrónico y nos pondremos en contacto contigo</p>
            <div className="mt-12">
              <h2 className="font-arena text-2xl font-extrabold text-gray-900 sm:text-3xl">Contáctanos</h2>
              <div className="mt-9">
                <a href="tel:+525524027409" className="flex text-arena-400 hover:text-brand-500 hover:underline" target="_blank" rel="noreferrer">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+52 (55) 2402 7409</p>
                    {/* <p className="mt-1">+52 (55) 2402 7409</p> */}
                  </div>
                </a>
                <a href="mailto:contacto@arena-analytics.com" className="mt-6 flex text-arena-400 hover:text-brand-500 hover:underline" target="_blank" rel="noreferrer">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>contacto@arena-analytics.com</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/arena-analytics/?originalSubdomain=mx" className="mt-6 flex text-arena-400 hover:text-brand-500 hover:underline" target="_blank" rel="noreferrer">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-7" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>LinkedIn</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="font-arena text-2xl font-extrabold text-gray-900 sm:text-3xl">Dónde encontrarnos</h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">Av. Paseo de la Reforma 296, Piso 39, <br /> Colonia Juárez, CDMX, <br />06600, México</p>
                <a href="https://goo.gl/maps/zRduA3NPxsd3r7HF8" className="block mt-3 text-lg font-medium space-x-1 text-arena-600 transition-all ease-in-out hover:text-bluearena-900" target="_blank" rel="noreferrer"> <span>Ver en Google Maps</span> <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default ContactPage




