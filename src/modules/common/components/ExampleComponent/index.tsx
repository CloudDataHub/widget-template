import {useContext, useEffect, useState} from "react";
import {ApiContext} from "../../providers/Api";
import {Box, Typography} from "@mui/material";

export const ExampleComponent = ()=>{
  const {api} = useContext(ApiContext)
  const [isLoading, setIsLoading] = useState(false)
  const [documents, setDocuments] = useState(null)
  
  
  const handleLoadingStart = ()=>{
    setIsLoading(true)
  }
  const handleLoadingFinish= ()=>{
    setIsLoading(false)
  }
  
  useEffect(()=>{
    const getDocuments = async () =>{
      if(api){
        const result = await api.documentApi.get(
          {pageNumber: 1, limit: 10},
          {onStart: handleLoadingStart, onFinish: handleLoadingFinish}
        )
        setDocuments(result)
      }
    }
    
    getDocuments()

  }, [api])
  
  return(
    <Box>
      <Typography>
        {isLoading && "isLoading"}
        {documents && JSON.stringify(documents)}
      </Typography>
    </Box>
  )
}
