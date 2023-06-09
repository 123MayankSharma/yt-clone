import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {Paper,IconButton} from "@mui/material"
import {Search} from "@mui/icons-material"

const SearchBar=()=>{
  const [query, setQuery] = useState("")
  const navigate=useNavigate()
  const submitHandler=(e)=>{
   e.preventDefault();

    if(query){
      navigate(`/search/${query}`)
      setQuery("")
    }
  }
    return(<>
       <Paper
      onSubmit={submitHandler}
      component='form'
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        backgroundColor:"#bababa"
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}
        style={{border:"none",outline:"none",backgroundColor:"#bababa"}}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Search/>
      </IconButton>
    </Paper>
    </>)
}

export default SearchBar
