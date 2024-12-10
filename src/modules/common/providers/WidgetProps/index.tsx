import {PropsWithChildren} from "react";
import {createContext} from "react";
import {getQueries} from "creo-widgets-base/lib/query";

export const WidgetPropsProviderContext = createContext(getQueries());

export const WidgetPropsProvider = ({ children }: PropsWithChildren) => {
  return <WidgetPropsProviderContext.Provider value={getQueries()}>{children}</WidgetPropsProviderContext.Provider>;
}
