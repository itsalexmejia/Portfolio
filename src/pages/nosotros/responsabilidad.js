import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"

//assets
//components
import HeaderLeft from "../../components/content/header/header-left"
import CardAction from "../../components/content/actions/card-action"


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
  allContentfulC05Organizaciones {
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
}
`

export default ResPage
