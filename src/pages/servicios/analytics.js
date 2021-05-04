import * as React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import ActionBackground from "../../components/content/actions/bg-action"
import BackgroundHeader from "../../components/content/header/header-bg"

import GridSolutions from "../../components/content/bullets/grid-solutions"



// markup
const AnalyticsPage = ({data}) => {
  return (
      <Layout>
          {data.allContentfulC03ContentHeader.edges.map(edge => (
              <BackgroundHeader
                  key={edge.node.id}
                  title={edge.node.title}
                  caption={edge.node.longCaption.childMarkdownRemark.html}
                  image={edge.node.image.file.url}
                  alt={edge.node.image.title}
                  video={edge.node.video.file.url}
              />
          ))}

          <div className="bg-arena-700 relative">
              <div className="absolute inset-0">
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80" alt="people working" />
                  <div className="absolute inset-0 bg-brand-900 bg-opacity-60"></div>
              </div>
              <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                      <span className="block">Nuestro principal eje de creación y columna vertebral.</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-white">La Práctica de Consultoría de Arena Analytics se conforma de diferentes áreas de competencia que integramos para ofrecerles a nuestros Clientes soluciones robustas y pragmáticas que potencializan sus Estrategias, Procesos, Habilitadores Tecnológicos y Talento Humano.</p>
              </div>
          </div>


          <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
              <div className="relative max-w-7xl mx-auto">
                  <div className="space-y-5 sm:mx-auto sm:max-w-xl lg:max-w-4xl text-center">
                      <h2 className="font-arena text-base font-semibold tracking-wider text-arena-600 uppercase">Beneficios tangibles y sostenibles</h2>
                      <p className="font-arena mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">¿Cómo les ayudamos a nuestros Clientes?</p>
                      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">Hemos desarrollado Soluciones “hechas a la medida” para las cadenas de Valor de las Industrias en las cuales Arena Analytics se enfoca: Consumo, Retail y B2B.</p>
                      {/*<p className="text-base text-gray-800 md:text-xl md:leading-relaxed">Nuestros partners ayudan en los diferentes eslabones de la cadena de valor y habilitan nuestras soluciones enfocadas en industrias de retail, bienes de consumo y B2B. </p> */}
                  </div>
                  <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
                      {data.allContentfulC06ConsultingSolutions.edges.map(edge => (
                          <GridSolutions
                              image={edge.node.logo.file.url}
                              alt={edge.node.logo.title}
                              name={edge.node.name}
                            //   description={edge.node.description.childMarkdownRemark.html}
                              url={edge.node.linkTo}
                            //   content = {edge.node.content.childMarkdownRemark.html}
                          />
                      ))}
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
