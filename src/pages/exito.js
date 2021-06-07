import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// markup
const ExitoPage = () => {
  return (
    <Layout>
      <div className="bg-white relative">
        {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div> */}
        <div className="relative z-10 w-full">
          <div className="bg-arena-900 overflow-hidden h-full self-center lg:grid lg:grid-cols-2 lg:gap-4 transition-all ease-in-out">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="font-arena text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">¡Gracias por contáctarnos!</span>
                  {/* <span className="block">No pudimos encontrar la página.</span> */}
                </h2>
                <p className="mt-4 text-lg leading-6 text-bluearena-100">Somos una firma de consultoría especializada en transformar la Cadena de Valor de nuestros clientes.</p>
                <Link to="/" className="mt-8 bg-white border border-transparent rounded-lg shadow px-5 py-3 inline-flex items-center text-base font-semibold text-arena-600 hover:bg-bluearena-50">Regresar al inicio</Link>
              </div>
            </div>
            {/* <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img className="transform translate-x-6 translate-y-6 rounded-xl object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="" alt="image of people" />
            </div> */}
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default ExitoPage
