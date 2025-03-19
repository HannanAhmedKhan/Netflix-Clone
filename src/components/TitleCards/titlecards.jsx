import React, { useEffect, useRef, useState } from "react";
import "./titlecards.css";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Access env variable

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?API_KEY=${API_KEY}&language=en-US&page=1`,
          options
        );

        const data = await response.json();
        console.log("API Response for category", category, data); // Debugging

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        setApiData(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setApiData([]); // Ensures no UI crash
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.length > 0 ? (
          apiData.map((card, index) => (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default TitleCards;