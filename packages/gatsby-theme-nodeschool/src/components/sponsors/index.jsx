import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Hexagons from '../hexagons';

const Sponsors = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      allSponsorsYaml(sort: { name: DESC } ) {
        edges {
          node {
            name
            link
            logo {
              publicURL
              childImageSharp {
                fixed(width: 500, height: 500) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);
  if (!data.allSponsorsYaml.edges.length) {
    return null;
  }
  return (
    <>
      {/* sponsors */}
      <h2 id="sponsors">{t(`Sponsors`)}</h2>
      <Hexagons data={data.allSponsorsYaml.edges.map(edge => {
        return {
          id: edge.node.name,
          href: edge.node.link,
          image: edge.node.logo?.childImageSharp?.fixed?.src || edge.node.logo?.publicURL,
        }
      })} />
    </>
  );
};

export default Sponsors;

