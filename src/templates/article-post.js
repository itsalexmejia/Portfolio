import React from 'react'
import { graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// import { Helmet } from 'react-helmet'
// import get from 'lodash/get'

//Commponents
import Layout from '../components/layout'
import TextHeader from '../components/content/header/header-txt'


const document = {
  nodeType: 'document',
  content: [
    {
      nodeType: 'paragraph',
      content: [
        {
          nodeType: 'text',
          value: 'Hello world!',
          marks: [],
        },
      ],
    },
  ],
};

class BlogPostContentful extends React.Component {
  render() {
    const post = this.props.data.contentfulC01HeroInsights
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout>
        <div style={{ background: '#fff' }}>
          {/* <Helmet title={`${post.title} | ${siteTitle}`} /> */}

          <TextHeader
            headline="Meet our leadership"
            title = {post.title}
            title2 = {post.title2}
            caption="Teamwork makes the dream work"
          />

          <div>
            <img className="" src={post.image.file.url} alt={post.image.title} />
            <div className="mx-auto prose prose-bluearena">
              <h1>{post.title}</h1>
              <div>{post.content.raw}</div>
              <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(post.content.raw) }} />

              {documentToHtmlString(post.content.raw,document)}
              {/* {documentToHtmlString(post.content.raw)} */}
            </div>
          </div>
        
        </div>
      </Layout>
    )
  }
}

export default BlogPostContentful

export const pageQuery = graphql`
query BlogPostBySlug($slug: String = "") {

  contentfulC01HeroInsights(slug: {eq: $slug}) {
    slug
    title
    title2
    content {
      raw
    }
    featuredInsight
    image {
      file {
        url
      }
      title
    }
  }
  
}
`