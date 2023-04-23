/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import "../css/index.css";
import * as styles from './layout.module.css';

const Layout = ({ noWrapper, children }) => {
  return (
    <>
      <main className={noWrapper ? `` : styles.bodywrapper}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noWrapper: PropTypes.bool,
};

export default Layout;
