import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {Videos,ChannelCard} from "./index"
import getData from "../utils/ApiData"
const ChannelPage=()=>{
    const [channel,setChannel]=useState(null)
    const [videos,setVideos]=useState([])
    const {id}=useParams()
    console.log(id)
   useEffect(() => {
    const fetchResults = async () => {
      const data = await getData(`channels?part=snippet&id=${id}`);

      setChannel(data?.items[0]);
      const videosData = await getData(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
    console.log("hey")
    return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channel} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videoData={videos} />
      </Box>
    </Box>
  );
};

export default ChannelPage;
