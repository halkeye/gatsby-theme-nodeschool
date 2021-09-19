/// <reference types="react" />
import { PluginOptions } from '../../types';
import { ReplaceRendererArgs as OriginalReplaceRendererArgs } from 'gatsby';
interface ReplaceRendererArgs extends OriginalReplaceRendererArgs {
    pathname: string;
    bodyComponent: React.ReactElement;
}
export declare const replaceRenderer: ({ bodyComponent, pathname, replaceBodyHTMLString }: ReplaceRendererArgs, { languages, namespaces, ...options }: PluginOptions) => void;
export {};
