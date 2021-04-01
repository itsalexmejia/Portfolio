// import React from "react"
import * as React from "react"
import { graphql } from 'gatsby'

//Components
import TextHeader from "../../components/content/header/header-txt"
import PeopleGrid from "../../components/content/people-grid"
import Layout from "../../components/layout"
import ActionBackground from "../../components/content/actions/bg-action"


const GentePage = ({data}) => {

    return (
        <Layout>
            {data.allContentfulC03ContentHeader.edges.map(edge => (
                <TextHeader
                    key = {edge.node.id}
                    headline={edge.node.headline}
                    title={edge.node.title}
                    caption={edge.node.caption}
                />
            ))}

            <div className="bg-white">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                            {data.allContentfulC02OurTeam.edges.map(edge => (
                                <PeopleGrid 
                                    key={edge.node.id}
                                    name = {edge.node.name}
                                    position = {edge.node.position}
                                    description = {edge.node.shortDescription}
                                    image = {edge.node.image.file.url}
                                />
                            ))}

                        </ul>
                    </div>
                </div>
            </div>

            <ActionBackground/>
            
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
      }
    }
  }

}
`

export default GentePage