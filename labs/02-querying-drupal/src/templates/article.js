import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function BlogPost({ data }) {
    return (
        <Layout>
            <SEO title="Blog post" description="An amazing blog post!" />
            <body dangerouslySetInnerHTML={{
                __html: data.nodeArticle.body.processed
            }}/>
        </Layout>
    );
}

export const blogPostQuery = graphql`
  query GetArticleBySlug($slug: String!) {
    nodeArticle(fields:{slug:{eq:$slug}}) {
      body {
        value
        format
        processed
      }
    }
}
`