import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from '../components/layout';
import SEO from "../components/seo";

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

const MDXPage = ({ data }) => (
  <Layout>
    <SEO title={data.mdx.frontmatter.title || data.mdx.fields.slug} />

    <h1>{data.mdx.frontmatter.title}</h1>
    <div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  </Layout>
);

export default MDXPage;
