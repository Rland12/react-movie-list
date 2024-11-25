import { Col } from "react-bootstrap";
import Cards from "./Cards.jsx";
import { useState } from 'react';

function MovieList() {

    const [movie, setMovie] = useState(initialState=[
        {
          image:"https://placehold.co/80x80",
          title:"shadows of the night",
          description:"Couple finds mysterious shadows lurking in their Attic",
          rating: "stars/audience score",
          details_page: "more info about movie? deep dives?link"
        },
        {
          image:"https://placehold.co/80x80",
          title:"snight",
          description:"Solo Attic",
          rating: "stars/audience score",
          details_page: "more info about movie? deep dives?link"
        }
      ]);

      function addMovie(){
        setMovie(value=[...movie,{ title:"scaret", description:"Spookyy wooooooo",}])
      }
    return(
        <>
        {movie.map((movie, index) =>(
            <Col key={index}>
                <Cards title={movie.title} description={movie.description} />
            </Col>
        ))}
        </>
    )
}

export default MovieList