import { useContext } from "react";
import RouterContext from "../context/routerContext";

export const useRouter = () => useContext(RouterContext);
