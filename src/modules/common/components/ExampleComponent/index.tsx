import {useEffect, useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import {flowApi} from "../../api";
import {PostMessageEvents} from "creo-widgets-base/lib/enums";
import {useEvents} from "../../providers/EventHandler";

export const ExampleComponent = ()=>{
  const eventHandler = useEvents()
  const [isLoading, setIsLoading] = useState(false)
  const [flowResult, setFlowResult] = useState(null)
  
  
  useEffect(()=>{
    const callback = console.log
    eventHandler.setCallback({event: PostMessageEvents.GROUP_CONFIG_CHANGED, callback})
    return ()=> eventHandler.removeCallback(PostMessageEvents.GROUP_CONFIG_CHANGED)
  },[])
  
  
  const handleLoadingStart = ()=>{
    setIsLoading(true)
  }
  const handleLoadingFinish= ()=>{
    setIsLoading(false)
  }
  
  const executeFlow = async ()=>{
      const flowResponse = await flowApi.execute<any>(
        {context: {testData: [1,2,3]}, contextKey: 'default'},
        {onStart: handleLoadingStart, onFinish: handleLoadingFinish})
      setFlowResult(flowResponse.result)
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
