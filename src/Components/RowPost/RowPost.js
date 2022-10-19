import React, { useEffect, useState } from 'react'
import axios from "../../axios"
import YouTube from 'react-youtube'
import {imageUrl,API_KEY} from "../../constants/constants"
import "./RowPost.css"

function RowPost(props) {
    const [movies,setMovies] =useState([])
    
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)

        })
      
    
      
        
    }, [])
    const opts={
        height:"360",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };
    const handleMovie =(id)=>{
        console.log(id)
        axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
        
    }
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster":'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />

                )}

                
                


    
            </div >
            <YouTube opts={opts}  videoId='' />

        </div>
    )
}

export default RowPost
