import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function BlogPost({ data }) {
  const { article } = data
  return (
    <Layout>
      <SEO
          title={ data.article.title }
          description={ data.article.fields.markdownBody.childMarkdownRemark.excerpt }
          ogimage={ data.article.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.resize.src }
          ogimageheight={data.article.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.resize.height}
          ogimagewidth={data.article.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.resize.width}
      />
      <div dangerouslySetInnerHTML={{ __html: article.fields.markdownBody.childMarkdownRemark.html }} />
      <Bio />
    </Layout>
  ) 
}

// TODO: augment query with image and excerpt
export const blogPostQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    article: nodeArticle(fields:{slug:{eq:$slug}}) {
      title
      fields {
        markdownBody {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 160)
          }
        }
      }
      relationships {
          field_image {
            relationships {
              field_media_image {
                localFile {
                  childImageSharp {
                      resize(width:1200) {
                        src
                        width
                        height
                      }
                    }
                }
              }
            }
          }
        }
    }
  }
`