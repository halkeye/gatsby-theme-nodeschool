import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

const EventFooter = () => {
  useTranslation();
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
      <Trans>
        <strong>NodeSchool</strong> strives to be a welcoming and safe event for all attendees.
        Attendees should follow the <a href="#codeofconduct">code of conduct</a>.
        If you need further information about an event, please contact the organizers at 
        {` `}
        <a style={{ fontWeight: `bold` }} href={`mailto:${data.site.siteMetadata.email}`} rel="noopener noreferrer" target="_blank">{{ email: data.site.siteMetadata.email }}</a>
      </Trans>
    </p>
  );
};

export default EventFooter;
