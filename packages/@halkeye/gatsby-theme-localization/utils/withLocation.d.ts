import React from 'react';
import { WindowLocation, NavigateFn } from '@reach/router';
import { Subtract } from 'utility-types';
export interface WithLocationProps {
    location: WindowLocation;
    navigate: NavigateFn;
}
declare const withLocation: <Props extends WithLocationProps>(Component: React.ComponentType<Props>) => React.FunctionComponent<Subtract<Props, WithLocationProps>>;
export default withLocation;
