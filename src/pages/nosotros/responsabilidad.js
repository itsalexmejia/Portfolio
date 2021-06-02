import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"

//assets
//components
import HeaderLeft from "../../components/content/header/header-left"
import CardAction from "../../components/content/actions/card-action"
// import { UsersIcon } from "@heroicons/react/outline"


// markup
const ResPage = ({data}) => {
  return (
    <Layout>
      {data.allContentfulC03ContentHeader.edges.map(edge => (
        <HeaderLeft
          key={edge.node.id}
          headline={edge.node.headline}
          title={edge.node.title}
          caption={edge.node.caption}
          image={edge.node.image.file.url}
          alt={edge.node.image.title}
        />
      ))}

      {data.allContentfulP02Responsabilidad.edges.map(edge => (

        <div className="relative bg-gray-50 pt-16 pb-20 px-4 border-b border-gray-200 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-7xl mx-auto">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl lg:max-w-4xl text-center">
              <p className="text-base text-gray-800 md:text-xl md:leading-relaxed">{edge.node.introOrganizations}</p>
              <h2 className="font-arena text-base font-semibold uppercase tracking-wider text-arena-900">{edge.node.smallCaptionOrg}</h2>
            </div>
          </div>
        </div>
      ))}



      {data.allContentfulC05Organizaciones.edges.map(edge => (
        <CardAction
          headline={edge.node.headline}
          organizationName={edge.node.organizationName}
          introduction={edge.node.introduction}
          image={edge.node.image.file.url}
          alt={edge.node.image.title}
          content={edge.node.content.childMarkdownRemark.html}
          align={edge.node.alignment}
          alignText={edge.node.alignText}
        />
      ))}

    </Layout>
  )
}

export const query = graphql`
query ResponsabilidadGraph {
  allContentfulC03ContentHeader(
    filter: {atPage: {eq: "responsabilidad"}}
    limit: 1
  ) {
    edges {
      node {
        headline
        title
        caption
        atPage
        id
        image {
          file {
            url
          }
          title
        }
      }
    }
  }
  allContentfulC05Organizaciones(sort: {order: ASC, fields: createdAt}) {
    edges {
      node {
        headline
        organizationName
        introduction
        logo {
          file {
            url
          }
          title
        }
        image {
          title
          file {
            url
          }
        }
        content {
          childMarkdownRemark {
            html
          }
        }
        alignment
        alignText
      }
    }
  }

  allContentfulP02Responsabilidad(limit: 1) {
    edges {
      node {
        introOrganizations
        smallCaptionOrg
      }
    }
  }
}
`

export default ResPage
