import React from "react";
import { useRouter } from "../hooks/useRouter";

type RouteProps = {
  path: string;
  component: React.ReactNode;
};

export const Route: React.FC<RouteProps> = ({ path, component }) => {
  const router = useRouter();

  return router.path === path ? <>{component}</> : null;
};
