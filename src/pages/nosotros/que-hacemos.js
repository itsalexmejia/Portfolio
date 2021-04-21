import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"

//assets
//components
import HeaderLeft from "../../components/content/header/header-left"
import StatsHome from "../../components/content/bullets/stats"
import GridThreeBg from "../../components/content/bullets/grid-three-bg"
import BulletBig from "../../components/content/bullets/bullet-big-image"
import BulletList from "../../components/content/bullets/bullet-list"
import ActionBackground from "../../components/content/actions/bg-action"
import BackgroundHeader from "../../components/content/header/header-bg"



// markup
const NosotrosPage = ({data}) => {
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
      <div className="bg-brand-700 relative">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1483653085484-eb63c9f02547?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="people working" />
          <div className="absolute inset-0 bg-brand-900 bg-opacity-60"></div>
        </div>
        <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Aseguramos la transformación deseada.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-white">Utilizamos nuestra experiencia y conocimiento en retail, bienes de consumo y B2B para generar e implementar estrategias, procesos y mejores prácticas de manera sostenible, empoderando a los colaboradores y habilitando la tecnología adecuada.</p>
        </div>
      </div>
      <StatsHome />
      <BulletBig />
      <BulletList />
      <ActionBackground />
    </Layout>
  )
}

export const query = graphql`
query NosGraph {
  allContentfulC03ContentHeader(
    filter: {atPage: {eq: "nosotros"}}
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
  
}
`

export default NosotrosPage
