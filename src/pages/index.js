import * as React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
// import { Swiper, SwiperSlide } from 'swiper/react';

//css
import '../styles/global.css';
// import 'swiper/swiper-bundle.css';

//assets
import favicon from "../images/favicon.ico"
// import logoArena from '../images/siteglobal/arenaLogo.svg'

import logoHome1 from '../images/siteglobal/logo-home-1.png'
import logoHome2 from '../images/siteglobal/logo-home-2.png'
import logoHome3 from '../images/siteglobal/logo-home-3.png'
import logoHome4 from '../images/siteglobal/logo-home-4.png'
import logoHome5 from '../images/siteglobal/logo-home-5.png'
import logoHome6 from '../images/siteglobal/logo-home-6.png'


//components
import Layout from "../components/layout"
import HeroHome from "../components/hero";
// import PostCard from "../components/content/insights/post-cards";
import GridThree from "../components/content/bullets/grid-three";
// import BackgroundHeader from "../components/content/header/header-bg";
// import ActionImageLeft from "../components/content/actions/image-left-action";
// import AlertHome from "../components/content/alert";
// import StatsHome from "../components/content/bullets/stats";
import CardimageAction from "../components/content/actions/card-image";



// markup
const IndexPage = ({data}) => {

  return (
    <Layout>
      <Helmet title={data.site.siteMetadata.title}>
        <link rel="icon" href={favicon} />
        {/* <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"/> */}
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale = 1.0, user-scalable = no, viewport-fit = cover" />
      </Helmet>
      {/* Mensaje impoortante */}
      {/* <AlertHome/> */}
      {data.allContentfulP04Inicio.edges.map(edge => (

        <div key={edge.node.title}>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
            <div className="mx-auto xl:px-5">
              {/*sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 max-w-7xl */}
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

              <HeroHome
                title={edge.node.smallIntro}
                title2={edge.node.quote}
                title2by={edge.node.quoteBy}
                bigbody={edge.node.description.childMarkdownRemark.html}
                // linkUrl={edge.node.slug}
                primaryButton={edge.node.buttonText}
                // secondaryButton="Ver video"
                // image={edge.node.image.file.url}
                // alt={edge.node.image.title}
              />
            </div>
          </div>

          <GridThree
            headline={edge.node.section2Intro}
            title={edge.node.section2Title}
            caption={edge.node.section2Description}
            bulletTitle1={edge.node.section2Bullet1Title}
            bulletCaption1={edge.node.section2Bullet1Des}
            bulletTitle2={edge.node.section2Bullet2Title}
            bulletCaption2={edge.node.section2Bullet2Des}
            bulletTitle3={edge.node.section2Bullet3Title}
            bulletCaption3={edge.node.section2Bullet3Des}
            buttonShows="flex"
          />

          {/* <ActionImageLeft/> */}
          {/* <StatsHome/> */}

          <CardimageAction 
            title = {edge.node.section3Title}
            intro = {edge.node.section3Intro}
            description = {edge.node.section3Description}
          />

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="font-arena text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">{edge.node.ourPartnersIntro}</p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12 object-contain" src={logoHome1} alt="Logo" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12 object-contain" src={logoHome2} alt="Logo" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12 object-contain" src={logoHome3} alt="Logo" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img className="h-12 object-contain" src={logoHome4} alt="Logo" />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img className="h-12 object-contain" src={logoHome5} alt="Logo" />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img className="h-12 object-contain" src={logoHome6} alt="Logo" />
                </div>
              </div>
            </div>
          </div>

        </div>

      ))}













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

  allContentfulP04Inicio(limit: 1) {
    edges {
      node {
        smallIntro
        quote
        quoteBy
        description {
          childMarkdownRemark {
            html
          }
        }
        buttonText
        section2Intro
        section2Title
        section2Description
        section2Bullet1Title
        section2Bullet1Des
        section2Bullet2Title
        section2Bullet2Des
        section2Bullet3Title
        section2Bullet3Des
        section3Title
        section3Intro
        section3Description
        ourPartnersIntro
      }
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