// import React from "react"
import * as React from "react"
import { graphql } from 'gatsby'

//Components
// import TextHeader from "../../components/content/header/header-txt"
import HeaderLeft from "../../components/content/header/header-left"
import PeopleGrid from "../../components/content/people/people-grid"
import Layout from "../../components/layout"
import ActionBackground from "../../components/content/actions/bg-action"


const GentePage = ({data}) => {

    return (
      <Layout>
        {/* {data.allContentfulC03ContentHeader.edges.map(edge => (
          <TextHeader
            key={edge.node.id}
            headline={edge.node.headline}
            title={edge.node.title}
            caption={edge.node.caption}
          />
        ))} */}

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


        <div className="bg-white">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">

            {data.allContentfulP03Liderazgo.edges.map(edge => (
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-4xl text-center">
                {/* <p className="text-base text-gray-800 md:text-xl md:leading-relaxed">{edge.node.teamIntro.childMarkdownRemark.html}</p> */}
                <div className="text-base text-gray-800 md:text-xl md:leading-relaxed" dangerouslySetInnerHTML={{ __html: edge.node.teamIntro.childMarkdownRemark.html }} />
              </div>
              ))}
              {/* <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-4 lg:gap-8"></ul> */}
              <ul className="sm:flex sm:flex-wrap sm:justify-center">
                {data.allContentfulC02OurTeam.edges.map(edge => (
                  <PeopleGrid
                    key={edge.node.id}
                    name={edge.node.name}
                    position={edge.node.position}
                    description={edge.node.longDescription.childMarkdownRemark.html}
                    image={edge.node.image.file.url}
                  />
                ))}

              </ul>
            </div>
          </div>
        </div>

        <ActionBackground />

      </Layout>
    )
}

export const query = graphql`
query ExecutiveProfiles {
  allContentfulC02OurTeam(
    sort: {fields: orderAtPage, order: ASC}
    filter: {executiveProfile: {eq: true}}
  ) {
    edges {
      node {
        executiveProfile
        orderAtPage
        name
        position
        image {
          file {
            url
          }
        }
        id
        shortDescription
        longDescription {
          childMarkdownRemark{
						html
          }
        }
      }
    }
  }

  allContentfulP03Liderazgo(limit: 1) {
    edges {
      node {
        teamIntro {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }

  allContentfulC03ContentHeader(filter: {atPage: {eq: "leadership"}}, limit: 1) {
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

}
`

export default GentePage