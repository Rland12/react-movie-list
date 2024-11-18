// import { useState } from 'react'

import {Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Navbarc from "./components/Navbarc.jsx";
import Cards from "./components/Cards.jsx";
import CarouselBanner from './components/CarouselBanner.jsx';

function App() {
  const movieCard = [
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
  ]
  
  return (
    <>
     <Navbarc/>
     <Container fluid>
      <CarouselBanner/>
      <Row>
        {movieCard.map((movie, index) =>(
            <Col key={index}>
                <Cards title={movie.title} description={movie.description} />
            </Col>
        ))}
      </Row>
      </Container>

    </>
  )
}

export default App
