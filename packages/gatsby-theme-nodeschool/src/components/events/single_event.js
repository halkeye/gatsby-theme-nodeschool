import React from "react";

const SingleEvent = ({ description, name, venue }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div dangerouslySetInnerHTML={{ __html:  description }} />
      {venue && (
        <div>
          {venue.name}
          {venue.repinned}
          {venue.address_1}
          {venue.address_2}
          {venue.city}
          {venue.state}
          {venue.zip}
          {venue.country}
          {venue.lat},{venue.lon}
          {venue.localized_country_name}
        </div>
      )}
    </div>
  );
};


export default SingleEvent;
