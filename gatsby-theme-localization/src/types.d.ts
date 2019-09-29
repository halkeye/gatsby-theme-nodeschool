import { TOptions } from "i18next";
import { globalResourceBundleName } from "./utils/const";

type LanguageType = string;
type NamespaceType = string;
type LocaleDirType = string;

export interface PluginOptions {
  languages: LanguageType[];
  namespaces: NamespaceType[];
  localesDir: LocaleDirType;
  defaultLng?: string;
  allowIndex?: boolean,
  i18nPlugin?: object;
  i18next?: TOptions;
  suspenseFallback?: string;
  embedTranslations?: EmbedTranslationsOption
}

interface PreloadNamespace {
  exact?: string;
  regex?: RegExp | string;
  namespaces: Namespace[]
  languages?: LanguageType[];
}

interface EmbedTranslationsOption {
  preloadFallbackLng?: boolean;
  preloadNamespaces: PreloadNamespace[];
}

export type Namespace = string;

declare global {
  interface Window { 
    [globalResourceBundleName]: string; // actually ResourceBundle but JSON
  }
}

export interface ResourceBundle {
  lang: LanguageType;
  namespaces: {
    [key: NamespaceType]: object;
  }
}