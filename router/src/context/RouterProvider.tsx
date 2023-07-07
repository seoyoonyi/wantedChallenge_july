import React, { useContext, useEffect, useState } from "react";
import RouterContext, { RouterContextType } from "./routerContext";

export const RouterProvider: React.FC = ({ children }: any) => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const contextValue: RouterContextType = {
    path,
    push: (newPath) => {
      window.history.pushState({}, "", newPath);
      setPath(newPath);
    },
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};
