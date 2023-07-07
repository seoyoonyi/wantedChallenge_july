import React, { useEffect, useState } from "react";
import RouterContext, { RouterContextType } from "../context/routerContext";

type RouterProps = {
  children: React.ReactNode;
};

export const Router: React.FC<RouterProps> = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  function push(newPath: string) {
    window.history.pushState({}, "", newPath);
    setPath(newPath);
  }

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const contextValue: RouterContextType = {
    path,
    push,
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};
