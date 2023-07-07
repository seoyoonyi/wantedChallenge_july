import { createContext } from "react";

export type RouterContextType = {
  path: string;
  push: (path: string) => void;
};

const RouterContext = createContext<RouterContextType>({
  path: window.location.pathname,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  push: (path: string) => {},
});

export default RouterContext;
