import { GatsbyNodeFunctionMethods } from '../../types';
declare const functionRunner: (type: GatsbyNodeFunctionMethods) => (...args: any[]) => Promise<void>;
export default functionRunner;
