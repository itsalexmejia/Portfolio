// import React from 'react'
// import { graphql } from 'gatsby'
// // import { Helmet } from 'react-helmet'
// // import get from 'lodash/get'

// //Commponents
// import Layout from '../components/layout'
// import TextHeader from '../components/content/header/header-txt'


// class BlogPostContentful extends React.Component {
//   render() {
//     const post = this.props.data.contentfulC01Hero
//     // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

//     return (
//       <Layout>
//         <div style={{ background: '#fff' }}>
//           {/* <Helmet title={`${post.title} | ${siteTitle}`} /> */}

//           <TextHeader
//             headline="Meet our leadership"
//             title= {post.title}
//             caption="Teamwork makes the dream work"
//           />


//           <div className="wrapper">       
//             <div
//               dangerouslySetInnerHTML={{
//                 __html: post.content.raw
//               }}
//             />
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }

// export default BlogPostContentful

// export const pageQuery = graphql`
// query BlogPostBySlug($slug: String!) {
//   contentfulC01Hero(slug: { eq: $slug })  {
//         title
//         title2
//         image {
//           file {
//             url
//           }
//           title
//           description
//         }
//         introduction
//         content {
//           raw
//         }
//         slug
//       }
// }
// `