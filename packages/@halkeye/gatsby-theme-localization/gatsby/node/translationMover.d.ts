/**
 * Functionality for moving (and watching) translation files into public folder
 */
import { PluginOptions } from '../../types';
import { ParentSpanPluginArgs } from 'gatsby';
export declare const onPostBootstrap: (args: ParentSpanPluginArgs, userOptions: PluginOptions) => Promise<void>;
