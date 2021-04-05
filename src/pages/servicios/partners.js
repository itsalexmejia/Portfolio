import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import ActionBackground from "../../components/content/actions/bg-action"


// markup
const PartnersPage = ({data}) => {
  return (
    <Layout>
      {/* {data.allContentfulC03ContentHeader.edges.map(edge => (
              <BackgroundHeader
                  key={edge.node.id}
                  title={edge.node.title}
                  caption={edge.node.caption}
                  image={edge.node.image.file.url}
                  alt={edge.node.image.title}
              />
          ))} */}


          <ActionBackground/>
    </Layout>
  )
}

export default PartnersPage
