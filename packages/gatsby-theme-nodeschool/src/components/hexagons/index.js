import React from "react";
import PropTypes from 'prop-types';
import RealHexagon from 'react-hexagon';
import * as styles from './style.module.css';

const Hexagons = ({ data }) => (
  <div className={styles.container}>
    {data.map(d => (
      <RealHexagon
        key={d.id}
        href={d.href}
        style={{ backgroundColor: `white` }}
        backgroundImage={d.image}
        rel={d.rel}
        target={d.target}
      />
    ))}
  </div>
);

Hexagons.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rel: PropTypes.string,
      target: PropTypes.string,
    }),
  ),
};

export default Hexagons;

