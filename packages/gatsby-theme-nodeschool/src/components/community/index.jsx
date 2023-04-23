import React from "react";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

const Community = () => {
  const { t } = useTranslation();
  return (
    <>
    <h2 id="community">{t(`Community`)}</h2>

      <Trans>
        The NodeSchool community is <strong>open to anyone</strong>.

        Whether you&apos;re able to attend an event or not, you can join the discussion around learning Node.
      </Trans>
    </>
  );
};
export default Community;

