import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Hexagons from '../hexagons';

const Photos = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {sourceInstanceName: {eq: "photos"}},
        sort: {relativePath: DESC}
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 500, height: 500) {
                src
              }
              original {
                src
              }
            }
            id
            relativeDirectory
            relativePath
          }
        }
      }
    }
  `);
  return (
    <>
      <h2 id="photos">{t(`Photos`)}</h2>
      <Hexagons data={data.allFile.edges.map(edge => {
        return {
          id: edge.node.id,
          href: edge.node.childImageSharp.original.src,
          image: edge.node.childImageSharp.fixed.src,
          rel: `noopener noreferrer`,
            target:`_blank`,
        };
      })} />
    </>
  );
};
export default Photos;
