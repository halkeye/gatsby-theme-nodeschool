declare type SomeModule = {
    default: any;
} | any;
declare const preferDefault: (m: SomeModule) => any;
export default preferDefault;
