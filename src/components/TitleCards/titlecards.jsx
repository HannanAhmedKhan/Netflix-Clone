import React, { useEffect, useRef, useState } from "react";
import "./titlecards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category = "popular" }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const Authorization = import.meta.env.VITE_TMDB_Authorization;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${Authorization}`,
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!category) return;

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
          options
        );

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        console.log("API Response for category", category, data); // Debugging

        setApiData(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setApiData([]); // Ensures UI doesn't break
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        
          {apiData.map((card, index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
        
          })}
        
      </div>
    </div>
  )
}

export default TitleCards;
