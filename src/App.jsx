import './index.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Box} from "@mui/material"
import {Navbar,Feed,VideoPage,ChannelPage,SearchPage} from "./components"


function App() {
  return (
    <BrowserRouter>
    	<Box sx={{
         backgroundColor:"#26262a",
        overflow:"auto"

        }}>
    	<Navbar />
    		<Routes>
              <Route path="/" exact element={<Feed/>}/>
              <Route path="/video/:id" element={<VideoPage/>}/>
              <Route path="/channel/:id" element={<ChannelPage/>}/>
              <Route path="/search/:query" element={<SearchPage/>}/>
    		</Routes>
    	</Box>
    </BrowserRouter>
  );
}

export default App;
