import * as React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../../../components/layout"
import ActionBackground from "../../../components/content/actions/bg-action"
import TextHeader from '../../../components/content/header/header-txt'
import { CheckIcon } from '@heroicons/react/solid'
import {
    UsersIcon,
    ChevronRightIcon,
    ShoppingCartIcon,
    ShoppingBagIcon,
    ClipboardListIcon,
    CubeIcon,
    CursorClickIcon,
    CurrencyDollarIcon,
    SortAscendingIcon,
  } from '@heroicons/react/outline'


const retosindus = [
    { name: 'La identificación y reacción rápida a cambios en los patrones de consumo, reevaluando constantemente la oferta de productos para alinearla a las necesidades de mercados específicos y rentabilizar los puntos de venta', },
    { name: 'La creciente expectativa de los consumidores de obtener una gama cada vez más complete de productos y servicios complementarios, incrementando la complejidad de la administración del portafolio.',},
    { name: 'El entendimiento y tipificación de nuestros consumidores, su capacidad de pago y comportamientos de compra, para diseñar ofertas cada vez más atractiva (microsegmentación de consumidores)', },
    { name: 'La creación de competencias analíticas avanzadas para explotar la creciente cantidad de información disponible y relevante',},
    { name: 'La complejidad de planear y gestionar eficientemente las entregas de pedidos omnicanal (la última milla del e-commerce)',},
]

const features = [
    {
        name: 'Optimizar Inventarios y Flujo de Efectivo',
        description: 'Definimos estrategias que aseguren la rotación del producto minimizando desgaste de margen',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Incrementar Rentabilidad',
        description: 'Evaluamos el desempeño de los productos en punto de venta buscando mejoras en márgenes',
        icon: SortAscendingIcon,
    },
    {
        name: 'Incrementar Ventas',
        description: 'Alineamos el portafolio y la oferta de valor a las necesidades del cliente y tendencias del mercado redefiniendo la estrategia comercial',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Mejorar Servicio al Cliente',
        description: 'Mejoramos los procesos de resurtido para reducir faltantes en anaquel',
        icon: UsersIcon,
    },
]

const cadenas = [
    { name: '1. Compras', icon: CursorClickIcon, description: 'Entendemos que una buena planeación ayuda a rentabilizar la relación con tus proveedores' },
    { name: '2. Logística', icon: CubeIcon, description: 'Ayudamos a definir la estrategia más rentable para la distribución de los productos' },
    { name: '3. Portafolio', icon: ClipboardListIcon, description: 'Entendemos que cada categoría se comporta de manera distinta y que el surtido determina el éxito en en punto de venta' },
    { name: '4. Punto de Venta', icon: ShoppingBagIcon, description: 'El balance correcto entre inventario, espacio y margen en el punto de venta asegurando la disponibilidad (OSA)' },
    { name: '5. Consumidor', icon: UsersIcon, description: 'Es el pilar para definir las estrategias de negocio que aseguren la rentabilidad' },
]


// markup
const RetailPage = ({data}) => {
  return (
      <Layout>
          <TextHeader
              headline="Industria del Consumo"
              title="Industria del Retail"
          // title2 = "Industria del Consumo"
          // caption="Como una de las principales generadoras de actividad económica en México, la Industria de Consumo (en sus diferentes sectores) está enfrentando retos tanto sistémicos como coyunturales, que de no enfrentarse degradan tanto la capacidad de atender al Mercado, como también la rentabilidad y sustentabilidad de las Cadenas de Valor que la conforman:"
          />

          {data.allContentfulC06ConsultingSolutions.edges.map(edge => (
              <img className="shadow-xl w-full mt-10 object-cover m-auto max-h-96" src={edge.node.logo.file.url} alt={edge.node.logo.title} />
          ))}

          <div className="bg-white">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                  <div>
                      {/* <h2 className="font-arena text-base font-semibold text-arena-600 uppercase tracking-wide">Everything you need</h2> */}
                      <p className="font-arena mt-2 text-3xl font-extrabold text-gray-900">Los retos que enfrenta</p>
                      <p className="mt-4 text-lg text-gray-500">
                          Como uno de los sectores más afectados por cambios drásticos en los hábitos de consumo, y en particular la creciente relevancia del e-commerce en México, la industria de Retail cada día enfrenta mayores retos en la incesante persecución de mayores venta, menores degradaciones de margen y optimización de inventarios:

          </p>
                  </div>
                  <div className="mt-12 lg:mt-0 lg:col-span-2">
                      <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                          {retosindus.map((reto) => (
                              <div key={reto.name} className="relative">
                                  <dt>
                                      <CheckIcon className="absolute h-6 w-6 text-arena-500" aria-hidden="true" />
                                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{reto.name}</p>
                                  </dt>
                              </div>
                          ))}
                      </dl>
                  </div>
              </div>
          </div>

          <div className="bg-gray-100">
              <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Potencializando Cadenas de valor</h2>
                  <p className="mt-4 max-w-3xl text-lg text-gray-700 opacity-80">
                      Integrando los aprendizajes adquiridos durante más de 20 años trabajando en la industria de Retail con cadenas Departamentales, de Grandes Superficies, Fast Fashion y Especializados, los avances en Modelos de Planeación y Gestión, Herramientas y Ciencia de Datos, y las Mejores Prácticas de la Industria, logramos que nuestros Clientes capitalicen beneficios en:

        </p>
                  <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                      {features.map((feature) => (
                          <div key={feature.name}>
                              <div>
                                  <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500">
                                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                  </span>
                              </div>
                              <div className="mt-6">
                                  <h3 className="text-lg font-medium text-gray-800">{feature.name}</h3>
                                  <p className="mt-2 text-base text-gray-700">{feature.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>


          <div className="relative bg-white py-16 sm:py-24 lg:py-20">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  {/* <h2 className="font-arena text-base font-semibold tracking-wider text-arena-600 uppercase">Deploy faster</h2> */}
                  <p className="font-arena mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                      Cadena de valor
        </p>
                  {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
        </p> */}

                  <div className="mt-12">
                      <div className="grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-2 lg:grid-cols-5">
                          {cadenas.map((cadena) => (
                              <div className="relative">
                                  <div key={cadena.name} className="pt-6">
                                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                          <div className="-mt-6">
                                              <div>
                                                  <span className="inline-flex items-center justify-center p-3 bg-white border border-gray-400 rounded-2xl shadow-lg">
                                                      <cadena.icon className="h-6 w-6 text-arena-900" aria-hidden="true" />
                                                  </span>
                                              </div>
                                              <h3 className="font-arena mt-8 text-base font-semibold text-gray-900 tracking-tight">{cadena.name}</h3>
                                              <p className="mt-5 text-sm text-gray-700">
                                                  {cadena.description}
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                                  <ChevronRightIcon className="ml-2 hidden w-5 h-5 absolute inset-y-1/2 inset-x-full text-arena-400 md:block" />
                              </div>
                          ))}
                      </div>
                  </div>


              </div>
          </div>

          <ActionBackground />
      </Layout>
  )
}

export default RetailPage


export const query = graphql`
query RetailGraph {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }
  allContentfulC06ConsultingSolutions(filter: {linkTo: {eq: "/servicios/consulting/retail/"}}) {
    edges {
      node {
        logo {
          file {
            url
          }
          title
        }
        linkTo
      }
    }
  }
}
`

