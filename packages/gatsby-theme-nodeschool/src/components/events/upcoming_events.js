import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import formatDateLocaleString from "../../helpers/formatDateLocaleString";

export const UpcomingEvents = () => {
  const { t, i18n } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      allMeetupEvent(filter: {status: {eq: "upcoming"}}, limit: 1, sort: {order: ASC, fields: time}) {
        edges {
          node {
            id
            description
            name
            venue {
              address_1
              address_2
              city
              country
              lat
              localized_country_name
              lon
              name
              repinned
              state
              zip
            }
            time
            utc_offset
            updated
            rsvp_limit
            member_pay_fee
            local_time
            link
            how_to_find_us
            duration
            date_in_series_pattern
          }
        }
      }
    }
  `);
  return data.allMeetupEvent.edges.map(edge => {
    const address = edge.node.venue
      ?[
        edge.node.venue.name,
        edge.node.venue.address_1,
        edge.node.venue.address_2,
        [edge.node.venue.city,edge.node.venue.state].filter(Boolean).join(`, `),
        edge.node.venue.zip,
        edge.node.venue.localized_country_name,
      ].filter(Boolean)
      :[];
    return (
      <div key={edge.node.id}>
        <p className="register">
          <strong><a href={edge.node.link} title="Registration Link">{t(`Register`)}</a></strong> {t(`for our event on`)} <strong>{formatDateLocaleString(new Date(edge.node.time), i18n.language)}</strong>
        </p>
        {edge.node.venue && (
          <>
            <div className="location">
              <p><strong>{t(`Location`)}:</strong></p>
              <address>{address.map(line => <span key={line}>{line}<br/></span>)}</address>
              {edge.node.how_to_find_us}
            </div>
            <div className="map">

              <iframe
                title="google maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address.join(`\n`))}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                width="600"
                height="450"
                frameBorder="0"
                style={{border:0}}
                allowFullScreen
              ></iframe>
            </div>
          </>
        )}
      </div>
    );
  });
};

export default UpcomingEvents;



