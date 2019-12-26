import React from "react";
import { useTranslation } from "react-i18next";

export const Sponsors = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* sponsors */}
      <h2 id="sponsors">{t(`Sponsors`)}</h2>
      {/*
        <div className="list-sponsors cf">
          <a href="https://shopify.com">
            <img src="i/shopify.svg" />
          </a>
        </div>
      */}
    </>
  );
};
export default Sponsors;
