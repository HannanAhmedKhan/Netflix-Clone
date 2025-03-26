import React, { useEffect, useState } from "react";
import "./player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useParams } from "react-router";

const Player = () => {

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });


  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const Authorization = import.meta.env.VITE_TMDB_Authorization;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${Authorization}`
    }
  };

  useEffect(() => {
     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
          options)
          .then(response => response.json())
          .then(Response =>  setApiData(Response.results[0]))
          .then(response => console.log (response))
          .catch(err => console.error(err));
 }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameBorder='0'
          allowFullScreen
        ></iframe>/.
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
