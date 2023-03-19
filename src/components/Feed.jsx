import {Box,Stack,Typography} from "@mui/material"
import {useState,useEffect} from "react"
import {Sidebar,Videos} from "./index"
import getData from "../utils/ApiData"
const Feed=()=>{
    const [category,setCategory]=useState("New")
    const [videoData,setVideoData]=useState([])
    useEffect(()=>{
     getData(`search?part=snippet&q=${category}`)
            .then((data)=>{
                setVideoData(data.items)
            })
    },[category])
    return(
        <Stack sx={{
         flexDirection:{sx:"column",md:"row"},
         overflow:"auto"
        }}>
            <Box sx={{
            height:{sx:"auto",md:"92vh"},
            borderRight:"1px solid #828282",
            px:{sx:0,md:2},
            color:"#e3e3e3",
            width:"30vh",
            minHeight:"100vh",
            }}>
            <Sidebar
             category={category}
             setCategory={setCategory}
            /> 
            </Box>
             <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {category} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
            <Videos videoData={videoData}/>
          </Box>

        </Stack>
    )
}


export default Feed
