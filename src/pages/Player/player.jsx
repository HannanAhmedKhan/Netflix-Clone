import React, { useEffect, useState } from "react";
import "./player.css";
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const Player = () => {


const[apiData,setApiData]=useState({
name:"",
key:"",
published_at:"",
type:""
})



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDQ3MzIzYzBkNGQ1ZjI5NzAyY2FlOWY1ZTkyNjVkMyIsIm5iZiI6MTc0MjI4OTExMC44MzAwMDAyLCJzdWIiOiI2N2Q5MzhkNjU2MmU4MzJjOTczNjVlYjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.r5tzTMNj7YW2hsbo5MCJ9EOR2pnS0fLL5fc7hAc0wEI'
    }
  };
  
useEffect(() => {
  const fetchTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      
      const data = await response.json();
      console.log("API Response for Player:", data); // Debugging

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      if (data.results && data.results.length > 0) {
        setApiData(data.results[0]);
      } else {
        setApiData(null);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
      setApiData(null);
    }
  };

  fetchTrailer();
}, [id]);




  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
