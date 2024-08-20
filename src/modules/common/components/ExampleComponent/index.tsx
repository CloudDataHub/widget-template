import {useEffect} from "react";
import {Box} from "@mui/material";
import {useSocket} from "../../providers/Ws";

export const ExampleComponent = ()=>{
  const ws = useSocket()
  
  useEffect(()=>{
    const callback = console.log
    ws.setConfigChangedCallback(callback)
    return ()=> ws.removeConfigChangedCallback(callback)
  },[])
  
  return(
    <Box
      sx={{
        width: '100px',
        height: '100px',
        backgroundColor: 'red'
      }}
    >
    </Box>
  )
}
