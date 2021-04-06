import * as React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"

//Components
import Layout from "../components/layout"
import BackgroundHeader from "../components/content/header/header-bg"
import PeopleCircle from "../components/content/people/people-circle"
import BigImageSection from "../components/content/sections/big-image"
import ImageLeftBullet from "../components/content/bullets/bullet-image-left"


// markup
const CareersPage = ({data}) => {
  return (
      <Layout>
          {data.allContentfulC03ContentHeader.edges.map(edge => (
              <BackgroundHeader
                  key={edge.node.id}
                  title={edge.node.title}
                  caption={edge.node.caption}
                  image={edge.node.image.file.url}
                  alt={edge.node.image.title}
                  video = {edge.node.video.file.url}
              />
          ))}
          <div className="bg-gray-50">
              <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                  <div className="space-y-12">
                      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                          <h2 className="font-arena text-3xl font-extrabold tracking-tight text-brand-700 sm:text-4xl">Conoce a nuestro equipo</h2>
                          <p className="text-xl text-gray-500">Nos interesan las personas ansiosas por generar valor y con ganas de innovar</p>
                      </div>
                      <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
                          {data.allContentfulC02OurTeam.edges.map(edge => (
                              <PeopleCircle
                                  key={edge.node.id}
                                  name={edge.node.name}
                                  position={edge.node.position}
                                  image={edge.node.image.file.url}
                                  alt={edge.node.image.title}
                              />
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
          <ImageLeftBullet/>
          <BigImageSection/>
          
      </Layout>
  )
}

export const query = graphql`

query Careers {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }
  allContentfulC02OurTeam(
    filter: {executiveProfile: {eq: false}}
    sort: {order: ASC, fields: orderAtPage}
  ) {
    edges {
      node {
        name
        image {
          file {
            url
          }
          title
        }
        position
        executiveProfile
        id
        orderAtPage
      }
    }
  }
  allContentfulC03ContentHeader(filter: {atPage: {eq: "work with us"}}, limit: 1) {
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
}

`

export default CareersPage
