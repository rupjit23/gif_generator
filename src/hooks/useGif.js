import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';

const API_KEY = 'aT1iOCj651DKS3x3SaLBFXDj2hFba1M7';

const useGif = (tag) => {
   
    const [gif,setgif]=useState('');
    const [loading,setloading]=useState('false')
    const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    
    async function fetchData(tag)
    {
      setloading(true);
     
      const {data} = await axios.get(tag ? tagMemeurl : randomurl);
      const imageSource=data.data.images.downsized_large.url;
      setgif(imageSource);
      setloading(false);
    }
    useEffect(()=>
    {
      fetchData();
    },[])
  return{
    gif,loading,fetchData
  };
  
}

export default useGif