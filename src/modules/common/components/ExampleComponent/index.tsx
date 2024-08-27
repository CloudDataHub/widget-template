import {useContext, useEffect, useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import {useSocket} from "../../providers/Ws";
import {ApiContext} from "../../providers/Api";

export const ExampleComponent = ()=>{
  const ws = useSocket()
  const {api} = useContext(ApiContext)
  const [isLoading, setIsLoading] = useState(false)
  const [flowResult, setFlowResult] = useState(null)
  
  useEffect(()=>{
    const callback = console.log
    ws.setConfigChangedCallback(callback)
    return ()=> ws.removeConfigChangedCallback(callback)
  },[])

  
  
  const handleLoadingStart = ()=>{
    setIsLoading(true)
  }
  const handleLoadingFinish= ()=>{
    setIsLoading(false)
  }
  
  const executeFlow = async ()=>{
    if(api?.flowApi){
      const flowResponse = await api.flowApi.execute<any>(
        {context: {testData: [1,2,3]}, contextKey: 'default'},
        {onStart: handleLoadingStart, onFinish: handleLoadingFinish})
      setFlowResult(flowResponse.result)
    }
  }
  
  return(
    <Box>
      <Button onClick={executeFlow}>
        Execute Flow
      </Button>
      
      <Typography>
        {isLoading && "isLoading"}
        {flowResult && JSON.stringify(flowResult)}
      </Typography>
    </Box>
  )
}
