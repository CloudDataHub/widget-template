import {PropsWithChildren, useEffect, useState} from "react";
import {createContext} from "react";
import {ConnectionApi, DocumentApi, WidgetApi} from "creo-widgets-lib";
import {IApiContext} from "../WidgetProps/interface";

const baseState: IApiContext = {
  isFailed: false,
  isInitialized: false,
  isLoading: false,
  api: null
}
export const ApiContext = createContext<IApiContext>(baseState);

export const ApiProvider = ({ children }: PropsWithChildren) => {
  const [apiState, setApiState] = useState({...baseState, isInitialized: true})
  
  useEffect(()=>{
    
    const initApi = async ()=>{
      try {
        setApiState(prevState => ({...prevState, isLoading: true, isFailed: false}))
        const connectionApi = new ConnectionApi()
        const connectionData = await connectionApi.getDbConnections()
        
        const widgetApi = new WidgetApi()
        const documentApi = new DocumentApi(connectionData)
        
        const api = {documentApi, widgetApi}
        
        setApiState(prevState => ({...prevState, isLoading: false, api }))
      }catch (e) {
        setApiState(prevState => ({...prevState, isLoading: false, isFailed: true}))
      }
    }
    
    initApi()

  }, [])
  
  return <ApiContext.Provider value={apiState}>{children}</ApiContext.Provider>;
}
