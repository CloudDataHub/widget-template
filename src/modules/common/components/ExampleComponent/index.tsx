import {useContext, useEffect} from "react";
import {ApiContext} from "../../providers/Api";

export const ExampleComponent = ()=>{
  const {api} = useContext(ApiContext)
  console.log(api)
  
  useEffect(()=>{
    if(api){
      const result = api.widgetApi.getData()
      result.then(console.log)
    }
  }, [api])
  
  return(<div></div>)
}
