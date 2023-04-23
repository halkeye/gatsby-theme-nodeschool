import React from "react";
import PropTypes from 'prop-types';
import Hexagons from '../hexagons';

const PeopleHexagons = ({ people }) => (
  <Hexagons data={people.map(person => {
      return {
        id: person.id,
        href: person.twitter ? `https://twitter.com/${person.twitter}` : `https://github.com/${person.github}`,
        image: `https://avatars3.githubusercontent.com/${ person.github }?v=3&amp;s=120`,
        rel: `noopener noreferrer`,
        target: `_blank`,
      };
  })} />
);

PeopleHexagons.propTypes = {
  people:  PropTypes.arrayOf(
    PropTypes.shape({
      github: PropTypes.string.isRequired,
      twitter: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};

export default PeopleHexagons;
