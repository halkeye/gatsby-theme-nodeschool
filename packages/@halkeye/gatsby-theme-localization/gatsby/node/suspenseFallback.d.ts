/**
 * Functionality for using custom suspense fallback component
 */
import { ParentSpanPluginArgs, CreateWebpackConfigArgs } from 'gatsby';
import { PluginOptions } from '../../types';
export declare const onPreInit: ({}: ParentSpanPluginArgs, { suspenseFallback }: PluginOptions) => void;
export declare const onCreateWebpackConfig: ({ actions, plugins }: CreateWebpackConfigArgs) => void;
