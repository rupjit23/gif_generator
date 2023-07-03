import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import useGif from '../hooks/useGif';

const API_KEY = 'aT1iOCj651DKS3x3SaLBFXDj2hFba1M7';
const Tag = () => {
  const [tag,setTag]=useState('');
   const {gif,loading,fetchData} =useGif(tag);
    function clickHandler()
    {
      fetchData();
    }
    function changeHandler(event)
    {
      setTag(event.target.value)
    }
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl -webkit-font-smoothing: antialiased underline uppercase font-bold'> Random {tag} Gif</h1>
        {
          loading ? (<Spinner></Spinner>):( <img src={gif} width="450"/>)
        }
        <input
          className='w-5/12 webkit-font-smoothing: antialiased text-lg py-2 rounded-lg mb-[6px] text-center'
          onChange={changeHandler}
          value={tag}
          placeholder='Enter your Search'
        />
       
        <button onClick={clickHandler}
        className='w-10/12 bg-yellow-500 webkit-font-smoothing: antialiased text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag