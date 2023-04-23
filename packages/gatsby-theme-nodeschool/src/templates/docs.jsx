import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from '../components/layout';
import SEO from "../components/seo";

export const query = graphql`
  query($id: String!, $language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      parent {
        ... on File {
          name
          absolutePath
        }
      }
    }
  }
`;

const MDXPage = ({ data: { mdx }, children }) => (
  <Layout>
    <SEO title={mdx.parent.name || mdx.fields.slug} />

    <h1>{mdx.parent.name}</h1>
    <div>
      {children}
    </div>
  </Layout>
);

export default MDXPage;
