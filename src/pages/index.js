import * as React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
// import { Swiper, SwiperSlide } from 'swiper/react';

//css
import '../styles/global.css';
// import 'swiper/swiper-bundle.css';

//assets
import favicon from "../images/favicon.ico"
import logoArena from '../images/siteglobal/arenaLogo.svg'


//components
import Layout from "../components/layout"
import HeroHome from "../components/hero";
import PostCard from "../components/content/insights/post-cards";
import GridThree from "../components/content/grid-three";



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
              <div className="max-w-7xl mx-auto sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
              {/* <Swiper
                spaceBetween={20}
                loop = {false}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {data.allContentfulC01HeroInsights.edges.map(edge => (
                  <SwiperSlide>
                    <HeroHome key={edge.node.title}
                      title = {edge.node.title}
                      title2 = {edge.node.title2}
                      body = {edge.node.introduction}
                      linkUrl = {edge.node.slug}
                      primaryButton = {edge.node.buttonText}
                      secondaryButton = "Ver video"
                      image = {edge.node.image.file.url}
                      alt = {edge.node.image.title}
                    />
                  </SwiperSlide>
                ))}
                </Swiper> */}
                {data.allContentfulC01HeroInsights.edges.map(edge => (
                  <HeroHome 
                      key={edge.node.title}
                      title = {edge.node.title}
                      title2 = {edge.node.title2}
                      body = {edge.node.introduction}
                      linkUrl = {edge.node.slug}
                      primaryButton = {edge.node.buttonText}
                      secondaryButton = "Ver video"
                      image = {edge.node.image.file.url}
                      alt = {edge.node.image.title}
                    />
                ))}
              </div>
            </div>

            {/* Insights Cards */}

          <div className="relative bg-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-testcolor-900 sm:text-4xl">Our Latest Thinking</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">From insights to action, the path to 360° value starts here.</p>
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {data.allContentfulEntry.edges.map(edge => (
                <PostCard 
                  key = {edge.node.id}
                  image = {edge.node.image.file.url}
                  type = {edge.node.typeOfArticle}
                  title = {edge.node.title}
                  title2 = {edge.node.title2}
                  introduction = {edge.node.introduction}
                  linkUrl = {edge.node.slug}
                />
                ))}
              </div>
            </div>
          </div>

          {/* Services we offer */}

          {/* <GridThree/> */}
            

            {/* Logo cloud */}
            <div className="bg-white">            
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
  allContentfulC01HeroInsights(
    sort: {order: DESC, fields: [createdAt]}
    limit: 1
    filter: {featuredInsight: {eq: true}}
  ) {
    edges {
      node {
        image {
          file {
            url
          }
          title
        }
        typeOfArticle
        title
        title2
        introduction
        buttonText
        slug
        id
        createdAt
      }
    }
  }
  allContentfulEntry(limit: 3) {
    edges {
      node {
        ... on ContentfulC01HeroInsights {
          image {
            file {
              url
            }
            title
          }
          typeOfArticle
          title
          title2
          introduction
          buttonText
          slug
          id
          createdAt
        }
      }
    }
  }
}


`

export default IndexPage