import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";

export const FollowTwitter = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
        }
      }
    }
  `);
  return (
    <p>
      <a
        href={`https://twitter.com/${data.site.siteMetadata.twitter}`}
        className="twitter-follow-button"
        data-show-count="false"
      >{t(`Follow`)} @{data.site.siteMetadata.twitter}</a>
    </p>
  );

};

export default FollowTwitter;
