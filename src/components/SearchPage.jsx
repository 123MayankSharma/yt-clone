
import {Box,Typography} from "@mui/material"
import {useState,useEffect} from "react"
import {Videos} from "./index"
import getData from "../utils/ApiData"
import { useParams } from "react-router-dom"
const SearchPage=()=>{
    const [videoData,setVideoData]=useState([])
    const {query}=useParams()
    useEffect(()=>{
     getData(`search?part=snippet&q=${query}`)
            .then((data)=>{
                setVideoData(data.items)
            })
    },[query])
    return(
     <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Videos Related to <span style={{ color: "#FC1503" }}>{query}</span>
        </Typography>
            <Videos videoData={videoData}/>
          </Box>
    )
}


export default SearchPage



