import { GatsbySSRFunctionMethods } from '../../types';
declare const functionRunner: (type: GatsbySSRFunctionMethods) => (...args: any[]) => Promise<void>;
export default functionRunner;
