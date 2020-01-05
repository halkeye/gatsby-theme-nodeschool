import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";

export const EventFooter = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);
  return (
    <p className="additional">
      <strong>NodeSchool</strong>
      {` `}
      {t(`strives to be a welcoming and safe event for all attendees`)}.
      {` `}
      {t(`Attendees should follow the`)}.
      {` `}<a href="#codeofconduct">{t(`Code of Conduct`).toLowerCase()}</a>.
      {` `}
      {t(`If you need further information about an event, please contact the organizers at`)}.
      {` `}
      <a
        style={{fontWeight: `bold`}}
        href={`mailto:${data.site.siteMetadata.email}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {` ` + data.site.siteMetadata.email}
      </a>
    </p>
  );
};

export default EventFooter;
