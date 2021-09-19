import React from 'react';
import { WithLocationProps } from './utils/withLocation';
import { PluginOptions } from './types';
interface WrapRootProps extends WithLocationProps {
    children: React.ReactNode;
    options: PluginOptions;
}
declare const _default: React.FunctionComponent<import("utility-types").Subtract<WrapRootProps, WithLocationProps>>;
export default _default;
