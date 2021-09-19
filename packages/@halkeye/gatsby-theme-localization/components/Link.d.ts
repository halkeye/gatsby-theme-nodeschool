import { FunctionComponent } from 'react';
import { GatsbyLinkProps } from 'gatsby';
import { Namespace } from '../types';
interface LinkProps extends Omit<GatsbyLinkProps<{}>, 'ref'> {
    prefixLanguage?: boolean;
    preloadNamespaces?: Namespace[];
}
declare const Link: FunctionComponent<LinkProps>;
export default Link;
