import * as React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react';

//css
import '../styles/global.css';
import 'swiper/swiper-bundle.css';

//assets
import favicon from "../images/favicon.ico"
import logoArena from '../images/siteglobal/arenaLogo.svg'


//components
import Layout from "../components/layout"
import Card from "../components/card"
import HeroHome from "../components/hero";



// markup
const IndexPage = ({data}) => {

  return (
    
    <Layout>
      <Helmet title={data.site.siteMetadata.title}>
        <link rel="icon" href={favicon} />
        {/* <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"/> */}
        <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale = 1.0, user-scalable = no, viewport-fit = cover"/>
      </Helmet>


          <div>
            {/* Hero card */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <Swiper
                spaceBetween={20}
                loop = {false}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {data.allContentfulC01Hero.edges.map(edge => (
                  <SwiperSlide>
                    <HeroHome key={edge.node.title}
                      title = {edge.node.title}
                      title2 = {edge.node.title2}
                      body = {edge.node.introduction}
                      linkUrl = {edge.node.slug}
                      primaryButton = {edge.node.labelLink}
                      secondaryButton = "Ver video"
                      image = {edge.node.image.file.url}
                      alt = {edge.node.image.title}
                    />
                  </SwiperSlide>
                ))}
                </Swiper>
              </div>
            </div>
            

            {/* Logo cloud */}
            <div className="bg-gray-100">
              
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Nuestros partners confían en nosotros</p>
                  <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="Transistor" />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                      <img className="h-12" src={logoArena} alt="Workcation" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* More main page content here... */}
        

        <Card data={data}/> 

        {/* {data.allContentfulTestConnection.edges.map(edge => (
          <CardMaster
            title = {edge.node.title}
          />
        ))}  */}



    </Layout>




  )
}

export const query = graphql`

query ArenaAnalyticsQuery {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }
  allContentfulTestConnection(
    sort: {fields: [createdAt], order: ASC}
    filter: {node_locale: {eq: "es-MX"}}
  ) {
    edges {
      node {
        title
        title2
        description
        url
        createdAt
      }
    }
  }
  allContentfulC01Hero(
    filter: {node_locale: {eq: "es-MX"}}
    sort: {fields: [createdAt], order: ASC}
  ) {
    edges {
      node {
        title
        title2
        image {
          file {
            url
          }
          title
          description
        }
        createdAt
        id
        slug
        labelLink
        introduction
      }
    }
  }
}

`

export default IndexPage