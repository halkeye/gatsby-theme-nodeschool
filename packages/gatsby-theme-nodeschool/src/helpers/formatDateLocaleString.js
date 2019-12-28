import dateFormat from 'dateformat';

const localeFormats={
  en: `m/d/yyyy`,
  pt: `dd/mm/yyyy`,
  'pt-br': `dd/mm/yyyy`,
};

const formatDateLocaleString = (date, locale)=>{
  const localeFormat = localeFormats[locale.toLowerCase()] || localeFormats.en;
  return dateFormat(date, localeFormat);
};

export default formatDateLocaleString;