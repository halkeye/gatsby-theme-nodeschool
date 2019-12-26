import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>{t(`You just hit a route that doesn&#39;t exist... the sadness`)}.</p>
    </Layout>
  );
};

export default NotFoundPage;
