import * as React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import ActionBackground from "../../components/content/actions/bg-action"
import BackgroundHeader from "../../components/content/header/header-bg"

import GridTwo from "../../components/content/bullets/grid-card-three"



// markup
const PartnersPage = ({data}) => {
  return (
    <Layout>
      {data.allContentfulC03ContentHeader.edges.map(edge => (
        <BackgroundHeader
          key={edge.node.id}
          title={edge.node.title}
          caption={edge.node.caption}
          image={edge.node.image.file.url}
          alt={edge.node.image.title}
          video={edge.node.video.file.url}
        />
      ))}
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl lg:max-w-4xl text-center">
            <p className="text-base text-gray-800 md:text-xl md:leading-relaxed">Nuestros partners ayudan en los diferentes eslabones de la cadena de valor y habilitan nuestras soluciones enfocadas en industrias de retail, bienes de consumo y B2B. </p>
          </div>
          {/* <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none"></div> */}
          <div className="mt-12 max-w-lg mx-auto flex flex-wrap justify-center lg:max-w-none">
            {data.allContentfulC04Partners.edges.map(edge => (
              <GridTwo
                image={edge.node.logo.file.url}
                alt={edge.node.logo.title}
                name={edge.node.name}
                description={edge.node.description.childMarkdownRemark.html}
                url={edge.node.linkTo}
              />
            ))}
          </div>
        </div>
      </div>
      <ActionBackground />
    </Layout>
  )
}

export default PartnersPage

export const query = graphql`
query Partners {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }
  allContentfulC03ContentHeader(filter: {atPage: {eq: "partners"}}, limit: 1) {
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
      }
    }
  }

  allContentfulC04Partners(sort: {order: ASC, fields: name}) {
    edges {
      node {
        logo {
          file {
            url
          }
          title
        }
        name
        description {
          childMarkdownRemark {
            html
          }
        }
        linkTo
        createdAt
      }
    }
  }

}
`
