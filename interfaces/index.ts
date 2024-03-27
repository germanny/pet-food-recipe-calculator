/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: {
      connect: () => any;
    };
    devToolsExtension: any;
    // eslint-disable-next-line camelcase
    _fs_ready: () => void;
    Cypress: any;

    FS: {
      event: (
        eventName: string,
        eventProperties: { [key: string]: unknown }
      ) => void;
    };
  }
}

export type VoidFunc = () => void;

export type AnyFunc = (any) => void;
