import * as React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import ActionBackground from "../../components/content/actions/bg-action"
import BackgroundHeader from "../../components/content/header/header-bg"

import GridSolutions from "../../components/content/bullets/grid-solutions"

import scheme from "../../images/siteglobal/scheme.jpg"

import logoTool1 from "../../images/tools/logo-tool-1.png"
import logoTool2 from "../../images/tools/logo-tool-2.png"
import logoTool3 from "../../images/tools/logo-tool-3.png"
import logoTool4 from "../../images/tools/logo-tool-4.png"
import logoTool5 from "../../images/tools/logo-tool-5.png"
import logoTool6 from "../../images/tools/logo-tool-6.png"
import logoTool7 from "../../images/tools/logo-tool-7.png"
import logoTool8 from "../../images/tools/logo-tool-8.png"
import logoTool9 from "../../images/tools/logo-tool-9.png"
import { SortAscendingIcon, ThumbUpIcon, DatabaseIcon, ExternalLinkIcon, CheckIcon } from "@heroicons/react/outline"

const features = [
    {
        description: 'Desarrollamos el componente de ciencia de datos en los proyectos a través de una metodología iterativa en 4 fases',
        name: 'Metodología iterativa',
        icon: DatabaseIcon,
    },
    {
        description: 'De esta manera aseguramos que cada esfuerzo tiene beneficios incrementales alineados a las expectativas del cliente',
        name: 'Beneficios incrementales',
        icon: SortAscendingIcon,
    },
    {
        description: 'Esto lo gestionamos a través de un esquema ágil basado en los principios de Scrum y Kanban',
        name: 'Esquema ágil',
        icon: ThumbUpIcon,
    },
]

// markup
const AnalyticsPage = ({data}) => {
  return (
      <Layout>
          {data.allContentfulC03ContentHeader.edges.map(edge => (
              <BackgroundHeader
                  key={edge.node.id}
                  title={edge.node.title}
                  // caption={edge.node.longCaption.childMarkdownRemark.html}
                  caption = "Muchas empresas utilizan información interna y externa para analizar y reportar el estado del negocio, pero pocas la aprovechan al máximo para gestionar la estrategia en tiempo real. Las que lo están haciendo están logrando una ventaja competitiva."
                  image={edge.node.image.file.url}
                  alt={edge.node.image.title}
                  video={edge.node.video.file.url}
              />
          ))}

          <div className="bg-arena-700 relative">
              <div className="absolute inset-0">
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80" alt="people working" />
                  <div className="absolute inset-0 bg-brand-900 bg-opacity-70"></div>
              </div>
              <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                      <span className="block">Aseguramos la limpieza y estructura de los datos</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-white">Esto lo logramos recabando distintas fuentes internas y externas, desarrollando mecanismos para asegurar la limpieza y estructura de los datos e integrando modelos predictivos en herramientas que mejoren la operación y definición de estrategia del negocio.</p>
              </div>
          </div>

          <div className="relative py-16 bg-arena-900 -mt-1 z-10 pb-72">
              <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="font-arena text-3xl font-extrabold text-white sm:text-4xl">Nuestra Metodología.</h2>
                  <p className="mt-3 max-w-3xl mb-10 text-lg text-white opacity-70">Principios de la metodología Arena para ejecución de Ciencia de Datos</p>
                  <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                      {features.map((feature) => (
                          <div key={feature.name}>
                              <dt>
                                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white bg-opacity-10 text-white">
                                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                                  </div>
                                  <p className="mt-5 text-lg leading-6 font-medium text-white">{feature.name}</p>
                              </dt>
                              <dd className="mt-2 text-base text-white opacity-70">{feature.description}</dd>
                          </div>
                      ))}
                  </dl>
              </div>
          </div>

          <img className="shadow-xl w-full my-20 -mt-56 relative z-10 object-contain m-auto max-w-screen-xl rounded-xl" src={scheme} alt="scheme" />



          <div className="bg-white">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:pt-3">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                      <div>
                          <h2 className="font-arena text-3xl font-extrabold text-gray-900 sm:text-4xl">Herramientas</h2>
                          <p className="mt-3 max-w-3xl text-lg text-gray-500">Utilizamos los habilitadores tecnológicos de acuerdo a las necesidades de manejo de datos, uso que se le dará al desarrollo y nivel de madurez de la organización</p>
                          <p className="mt-3 max-w-3xl text-lg text-gray-500">Generalmente usamos una combinación de los siguientes recursos:</p>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool1} alt="logotool1" />
                          </div>

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool2} alt="logotool1" />
                          </div>

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool3} alt="logotool1" />
                          </div>

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool4} alt="logotool1" />
                          </div>

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool5} alt="logotool1" />
                          </div>

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool6} alt="logotool1" />
                          </div>

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool7} alt="logotool1" />
                          </div>

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool8} alt="logotool1" />
                          </div>

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool9} alt="logotool1" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="relative bg-gray-100">
              <div className="h-56 bg-arena-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                  <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      alt=""
                  />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                  <div className="md:ml-auto md:w-1/2 md:pl-10">
                      <h2 className="font-arena text-base font-semibold uppercase tracking-wider text-arena-300">Nuestro equipo</h2>
                      <p className="font-arena mt-2 text-gra-900 text-3xl font-extrabold tracking-tight sm:text-3xl">Tenemos un equipo de científicos de datos enfocados en:</p>
                      <p className="mt-5 text-lg text-gray-700">
                          <CheckIcon className="w-6 h-6 float-left text-arena-900 mr-6" />Arquitectura de Datos</p>
                      <p className="mt-3 text-lg text-gray-700">
                          <CheckIcon className="w-6 h-6 float-left text-arena-900 mr-6" />Ingeniería de Datos</p>
                      <p className="mt-3 text-lg text-gray-700">
                          <CheckIcon className="w-6 h-6 float-left text-arena-900 mr-6" />Análisis y Modelado de Datos</p>
                  </div>
              </div>
          </div>
          <ActionBackground />
      </Layout>
  )
}

export default AnalyticsPage

export const query = graphql`
query AnalyticsGraph {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }
  allContentfulC03ContentHeader(filter: {atPage: {eq: "analytics"}}, limit: 1) {
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
        content {
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
