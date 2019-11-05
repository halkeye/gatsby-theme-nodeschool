/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import "../scss/index.scss";

import styled from "@emotion/styled";

const BodyContainer = styled.div`
  margin: 5em;
  padding: 1em;
  background: white;
  color: black;
  min-height: 100%;
  height: 100%;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

const Layout = ({ noWrapper, children }) => {
  return (
    <>
      <div>
        {noWrapper && <main>{children}</main>}
        {!noWrapper && <BodyContainer>{children}</BodyContainer>}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noWrapper: PropTypes.bool,
};

export default Layout;
