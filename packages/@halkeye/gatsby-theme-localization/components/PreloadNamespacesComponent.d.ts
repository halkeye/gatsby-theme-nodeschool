import React from 'react';
interface CreateComponentFnArgs {
    resourceBundle: string;
}
declare type CreateComponentFn = ({ resourceBundle }: CreateComponentFnArgs) => React.ComponentType;
declare const createPreloadNamespacesComponent: CreateComponentFn;
export default createPreloadNamespacesComponent;
