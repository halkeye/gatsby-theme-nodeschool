import dateFormat from 'dateformat';

const localeFormats = {
  en: `m/d/yyyy`,
  pt: `dd/mm/yyyy`,
  'pt-br': `dd/mm/yyyy`,
};

function formatDateLocaleString (date, locale = `en`) {
  const localeFormat = localeFormats[locale.toLowerCase()] || localeFormats.en;
  return dateFormat(date, localeFormat);
}

export default formatDateLocaleString;
