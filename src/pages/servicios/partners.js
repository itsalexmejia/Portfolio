import * as React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import ActionBackground from "../../components/content/actions/bg-action"
import BackgroundHeader from "../../components/content/header/header-bg"

import logoHome1 from '../../images/siteglobal/logo-home-1.png'
import logoHome2 from '../../images/siteglobal/logo-home-2.png'
import logoHome3 from '../../images/siteglobal/logo-home-3.png'
import logoHome4 from '../../images/siteglobal/logo-home-4.png'
import logoHome5 from '../../images/siteglobal/logo-home-5.png'


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
                  video = {edge.node.video.file.url}
              />
          ))}

<div className="bg-gray-100">            
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <p className="font-arena text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Colaboramos con estos socios líderes</p>
                  <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12 object-contain" src={logoHome1} alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12 object-contain" src={logoHome2} alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12 object-contain" src={logoHome3} alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                      <img className="h-12 object-contain" src={logoHome4} alt="Transistor" />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                      <img className="h-12 object-contain" src={logoHome5} alt="Workcation" />
                    </div>
                  </div>
                </div>
              </div>


          <ActionBackground/>
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
}
`
