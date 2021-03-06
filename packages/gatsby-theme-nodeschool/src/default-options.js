/* eslint-env node */
module.exports = themeOptions => {
  if (!themeOptions) {
    themeOptions = {};
  }
  if (!themeOptions.credits) {
    themeOptions.credits = {};
  }
  themeOptions.credits = {
    logo: {
      name: ``,
      url: ``,
    },
    ...themeOptions.credits,
  };

  return {
    title: `Unknown Node School`,
    description: `Website for Unknown Node School.`,
    defaultLanguage: `en`,
    url: ``,
    twitter: ``,
    github: ``,
    slack: ``,
    meetupGroup: ``,
    email: ``,
    mailchimpSubscribeUrl: ``,
    ...themeOptions,
  };
};
