import React from "react";
import { Stack, Box } from "@mui/material";
import {VideoCard,ChannelCard} from "./index"

// import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({videoData}) => {
  // if(!videos?.length) return <Loader />;
  return (
    <Stack direction= {"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
            {videoData.map((fetchedItem,idx)=>{
              return(<Box
                      key={idx}
                    >
                      {fetchedItem.id.channelId && <ChannelCard channelDetail={fetchedItem}/>}
                     {fetchedItem.id.videoId && <VideoCard video={fetchedItem}/>}
                </Box>)
            })}
    </Stack>
  );
}

export default Videos;

