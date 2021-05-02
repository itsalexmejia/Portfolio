import * as React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../../../components/layout"
import ActionBackground from "../../../components/content/actions/bg-action"
import TextHeader from '../../../components/content/header/header-txt'
import { CheckIcon } from "@heroicons/react/outline"
import {
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    PencilAltIcon,
    ReplyIcon,
    TrashIcon,
    UsersIcon,
  } from '@heroicons/react/outline'

  import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'

const retosindus = [
    { name: 'La creciente complejidad de portafolios más amplios, con más productos y presentaciones especializadas', 
},
    {
      name: 'El asegurar visibilidad a lo largo de la Cadena de Valor para una gestión efectiva a lo largo de múltiples regiones',
    },
    { name: 'La capacidad de reacción rápida ante disrupciones de la Cadena (resiliencia)', },
    { name: 'El habilitar nuevos Modelos Operativos y Capacidades para Cadenas cada vez más ágiles y eficientes', 
     },
     {
        name: 'Los nuevos hábitos de consumo',
      },
    
  ]

  const features = [
    {
      name: 'Optimizar Flujo de Efectivo',
      description: 'Acortamos los ciclos financieros de cobro y pago',
      icon: InboxIcon,
    },
    {
      name: 'Incrementar Rentabilidad',
      description: 'Capitalizamos oportunidades en la utilización de activos transporte y almacenes',
      icon: UsersIcon,
    },
    {
      name: 'Incrementar Ventas',
      description: 'Potenciamos el ser socio estratégico a través del entendimiento de la complejidad del mercado, productos, clientes y esquemas de suministro',
      icon: TrashIcon,
    },
    {
      name: 'Mejorar Servicio al Cliente',
      description: 'Aseguramos la atención a cada uno de los clientes y brindando visibilidad del cumplimiento de sus expectativas',
      icon: PencilAltIcon,
    },
  ]

  const cadenas = [
    { name: '1. Proveedores', icon: UsersIcon, description: 'Entendemos que uno de los pilares para la cadena es asegurar el abasto de materiales' },
    { name: '2. Infraestructura', icon: UsersIcon, description: 'Ayudamos a evaluar las capacidades operativas con las necesidades actuales y futuras de tu negocio' },
    { name: '3. Operaciones internas', icon: UsersIcon, description: 'Alineamos los niveles tácticos y operativos en la ejecución de los planes de demanda y suministro' },
    { name: '4. Logística', icon: UsersIcon, description: 'Ayudamos a encontrar eficiencias en el gasto logístico mejorando la utilización de los activos propios o tercerizados' },
    { name: '5. Cliente', icon: UsersIcon, description: 'Ayudamos a cumplir la oferta de servicio al cliente de la manera más rentable posible' },
  ]


// markup
const ConsumoPage = ({data}) => {
  return (
      <Layout>
          <TextHeader
            headline="Industria del Consumo"
            title = "Industria del Consumo"
            // title2 = "Industria del Consumo"
            // caption="Como una de las principales generadoras de actividad económica en México, la Industria de Consumo (en sus diferentes sectores) está enfrentando retos tanto sistémicos como coyunturales, que de no enfrentarse degradan tanto la capacidad de atender al Mercado, como también la rentabilidad y sustentabilidad de las Cadenas de Valor que la conforman:"
          />

<div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          {/* <h2 className="font-arena text-base font-semibold text-arena-600 uppercase tracking-wide">Everything you need</h2> */}
          <p className="font-arena mt-2 text-3xl font-extrabold text-gray-900">Los retos que enfrenta</p>
          <p className="mt-4 text-lg text-gray-500">
          Como una de las principales generadoras de actividad económica en México, la Industria de Consumo (en sus diferentes sectores) está enfrentando retos tanto sistémicos como coyunturales, que de no enfrentarse degradan tanto la capacidad de atender al Mercado, como también la rentabilidad y sustentabilidad de las Cadenas de Valor que la conforman:

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
        Integrando los aprendizajes adquiridos durante más de 20 años trabajando en las industrias de Bebidas, Confitería, Lácteos y Spirits, los avances en Modelos de Planeación y Gestión, Herramientas y Ciencia de Datos, y las Mejores Prácticas de la Industria, logramos que nuestros Clientes capitalicen beneficios en:
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {cadenas.map((cadena) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
    
          <ActionBackground />
      </Layout>
  )
}

export default ConsumoPage

export const query = graphql`
query Consumo {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }
  allContentfulC03ContentHeader(filter: {atPage: {eq: "consulting"}}, limit: 1) {
    edges {
      node {
        title
        atPage
        caption
        id
        image {
          file {
            url
          }
          title
        }
        video {
          file {
            url
          }
        }
        longCaption {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }

  allContentfulC06ConsultingSolutions(sort: {order: ASC, fields: createdAt}) {
    edges {
      node {
        logo {
          file {
            url
          }
          title
        }
        name
        linkTo
        description {
          childMarkdownRemark {
            html
          }
        }
        createdAt
      }
    }
  }

}
`
