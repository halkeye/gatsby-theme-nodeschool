module.exports = {
  presets: [`babel-preset-gatsby`],
  plugins: [
    [
      `i18next-extract`,
      {
        keySeparator: null,
        nsSeparator: null,
        keyAsDefaultValue: [`en`],
        useI18nextDefaultValue: [`en`],
        discardOldKeys: true,
        outputPath: `src/locales/{{locale}}/{{ns}}.json`,
        customTransComponents: [[`gatsby-plugin-react-i18next`, `Trans`]],
        transKeepBasicHtmlNodesFor: [`br`, `strong`, `i`, `p`, `code`],
      },
    ],
  ],
  overrides: [
    {
      test: [`**/*.ts`, `**/*.tsx`],
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
};
