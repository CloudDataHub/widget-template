import {createContext, PropsWithChildren, useContext} from "react";
import {WidgetGroupConfigWs} from "creo-widgets-lib";


const  widgetGroupConfigWs = new WidgetGroupConfigWs()
export const WsContext = createContext(widgetGroupConfigWs);

export const useSocket = () => {
  return useContext(WsContext);
};
export const WsProvider = ({ children }: PropsWithChildren) => {
  return <WsContext.Provider value={widgetGroupConfigWs}>{children}</WsContext.Provider>;
}
