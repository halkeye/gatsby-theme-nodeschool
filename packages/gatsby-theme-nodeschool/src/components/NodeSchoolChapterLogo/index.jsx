import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

const NodeSchoolChapterLogo = () => {
  useTranslation();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "nodeschool-chapter-logo.svg" }) {
        extension
        publicURL
      }
    }
  `);
  return (
    <div style={{
      margin: `auto`,
    }}>
      <div style={{ width: `100%`, height: `100%` }}>
        <img
          src={data.placeholderImage.publicURL}
          alt={data.site.siteMetadata.title}
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            display: `block`,
            width: `250px`,
            maxWidth: `250px`,
          }}
        />
      </div>

      <h1 style={{
        fontSize: `50px`,
        lineHeight: `140%`,
        textAlign: `center`,
        fontWeight: `300`,
        margin: `0 auto 60px`,
        letterSpacing: `-1px`,
        color: `#C0493D`, // FIXME - siteMeta color
      }}>
        <Trans>Welcome to the <br/>{{ nodeschoolTitle: data.site.siteMetadata.title }}</Trans>
      </h1>
    </div>
  );
};

export default NodeSchoolChapterLogo;

