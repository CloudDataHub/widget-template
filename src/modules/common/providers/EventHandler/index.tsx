import {createContext, PropsWithChildren, useContext} from "react";
import {EventHandler} from "creo-widgets-base";


const  eventHandler = EventHandler.create()
export const EventContext = createContext(eventHandler);

export const useEvents = () => {
  return useContext(EventContext);
};
export const EventsProvider = ({ children }: PropsWithChildren) => {
  return <EventContext.Provider value={eventHandler}>{children}</EventContext.Provider>;
}
