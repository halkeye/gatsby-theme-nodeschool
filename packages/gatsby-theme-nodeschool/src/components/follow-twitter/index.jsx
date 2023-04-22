import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

const FollowTwitter = () => {
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
  if (!data.site.siteMetadata.twitter) {
    return;
  }
  return (
    <p>
      <a
        href={`https://twitter.com/${data.site.siteMetadata.twitter }`}
        className="twitter-follow-button"
        data-show-count="false"
      >{t('Follow @{{twitter}}', { twitter: data.site.siteMetadata.twitter })}</a>
    </p>
  );

};

export default FollowTwitter;
