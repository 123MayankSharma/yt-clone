const axios = require("axios");

const API="https://youtube-v31.p.rapidapi.com" 
const requestOptions = {
  url: API,
  params: {maxResults:'40'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const getData=async(url)=>{
  const {data}=await axios.get(`${API}/${url}`,requestOptions)


  return data
}

export default getData
