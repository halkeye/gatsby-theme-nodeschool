import React from "react";
import UpcomingEvents from './past_events.js';
import PastEvents from './upcoming_events.js';

const Events = () => {
  return (
    <>
      <UpcomingEvents />
      <hr />
      <PastEvents />
    </>
  );
};
export default Events;


