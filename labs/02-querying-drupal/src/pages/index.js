import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'


// TODO: use injected data prop from query
export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Your Great Blog" description="All my blog posts" />
      <h1>Hello, and welcome to the gatsby-drupal-blog!</h1>
      <ul>
          {  data.allNodeArticle.edges.map((item, key) =>
              <li><Link to={item.node.fields.slug}>{item.node.title}</Link></li>
          )}
      </ul>
    </Layout>
  )
}

export const indexQuery = graphql`
{
  allNodeArticle {
    edges {
      node {
        title
        fields {
            slug
        }
      }
    }
  }
}
`;
