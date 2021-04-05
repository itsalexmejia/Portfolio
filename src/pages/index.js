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


//components
import Layout from "../components/layout"
import HeroHome from "../components/hero";
import PostCard from "../components/content/insights/post-cards";
import GridThree from "../components/content/bullets/grid-three";
// import BackgroundHeader from "../components/content/header/header-bg";
import ActionImageLeft from "../components/content/actions/image-left-action";
import AlertHome from "../components/content/alert";
import StatsHome from "../components/content/bullets/stats";
import CardimageAction from "../components/content/actions/card-image";



// markup
const IndexPage = ({data}) => {

  return (
    
    <Layout>

      <Helmet title={data.site.siteMetadata.title}>
        <link rel="icon" href={favicon} />
        {/* <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"/> */}
        <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale = 1.0, user-scalable = no, viewport-fit = cover"/>
      </Helmet>

      {/* Mensaje impoortante */}
      <AlertHome/>
      

      


          <div>
            {/* Hero card */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
              <div className="mx-auto">
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

            <GridThree
              headline = "Cómo ayudamos"
              title = "Nuestros servicios"
              caption = "Utilizamos nuestra experiencia y conocimiento para generar e implementar estrategias, procesos y mejores prácticas." 
              bulletTitle1 = "Práctica de Consultoría"
              bulletCaption1 = "Beneficios tangibles y sostenibles a nuestros clientes en rentabilidad y ventas. Eficiencias operativas, flujo de efectivo y servicio."              
              bulletTitle2 = "Ciencia de datos"
              bulletCaption2 = "Aprovechamos la información que nuestros clientes ya tienen para generar análisis de valor que habiliten la toma de decisiones."
              bulletTitle3 = "Soluciones tecnológicas"
              bulletCaption3 = "Hemos seleccionado soluciones tecnológicas soportadas por Inteligencia Artificial y que habiliten a la operación para lograr resultados reales."
              buttonShows = "flex"
            />

            <ActionImageLeft/>
            <StatsHome/>

            {/* Logo cloud */}
            <div className="bg-gray-100">            
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <p className="font-arena text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Colaboramos con estos socios líderes</p>
                  <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src={logoHome1} alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src={logoHome2} alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                      <img className="h-12" src={logoHome3} alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                      <img className="h-12" src={logoHome4} alt="Transistor" />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                      <img className="h-12" src={logoHome5} alt="Workcation" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CardimageAction/>

            {/* Insights Cards */}

          <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-bluearena-900 sm:text-4xl">Insights por arena analytics</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">De las ideas a la acción, el camino hacia el valor de 360 ​​° comienza aquí.</p>
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
                  altText = {edge.node.image.title} 
                />
                ))}
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