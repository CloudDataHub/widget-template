import {PropsWithChildren} from "react";
import {getQueries} from "creo-widgets-lib/lib/query";
import {createContext} from "react";

export const WidgetPropsProviderContext = createContext(getQueries());

export const WidgetPropsProvider = ({ children }: PropsWithChildren) => {
  return <WidgetPropsProviderContext.Provider value={getQueries()}>{children}</WidgetPropsProviderContext.Provider>;
}
