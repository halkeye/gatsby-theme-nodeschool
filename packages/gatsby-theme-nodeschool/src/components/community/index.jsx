import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";

export const Community = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
          slack
        }
      }
    }
  `);
  return (
    <>
    <h2 id="community">{t(`Community`)}</h2>

    <p>
      {t(`The NodeSchool community is`)} <strong>{t(`open to anyone`)}</strong>. 
      {` `}
      {t(`Whether you're able to attend an event or not, you can join the discussion around learning Node`)}
      {` `}
      {
        [
          data.site.siteMetadata.slack ? t(`in our Slack channel`) : null,
          data.site.siteMetadata.twitter ? t(`by following us on Twitter`) : null,
        ].filter(Boolean).join(` ` + t(`or`) + ` `)
      }
    </p>
    </>
  );
};
export default Community;

